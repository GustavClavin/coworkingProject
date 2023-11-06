import { createContext, PropsWithChildren, useContext, useState } from "react"
import { Booking, BookingRequest } from "../types/types"


interface BookingContextType {
  bookingRequest: BookingRequest | null,
  userBookings: Booking[],
  error: string | null,
  postBooking: (bookingRequest: BookingRequest) => Promise<Booking | undefined>,
  getUserBookings: () => Promise<Booking[] | undefined>,
  clearError: () => void
}

const defaultState: BookingContextType = {
  bookingRequest: null,
  userBookings: [],
  error: null,
  postBooking: async (currentBooking) => {return undefined},
  getUserBookings: async () => {return undefined},
  clearError: () => {}
}

const BookingContext = createContext<BookingContextType>(defaultState)

const BookingProvider = ({ children }: PropsWithChildren) => {
  const [bookingRequest, setBookingRequest] = useState<BookingRequest | null>(defaultState.bookingRequest)
  const [userBookings, setUserBookings] = useState<Booking[]>(defaultState.userBookings)
  const [error, setError] = useState<string | null>(defaultState.error)

  const postBooking = async (bookingRequest: BookingRequest): Promise<Booking | undefined> => {
    return undefined
  }

  const getUserBookings = async (): Promise<Booking[] | undefined> => {
    return undefined
  }

  const clearError = () => {
    setError('')
  }

  return (
    <BookingContext.Provider value={{ bookingRequest, userBookings, error, postBooking, getUserBookings, clearError }} >
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