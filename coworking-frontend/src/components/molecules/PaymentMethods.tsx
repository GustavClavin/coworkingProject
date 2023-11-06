import React, {MouseEventHandler} from 'react'
import { CreditCardIcon, MastercardIcon, PaypalIcon, VisaIcon } from "../atoms/Icons"


const PaymentMethods = () => {
    // ta in orderContext

    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        document.querySelector('.selected')?.classList.remove('selected')
        e.currentTarget.classList.add('selected')
        // uppdatera orderContex
    }


  return (
    <>
        <h2>Choose Payment Method&nbsp;<CreditCardIcon /></h2>
        <div className="paymentOptions">
            <div onClick={handleClick} id="paypal" className="paypal option "><PaypalIcon /></div>
            <div className="separator"></div>
            <div onClick={handleClick} className="visaMastercard option">
                <div id="visa" className="visa deepBlue"><VisaIcon /></div>
                <div id="mastercard" className="mastercard red"><MastercardIcon /></div>
            </div>
        </div>
    </>
  )
}

export default PaymentMethods