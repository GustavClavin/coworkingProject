import { MouseEventHandler, useEffect, useState } from "react"
import InputField from "../atoms/InputField"
import MainButton from "../atoms/MainButton"
import { useUser } from "../../utils/contexts/UserContext"
import { useModal } from "../../utils/contexts/ModalContext"



interface Props {
  toggle: MouseEventHandler<HTMLParagraphElement>
}

const RegisterForm = (props: Props) => {
  const user = useUser()
  const modal = useModal()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [repeatPassword, setRepeatPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value)
  }

  const isEmailValid = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  }
    

  const handleClick: MouseEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (!isEmailValid(email)) {
      setErrorMessage('Invalid email');
    } else if (password !== repeatPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      const credentials = { email, password };
      user.registerAndLogin(credentials);
      
      if(user.user?.token){
        if(!modal.isOrdering){
          modal.closeModal()
          user.clearError()
        }
      }
    }
  }
  
    return (
      <>
        <form noValidate className="" onSubmit={handleClick}>
          <h1>Register</h1>
          <p className="error">{user.error || errorMessage}</p>
          <InputField onChange={handleEmailChange} id="emailInput" label="Email:" type="email"></InputField>
          <InputField onChange={handlePasswordChange} id="passwordInput" label="Password:" type="password"></InputField>
          <InputField onChange={handleRepeatPasswordChange} id="repeatPasswordInput" label="Repeat Password:" type="password"></InputField>
          <p onClick={props.toggle} >Already have an account? <br />
             Login here here!</p>
          <MainButton btnText="Register" type="submit" color="greenbg"></MainButton>
        </form>
      </>
    )
  }
  
  export default RegisterForm


  

  