import React, {MouseEventHandler} from 'react'
import { CreditCardIcon, MastercardIcon, PaypalIcon, VisaIcon } from "../atoms/Icons"
import { click } from "@testing-library/user-event/dist/click"

const PaymentMethods = () => {
    // ta in orderContext

    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        //sätt payment method till e.currentTarget.id
    }


  return (
    <>
        <h2>Choose Payment Method<CreditCardIcon /></h2>
        <div className="paymentOptions">
            <div id="paypal" className="paypal option "><PaypalIcon /></div>
            <div className="separator"></div>
            <div className="visaMastercard option">
                <div id="visa" className="visa deepBlue"><VisaIcon /></div>
                <div onClick={handleClick} id="mastercard" className="mastercard red"><MastercardIcon /></div>
            </div>
        </div>
    </>
  )
}

export default PaymentMethods