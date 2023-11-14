import { UserIcon } from "../components/atoms/Icons"
import { useUser } from "../utils/contexts/UserContext"




const Account = () => {
  const user = useUser()


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
        <div className="bookings">
          <div className="bookingsHeading">
            <h2>Bookings</h2>
            
          </div>
        </div>
        <div className="oldBookings">
          <h2>Old bookings</h2>
          
        </div>
      </div>
    )
  }
  
  export default Account