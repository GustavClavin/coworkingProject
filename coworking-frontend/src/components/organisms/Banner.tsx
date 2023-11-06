import { JsxElement } from "typescript"
import { Direction, IMGURL } from "../../utils/types/types"


interface Props {
  direction: Direction,
  img?: IMGURL,
  text: JSX.Element
}
const Banner = (props: Props) => {
    


    

    return (
      
      <div className={`banner ${props.direction}`} >
        {props.direction === 'left' ? (
          <>
            {props.img &&(
              <img src={props.img} alt="Banner image" />
            )}
            {props.text}
          </>
        ) : (
          <>
            {props.text}
            {props.img &&(
              <img src={props.img} alt="Banner image" />
            )}
          </>
        )}
      </div>
    )
  }
  
  export default Banner