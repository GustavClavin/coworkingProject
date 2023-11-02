import React from 'react'
import { Price } from "../../utils/types/interfaces"
interface Props{
    price: Price
    color?: string
}
const Pricing = (props: Props) => {
    if(props.price.interval === 'daily'){
        return (
          <p className={props.color}>{props.price.price} TBH / day</p>  
        )
    }else if(props.price.interval === 'weekly'){
        return (
            <p className={props.color}>{props.price.price} TBH / week</p>  
          )
    }else if(props.price.interval === 'monthly'){
        return (
            <p className={props.color}>{props.price.price} TBH / month</p>  
          )
    }else {
        return (
            null
          )
    }
  
}

export default Pricing