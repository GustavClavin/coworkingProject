import React from 'react'
import { Booking } from "../../utils/types/types"
import UserBooking from "../organisms/UserBooking"


interface Props {
  bookings: Booking[],
  edit: boolean
}
const BookingGroup = (props: Props) => {
  

  return (
    <div className="bookingGroup">
      {props.bookings && props.bookings.length > 0 && (
        props.bookings.map((booking, i) => (
          <UserBooking key={String(booking.createdAt)+String(booking.startDate)} booking={booking} edit={props.edit}/>
          
          
        ))
      )}
    </div>
  )
}

export default BookingGroup