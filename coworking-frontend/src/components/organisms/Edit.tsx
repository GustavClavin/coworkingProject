import React, {useState, useEffect} from 'react'

import PaymentMethods from "../molecules/PaymentMethods"
import CoworkGeneralInfo from "../molecules/CoworkGeneralInfo"
import CheckoutCalendar from "../molecules/CheckoutCalendar"
import MainButton from "../atoms/MainButton"
import { useBooking } from "../../utils/contexts/BookingContext"
import { useUser } from "../../utils/contexts/UserContext"
import { useModal } from "../../utils/contexts/ModalContext"
import { useNavigate } from "react-router-dom"



const Edit = () => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const { bookingRequest, currentlyEditing } = useBooking()
    const { user } = useUser()
    const { setSuccess } = useModal()
    const navigate = useNavigate()
    console.log(currentlyEditing)

    let orderTotal = 0
    let color = 'lightGreybg'
    if(bookingRequest){
      orderTotal = bookingRequest.priceTotal
      color = 'greenbg'
    }

    const handleEdit = async () => {
        
    }
    const handleCancel = async () => {

    }


    const handleLayoutSwap = () => {
      setViewportWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleLayoutSwap)
    return () => {
      window.removeEventListener('resize', handleLayoutSwap)
    }  
  }, [])

  if(viewportWidth < 1553){
    return (
      <>
      {currentlyEditing &&(
        <div className="checkout">
        <section className="section">
          <h1>Choose dates</h1>
          <img src={currentlyEditing?.cowork.images[0]} alt={currentlyEditing?.cowork.name} />
          <h2 className="cowork-name">{currentlyEditing?.cowork.name}</h2>
          <CheckoutCalendar />
          <div className="priceBuy">
            <div className="totalPrice">
              <p>Total price</p>
              <p>{orderTotal} THB</p>
            </div>
            <PaymentMethods />
            <MainButton onClick={handleEdit} type="button" btnText="Confirm Changes" color={color} />
            <MainButton onClick={handleCancel} type="button" btnText="Cancel Booking" color="redbg" />
          </div>
          
          
        </section>
      </div>
      )}
      </>
    )
  }
    
  return (
    <>
    {currentlyEditing &&(
      <div className="checkout">
      <section className="leftSection">
        <h1>Choose dates</h1>
        <CheckoutCalendar />
        <PaymentMethods />
      </section>
      <section className="rightSection">
        <div className="imgAndInfo">
        <img src={currentlyEditing?.cowork.images[0]} alt={currentlyEditing?.cowork.name} />
          <h2>{currentlyEditing?.cowork.name}</h2>
          <CoworkGeneralInfo cowork={currentlyEditing.cowork} />
        </div>
        <div className="priceBuy">
          <div className="totalPrice">
            <p>Total price</p>
            <p>{orderTotal} THB</p>
          </div>
          <MainButton onClick={handleEdit} type="button" btnText="Confirm Changes" color={color} />
          <MainButton onClick={handleCancel} type="button" btnText="Cancel booking" color="redbg" />
        </div>

      </section>
    </div>
    )}
    </>
  )
}

export default Edit