import React, {MouseEventHandler} from 'react'
import { CreditCardIcon, MastercardIcon, PaypalIcon, VisaIcon } from "../atoms/Icons"
import { useBooking } from "../../utils/contexts/BookingContext"
import { PaymentMethod } from "../../utils/types/types"


const PaymentMethods = () => {
    const { changePaymentMethod, bookingRequest } = useBooking()

    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        document.querySelector('.selected')?.classList.remove('selected')
        e.currentTarget.classList.add('selected')
        changePaymentMethod((String(e.currentTarget.id) as PaymentMethod))
    }


  return (
    <>
        <h2>Choose Payment Method&nbsp;<CreditCardIcon /></h2>
        <div className="paymentOptions">
            <div onClick={handleClick} id="paypal" className="paypal option "><PaypalIcon /></div>
            <div className="separator"></div>
            <div onClick={handleClick} id="visaMastercard" className="visaMastercard option selected">
                <div className="visa deepBlue"><VisaIcon /></div>
                <div className="mastercard red"><MastercardIcon /></div>
            </div>
        </div>
    </>
  )
}

export default PaymentMethods