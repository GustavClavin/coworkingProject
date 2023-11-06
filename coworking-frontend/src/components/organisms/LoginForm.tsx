import { MouseEventHandler, useEffect, useState } from "react"
import InputField from "../atoms/InputField"
import MainButton from "../atoms/MainButton"
import { useUser } from "../../utils/contexts/UserContext"
import { Credentials } from "../../utils/types/types"
import { useModal } from "../../utils/contexts/ModalContext"
import { error } from "console"



interface Props {
  toggle: MouseEventHandler<HTMLParagraphElement>
}

const LoginForm = (props: Props) => {
  const user = useUser()
  const modal = useModal()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [invalidEmail, setInvalidEmail] = useState<string>('')
  

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const isEmailValid = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    return emailRegex.test(email)
  }
    
  const handleClick: MouseEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    
    if(!isEmailValid(email)){
      
      setInvalidEmail('Invalid Email')
    }else{
      const credentials: Credentials = {email: email, password: password}
      await user.login(credentials)
    }
    if(user.user?.token){
      if(!modal.isOrdering){
        modal.closeModal()
        user.clearError()
      }
    }
      
    
    
    
  }
 
    
  return (
    <>
      
      <form noValidate className="" onSubmit={handleClick}>
        <h1>Login</h1>
        <p className="error">{user.error || invalidEmail}</p>
        <InputField onChange={handleEmailChange} id="emailInput" label="Email:" type="email"></InputField>
        <InputField onChange={handlePasswordChange} id="passwordInput" label="Password:" type="password"></InputField>
        <p onClick={props.toggle}>Don't have an account yet? <br />
           Register here!</p>
        <MainButton btnText="Login" type="submit" color="greenbg"></MainButton>
      </form>
    </>
  )
}
  
export default LoginForm