import React from 'react'

import PaymentMethods from "../molecules/PaymentMethods"
import { useCowork } from "../../utils/contexts/CoworkContext"
import CoworkGeneralInfo from "../molecules/CoworkGeneralInfo"
import CheckoutCalendar from "../molecules/CheckoutCalendar"
import MainButton from "../atoms/MainButton"


const Checkout = () => {
    const { coworkBySlug } = useCowork()
    const orderTotal = 0 //order context here 
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
          <MainButton type="button" btnText="Book now!" color="greenbg" />
        </div>

      </section>
    </div>
    )}
    </>
  )
}

export default Checkout