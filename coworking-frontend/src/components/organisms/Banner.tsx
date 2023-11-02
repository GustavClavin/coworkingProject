import { JsxElement } from "typescript"
import { Direction, IMGURL } from "../../utils/types/interfaces"


interface Props {
  direction: Direction,
  img: IMGURL,
  text: JSX.Element
}
const Banner = (props: Props) => {
    


    

    return (
      <div className={`banner ${props.direction}`} >
        {props.direction === 'left' ? (
          <>
            <img src={props.img} alt="Banner image" />
            {props.text}
          </>
        ) : (
          <>
            {props.text}
            <img src={props.img} alt="Banner image" />
          </>
        )}
      </div>
    )
  }
  
  export default Banner