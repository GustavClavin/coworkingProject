import React, { useEffect, useState } from "react"
import LoginForm from "../organisms/LoginForm"
import RegistrationForm from "../organisms/RegisterForm"
import { useUser } from "../../utils/contexts/UserContext"
import { XIcon } from "../atoms/Icons"
import { useModal } from "../../utils/contexts/ModalContext"
import Checkout from "../organisms/Checkout"
import BookingConfirmation from "../organisms/BookingConfirmation"



const Modal = () => {
  const user = useUser();
  const [showRegistration, setShowRegistration] = useState<boolean>(false)
  const { isVisible, closeModal, isOrdering, orderSuccess, setSuccess } = useModal() 

  const toggleFormType = () => {
    setShowRegistration(!showRegistration)
  }


 
  let modalContent: JSX.Element | null = null

  if(user.user?.token && orderSuccess){
    modalContent = <BookingConfirmation />
  } else if (user.user?.token && isOrdering) {
    modalContent = <Checkout />
  } else if (!user.user?.token && !showRegistration) {
    modalContent = <LoginForm toggle={toggleFormType} />
  } else if (!user.user?.token && showRegistration) {
    modalContent = <RegistrationForm toggle={toggleFormType} />
  }

  if(!isVisible || !modalContent){
    return null
  }

  const handleClick = () => {
    closeModal()
    user.clearError()
    setSuccess(false)
  }

  return (
    <div className={isVisible ? '' : 'hidden'} id="modal">
      <div className="modalContent">
        <div className="close pageicon" onClick={handleClick}>
          <XIcon></XIcon>
        </div>
        {modalContent}
      </div>
    </div>
  )
}

export default Modal