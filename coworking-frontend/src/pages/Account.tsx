import { useEffect, useState } from "react"
import { UserIcon } from "../components/atoms/Icons"
import { useBooking } from "../utils/contexts/BookingContext"
import { useUser } from "../utils/contexts/UserContext"
import { AuthenticatedUser, Booking } from "../utils/types/types"
import BookingGroup from "../components/templates/BookingGroup"




const Account = () => {
  const user = useUser()
  const { getUserBookings } = useBooking()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [apiCalled, setApiCalled] = useState<boolean>(false)
  
  const [active, setActive] = useState<Booking[]>([])
  const [inactive, setInactive] = useState<Booking[]>([])

  useEffect(() => {
    if(!apiCalled && user.user){
      const fetchBookings = async () => {
        const response = await getUserBookings((user.user as AuthenticatedUser))
        if (response){
          setApiCalled(true)
          setBookings(response)
        }
      }
      fetchBookings()
    }
  }, [apiCalled])
  
  useEffect(() => {
    if (bookings && bookings.length > 0) {
      const today = new Date()
      const currentMonth = today.getMonth() + 1
      const currentDay = today.getDate()
  
      const activeBookings: Booking[] = []
      const inactiveBookings: Booking[] = []
  
      bookings.forEach((booking) => {
        const bookingMonth = Number(String(booking.startDate).slice(5, 7))
        const bookingDay = Number(String(booking.startDate).slice(8, 10))
  
        if (
          bookingMonth > currentMonth ||
          (bookingMonth === currentMonth && bookingDay > currentDay)
        ) {
          activeBookings.push(booking)
        } else {
          inactiveBookings.push(booking)
        }
      })

      activeBookings.sort((a, b) => {
        const monthA = Number(String(a.startDate).slice(5, 7))
        const monthB = Number(String(b.startDate).slice(5, 7))
        const dayA = Number(String(a.startDate).slice(8, 10))
        const dayB = Number(String(b.startDate).slice(8, 10))
  
        if (monthA !== monthB) {
          return monthB - monthA
        } else {
          return dayB - dayA
        }
      })
  
      inactiveBookings.sort((a, b) => {
        const monthA = Number(String(a.startDate).slice(5, 7))
        const monthB = Number(String(b.startDate).slice(5, 7))
        const dayA = Number(String(a.startDate).slice(8, 10))
        const dayB = Number(String(b.startDate).slice(8, 10))
  
        if (monthA !== monthB) {
          return monthB - monthA
        } else {
          return dayB - dayA
        }
      })
      
      setActive(activeBookings)
      setInactive(inactiveBookings)
    }
  }, [bookings])

  




    return (
      <div className="accountContainer">
        <div className="accountHeading">
          <div className="">
            <UserIcon />
            <h1>Account</h1>
          </div>
          <div className="email">
            <p>{user.user?.email}</p>
          </div>
        </div>
        <section className="bookings">
          <div className="bookingsHeading">
            <h2>Bookings</h2>
          </div>
          {active && active.length > 0 ? (
              <BookingGroup bookings={active} edit={true} />
            ):(
              <p>No Upcoming Bookings</p>
            )}
        </section>
        <section className="oldBookings">
          <div className="bookingsHeading">
            <h2>Old bookings</h2>
          </div>
          {inactive && inactive.length > 0 ? (
              <BookingGroup bookings={inactive} edit={false} />
            ):(
              <p>No Old Bookings</p>
            )}
        </section>
      </div>
    )
  }
  
  export default Account