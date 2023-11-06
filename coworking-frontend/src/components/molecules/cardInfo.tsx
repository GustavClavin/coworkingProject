
import { Cowork } from "../../utils/types/types"
import FacilityComponent from '../atoms/FacilityComponent'
import { PinIcon } from "../atoms/Icons"
import PricingCard from '../atoms/PricingCard'



interface Props {
    cowork: Cowork
}



const CardInfo = (props: Props) => {
    

  return (
        <div className="cardInfo">
            <div className="cardTitles">
                <h2 className="h2Rajhadi">{props.cowork.name}</h2>
                <div className="cardArea cardicon">
                <PinIcon />
                <p className="pRajhadi">{props.cowork.area}</p>
                </div>
            </div>
            <div className="cardBottomDiv">
                <div className="cardFacilities">
                {props.cowork.facilities.map((facility) => (
                    <FacilityComponent key={String(props.cowork._id) + String(facility._id)} facility={facility} />
                ))}
                </div>
                <PricingCard pricing={props.cowork.pricing}/>
            </div>
        </div>
  )
}

export default CardInfo