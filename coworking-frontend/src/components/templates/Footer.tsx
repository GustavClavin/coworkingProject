import { Facility } from "../../utils/types/types"
import React, { useEffect, useState } from "react"
import Banner from "../organisms/Banner"
import { getFacilities } from "../../utils/helpers/apiCalls"
import FooterContent from "../organisms/FooterContent"




const Footer = ()  => {
  
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [apiCalled, setApiCalled] = useState<boolean>(false)


  useEffect(() => {
    if(!apiCalled){
      const fetchFacilities = async () => {
        const response: Facility[] = await getFacilities()
        
        setApiCalled(true)
        if(response){
          setFacilities(response)
        }else{
          console.log(response)
        }
      }
      fetchFacilities()
    } 
  }, [apiCalled])

  useEffect(() => {
  }, [facilities])

    

    return (
      <footer>
        <Banner direction="right" text={<p className="bannerText">Tired of <span className="yellow">working in the jungle?</span> Enjoy our fast wifi!</p>}/>
        {apiCalled && (
          <FooterContent facilities={facilities} />
        )}
      </footer>
    )
  }
  
  export default Footer