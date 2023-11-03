import React, { useState } from 'react'
import Calendar from "react-calendar"



type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const CheckoutCalendar = () => {
  const [value, onChange] = useState<Value>(new Date)
  console.log(value)









  return (
    <Calendar
     onChange={onChange} 
     value={value} 
     className={['checkoutCalendar']} 
     minDate={new Date}
     selectRange={true}
     
     />
  )
}

export default CheckoutCalendar