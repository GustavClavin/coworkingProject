import { ChangeEvent } from "react"

interface Props {
    type: string,
    label: string,
    id: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}
const InputField = (props: Props) => {



    return (
        <>
            <h2>{props.label}</h2>
            <input onChange={props.onChange} id={props.id} type={props.type}/>
        </>
      
    )
  }
  
  export default InputField