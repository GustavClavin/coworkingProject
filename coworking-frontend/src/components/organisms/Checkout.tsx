import React from 'react'

import PaymentMethods from "../molecules/PaymentMethods"
import { useCowork } from "../../utils/contexts/CoworkContext"
import CoworkGeneralInfo from "../molecules/CoworkGeneralInfo"
import CheckoutCalendar from "../molecules/CheckoutCalendar"
import MainButton from "../atoms/MainButton"
import { useBooking } from "../../utils/contexts/BookingContext"
import { useUser } from "../../utils/contexts/UserContext"


const Checkout = () => {
    const { coworkBySlug } = useCowork()
    const { bookingRequest, postBooking } = useBooking()
    const { user } = useUser()
    let orderTotal = 0
    let color = 'lightGreybg'
    if(bookingRequest){
      orderTotal = bookingRequest.priceTotal
      color = 'greenbg'
    }

    const handleClick = async () => {
      if(bookingRequest && user){
        postBooking(user)
      }
    }
    
  return (
    <>
    {coworkBySlug &&(
      <div className="checkout">
      <section className="leftSection">
        <h1>Choose dates</h1>
        <CheckoutCalendar />
        <PaymentMethods />
      </section>
      <section className="rightSection">
        <div className="imgAndInfo">
          <img src={coworkBySlug?.images[0]} alt={coworkBySlug?.name} />
          <h2>{coworkBySlug.name}</h2>
          <CoworkGeneralInfo cowork={coworkBySlug} />
        </div>
        <div className="priceBuy">
          <div className="totalPrice">
            <p>Total price</p>
            <p>{orderTotal} THB</p>
          </div>
          <MainButton onClick={handleClick} type="button" btnText="Book now!" color={color} />
        </div>

      </section>
    </div>
    )}
    </>
  )
}

export default Checkout