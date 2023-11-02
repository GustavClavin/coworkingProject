import { StarIcon } from "./Icons"



interface props {
    rating: number
}

const RatingCard = (props: props) => {
    
  const roundedRating: string = props.rating.toFixed(1)
  

    

    return (
      //behöver bakgrund + form
      <div className="ratingCard">
        <div className="cardicon">
            <StarIcon />
        </div>
        <p>{roundedRating}</p>
      </div>

        
        
      
    )
  }
  
  export default RatingCard