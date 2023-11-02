import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import HeroDetails from "../components/organisms/HeroDetails";
import Map from "../components/organisms/Map";
import { useUser } from "../utils/contexts/UserContext";
import { useCowork } from "../utils/contexts/CoworkContext";
import { Cowork } from "../utils/types/interfaces";
import DetailsInfo from "../components/templates/DetailsInfo";



const Details = () => {
    const user = useUser()
    const { getOne, getReviews, reviews } = useCowork()
    const { slug } = useParams<string>()
    const [cowork, setCowork] = useState<Cowork | null>(null)
    

    useEffect(() => {
      if(slug){
        console.log(slug)
        const getDetails = async () => {
          const details = await getOne(slug)
          await getReviews
          if(details){
            await getReviews(slug)
            await setCowork(details)
          }
          
        }
        getDetails()
      }
        
    }, [])
    
    

    return (
        <div className="detailsContainer">
          {cowork && reviews && (
            <>
            <HeroDetails images={cowork?.images} />
            <DetailsInfo cowork={cowork} reviews={reviews}/>
            </>
            
          )}
          
        </div>
    )
  }
  
  export default Details