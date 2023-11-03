import React from 'react'

import PaymentMethods from "../molecules/PaymentMethods"
import { useCowork } from "../../utils/contexts/CoworkContext"
import CoworkGeneralInfo from "../molecules/CoworkGeneralInfo"
import CheckoutCalendar from "../molecules/CheckoutCalendar"


const Checkout = () => {
    const { coworkBySlug } = useCowork()
    const orderTotal = 0 //order context here 
  return (
    <>
    {coworkBySlug &&(
      <div className="checkout">
      <section>
        <h1>Choose dates</h1>
        <CheckoutCalendar />
        <PaymentMethods />
      </section>
      <section>
        <img src={coworkBySlug?.images[0]} alt={coworkBySlug?.name} />
        <h2>{coworkBySlug.name}</h2>
        <CoworkGeneralInfo cowork={coworkBySlug} />
        <div className="totalPrice">
          <p>Total price</p>
          <p>{orderTotal} THB</p>
        </div>
      </section>
    </div>
    )}
    </>
    
    
  )
}

export default Checkout