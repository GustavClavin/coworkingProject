import { FormEventHandler, MouseEventHandler } from "react"
import { BtnType } from "../../utils/types/interfaces"


interface Props {
  btnText: string,
  type: BtnType,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  color?: string
}


const MainButton = (props: Props) => {
    


 




  

   

    return (
      <button className={props.color + " mainButton"} type={props.type} onClick={props.onClick}>
        <h2>{props.btnText}</h2>
      </button>
    )
  }
  
  export default MainButton