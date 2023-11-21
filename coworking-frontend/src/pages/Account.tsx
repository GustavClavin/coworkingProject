import { useEffect, useState } from "react"
import { UserIcon } from "../components/atoms/Icons"
import { useBooking } from "../utils/contexts/BookingContext"
import { useUser } from "../utils/contexts/UserContext"
import { AuthenticatedUser, Booking } from "../utils/types/types"




const Account = () => {
  const user = useUser()
  const { getUserBookings } = useBooking()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [apiCalled, setApiCalled] = useState<boolean>(false)
  
  useEffect(() => {
    if(apiCalled && user.user){
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

        </section>
        <section className="oldBookings">
          <div className="bookingsHeading">
            <h2>Old bookings</h2>
          </div>

        </section>
      </div>
    )
  }
  
  export default Account