import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"
import { AuthenticatedUser, Booking, BookingRequest, PaymentMethod, Price, ValuePiece } from "../types/types"
import { createBooking, editBooking, getBookings } from "../helpers/apiCalls"
import { useCowork } from "./CoworkContext"
import { useUser } from "./UserContext"




interface BookingContextType {
  userBookings: Booking[]
  currentlyEditing: Booking | null,
  bookingRequest: BookingRequest | null,
  error: string | null,
  setEditing: (booking: Booking | null) => void,
  createRequest: (value: [ValuePiece, ValuePiece]) => void,
  changePaymentMethod: (paymentMethod: PaymentMethod) => void,
  resetRequest: () => void
  postBooking: (user: AuthenticatedUser) => Promise<boolean>,
  getUserBookings: (user: AuthenticatedUser) => Promise<Booking[] | null>,
  clearError: () => void,
  updateBooking: (user: AuthenticatedUser) => Promise<Booking | null>
}

const defaultState: BookingContextType = {
  userBookings: [],
  currentlyEditing: null,
  bookingRequest: null,
  error: null,
  setEditing: (booking) => {},
  createRequest: (value) => {},
  changePaymentMethod: (paymentMethod) => {},
  resetRequest: () => {},
  postBooking: async (user) => {return false},
  getUserBookings: async () => {return null},
  clearError: () => {},
  updateBooking: async (user) => {return null}
}

const BookingContext = createContext<BookingContextType>(defaultState)

const BookingProvider = ({ children }: PropsWithChildren) => {
  const {coworkBySlug} = useCowork()
  const [currentlyEditing, setCurrentlyEditing] = useState<Booking | null>(defaultState.currentlyEditing)
  const [bookingRequest, setBookingRequest] = useState<BookingRequest | null>(defaultState.bookingRequest)
  const [userBookings, setUserBookings] = useState<Booking[]>([])
  const [updatedBooking, setUpdatedBooking] = useState<Booking | null>()
  const [error, setError] = useState<string | null>(defaultState.error)
  const {user} = useUser()

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        if (user && user) {
          const response = await getBookings(user as AuthenticatedUser);
          if (response && Array.isArray(response)) {
            setUserBookings(response);
          }
        }
      } catch (error) {
        setError('Failed to fetch bookings'); // Set error state if fetching fails
      }
    };

    fetchBookings();
  }, [user])

  const setEditing = async (booking: Booking | null) => {
    setCurrentlyEditing(booking)
  }

  const postBooking = async (user: AuthenticatedUser) => {
    if(bookingRequest){
      const response = await createBooking(bookingRequest, user)
      if(response._id){
        return true
      }
    }
    return false
  }

  const createRequest = async (value: [ValuePiece, ValuePiece]) => {
    const startDate = value[0]
    const endDate = value[1]
    if(startDate && endDate){
      const duration = Math.floor((endDate?.getTime() - startDate?.getTime()) / (24 * 60 * 60 * 1000)) + 1

      let totalPrice: number = 0
      if(duration < 7 && coworkBySlug){
       const price = coworkBySlug.pricing.find((price) => price.interval === 'daily' )
       totalPrice = (price as Price).price * duration
      }else if(duration < 30 && coworkBySlug){
       const price = coworkBySlug.pricing.find((price) => price.interval === 'weekly' )
       totalPrice = Math.floor((price as Price).price * duration / 7)
      }else if(coworkBySlug){
       const price = coworkBySlug.pricing.find((price) => price.interval === 'monthly' )
       totalPrice = (price as Price).price * duration / 30
      }

      if(coworkBySlug && totalPrice){
        setBookingRequest({
          cowork: coworkBySlug._id,
          paymentMethod: "visaMastercard",
          priceTotal: totalPrice,
          startDate: startDate,
          endDate: endDate
        })
      }
    }else{
      console.log('Not a complete range of dates')
    }
  }

  const changePaymentMethod = (paymentMethod: PaymentMethod) => {
    if(bookingRequest){
      setBookingRequest({
        ...bookingRequest,
        paymentMethod: paymentMethod
      })
    }

  }

  const resetRequest = () => {
    setBookingRequest(null)
  }

  const getUserBookings = async (user: AuthenticatedUser): Promise<Booking[] | null> => {
    const response = await getBookings(user)
      if(response){
          if(Array.isArray(response)){
              setUserBookings(response)
              return response as Booking[]
          }
      }
    return null
  }

  const clearError = () => {
    setError('')
  }

  const updateBooking = async (user: AuthenticatedUser): Promise<Booking | null> => {
    if(bookingRequest && currentlyEditing?._id){
      
      
      const response = await editBooking(currentlyEditing?._id, user, bookingRequest)
      if(response._id){
        setUpdatedBooking(response)
        return response as Booking
      }
      return null
    }
    return null
    
  }

  return (
    <BookingContext.Provider value={{userBookings, currentlyEditing, bookingRequest, error, setEditing, createRequest, changePaymentMethod, resetRequest, postBooking, getUserBookings, clearError, updateBooking }} >
      {children}
    </BookingContext.Provider>
  )
}

const useBooking = () => {
  const booking = useContext(BookingContext)
  return booking
}

export {
  BookingProvider,
  useBooking
}