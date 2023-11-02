import { useEffect, useState } from "react"
import HeroHome from "../components/organisms/HeroHome"
import { useCowork } from "../utils/contexts/CoworkContext"
import { Cowork } from "../utils/types/interfaces"
import CardSection from "../components/templates/CardSection"
import Banner from "../components/organisms/Banner"
import { useUser } from "../utils/contexts/UserContext"

const splitCoworks = (array: Cowork[], sectionSize: number): Cowork[][] => {
  const sections: Cowork[][] = [];

  for (let i = 0; i < array.length; i += sectionSize) {
    sections.push(array.slice(i, i + sectionSize))
  }

  return sections;
};

const Home = () => {
  const user = useUser()
  const { getAll } = useCowork();
  const [sections, setSections] = useState<Cowork[][] | null>(null)
  const [apiCalled, setApiCalled] = useState(false);

  useEffect(() => {
    if(!apiCalled){
      const fetchCoworks = async () => {
        const response = await getAll()
        setApiCalled(true)
        if(response){
          setSections(splitCoworks(response, 3))
        }
        
      }
      fetchCoworks()
    }
    
  }, [apiCalled])


  

  return (
    
    <div className="homeContainer">
      <HeroHome />
      {sections && sections.length > 0 && sections[0].length === 3 && (
        <CardSection key="section1" coworks={sections[0]} />
      )}
      <Banner direction="right" img="https://i.imgur.com/5CnTd0F.png" text={<p className="bannerText">Not sure how long you will stay? We always have <span className="blue">flexible booking</span> and <span className="blue">free cancelation!</span></p>} />
      {sections && sections.length > 1 && sections[1].length === 3 && (
        <CardSection key="section2" coworks={sections[1]} />
      )}
      <Banner direction="left" img="https://i.imgur.com/BehvuaT.png" text={<p className="bannerText">Do you <span className="yellow">love coffee</span> as much as us? Most of our places have <span className="yellow">free coffee!</span></p>} />
      {sections && sections.length > 2 && sections[2].length === 3 && (
        <CardSection key="section3" coworks={sections[2]} />
      )}
      <p></p>
    </div>
      

  )
}

export default Home
