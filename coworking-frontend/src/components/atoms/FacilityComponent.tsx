import { Facility } from "../../utils/types/types"
import { FoodIcon, GymIcon, CoffeeIcon, LockIcon, MedalIcon } from "./Icons"



interface props {
    facility: Facility
}

const FacilityComponent = (props: props) => {
    switch (props.facility.facility) {
      case 'food':
        return(
          <div className="facility cardicon">
            <FoodIcon />
          </div>
        )
      case 'gym':
        return(
          <div className="facility cardicon">
            <GymIcon />
          </div>
        )
      case 'coffee':
        return(
          <div className="facility cardicon">
            <CoffeeIcon />
          </div>
        )
      case 'safety':
        return(
          <div className="facility cardicon">
            <LockIcon />
          </div>
        )
      case 'activities':
        return(
          <div className="facility cardicon">
            <MedalIcon />
          </div>
        )
      default:
        return(
          null
        )
    }
    
  }
  
  export default FacilityComponent