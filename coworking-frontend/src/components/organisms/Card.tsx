import { useNavigate } from "react-router-dom"
import RatingCard from "../atoms/RatingCard"
import { Cowork } from "../../utils/types/types"
import CardInfo from "../molecules/cardInfo"




interface Props {
  cowork: Cowork
}

const Card = (props: Props) => {
    const navigate = useNavigate()
    
    const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
        navigate(`/details/${e.currentTarget.id}`)
        
    }

    

    return (
      <article className="card" id={props.cowork.slug} onClick={handleCardClick} style={{backgroundImage: `url(${props.cowork.images[0]})`}}>
        
        
        <RatingCard key={String(props.cowork._id) + String(props.cowork.rating)} rating={props.cowork.rating}/>
        <CardInfo key={String(props.cowork._id) + String(props.cowork.area)} cowork={props.cowork}/>
      </article>
    )
  }
  
  export default Card

  //<img src={props.cowork.images[0]} alt={props.cowork.name} />