import { Cowork } from "../../utils/types/interfaces"
import Card from "../organisms/Card"


interface Props {
  coworks: Cowork[]
}

const CardSection = (props: Props) => {
  
    return (
      <section className="cardSection">
        {props.coworks.map((cowork) => (
          <Card key={String(cowork._id)} cowork={cowork} />
          
        ))}
      </section>
    )
  }
  
  export default CardSection