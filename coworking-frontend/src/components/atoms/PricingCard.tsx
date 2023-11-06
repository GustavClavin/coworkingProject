import { Price } from "../../utils/types/types"



interface props {
    pricing: Price[]
}

const PricingCard = (props: props) => {
    
    const weeklyPrice = props.pricing.find(price => price.interval === 'weekly')
    if(weeklyPrice){
        return (
            
            <div className="pricingCard">
                <p className="xs bold">{weeklyPrice.price} THB /week</p>
            </div>
      
              
              
            
          )
    }

    const dailyPrice = props.pricing.find(price => price.interval === 'daily')
    if(dailyPrice){
        return (
            
            <div className="pricingCard">
                <p className="xs bold">{dailyPrice.price} THB /day</p>
            </div>
      
              
              
            
          )
    }

    const monthlyPrice = props.pricing.find(price => price.interval === 'daily')
    if(monthlyPrice){
        return (
            
            <div className="pricingCard">
                <p className="xs bold">{monthlyPrice.price} THB /month</p>
            </div>
      
              
              
            
          )
    }else{
        return(
            <>
            </>
        )
    }

    
  }
  
  export default PricingCard