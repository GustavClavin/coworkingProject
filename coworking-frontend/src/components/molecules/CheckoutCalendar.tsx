import React, { useState, useEffect } from 'react'
import Calendar from "react-calendar"



type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

const CheckoutCalendar =  () => {
  const [value, onChange] = useState<Value>(new Date)
  const [allUnique, setAllUnique] = useState<boolean>(true)
  let daysFound: number[] = []
  const addCustomClasses = () => {
    const tiles = document.querySelectorAll('.react-calendar__tile')
    let tileCounter: number = 0
    tiles.forEach((tile) => {
      if(!tile.classList.contains(String(tileCounter))){
        tile.className = `${tileCounter} ` + tile.className
      }
      tileCounter++
      if(tileCounter > 6)
        tileCounter = 0
    })

    let firstMondayHandeled = false
    let firstSundayHandeled = false
    let mondayFound = false
    let sundayFound = false
    let lastMonday: null| Element = null
    let lastSunday: null| Element = null
    
    const activeTiles = document.querySelectorAll('.react-calendar__tile--active')
    const firstDay: Element | null = document.querySelector('.react-calendar__tile--rangeStart')
    const lastDay: Element | null = document.querySelector('.react-calendar__tile--rangeEnd')
    
    activeTiles.forEach((activeTile, i) => {
      const isMonday = activeTile.classList.contains('0')
      const isSunday = activeTile.classList.contains('6')

      if(isMonday){
        if(!firstMondayHandeled){
          activeTile.classList.add('first-monday')
          firstMondayHandeled = true
        }
        lastMonday = activeTile
        mondayFound = true
      }

      if(isSunday){
        if(!firstSundayHandeled){
          activeTile.classList.add('first-sunday')
          firstSundayHandeled = true
        }
        lastSunday = activeTile
        sundayFound = true
      }

      if(i > 6){
        setAllUnique(false)
      }
      else{
        setAllUnique(true)
      }

      if(daysFound.indexOf(Number(activeTile.classList[0])) === -1 && i < 14){
        activeTile.classList.add(`unique`)
        daysFound.push(Number(activeTile.classList[0]))
      }else{
        const index1 = daysFound.indexOf(Number(activeTile.classList[0]))
        daysFound.splice(index1, 1)
        const tileToEdit = document.querySelector(`.unique`)
        tileToEdit?.classList.remove(`unique`)
      }
    })

    if(lastMonday && mondayFound){
      (lastMonday as Element).classList.add('last-monday')
    }
    if(lastSunday && sundayFound) {
      (lastSunday as Element).classList.add('last-sunday')
    }
    
    if(firstDay && !(firstDay as Element).classList.contains('0') && !allUnique){
      document.querySelector('.adjacent-left')?.classList.remove('adjacent-left')
      firstDay.previousElementSibling?.classList.add('adjacent-left')
    }
    if(lastDay && !(lastDay as Element).classList.contains('6') && !allUnique){
      document.querySelector('.adjacent-right')?.classList.remove('adjacent-right')
      const elementAfterLastDay = lastDay && lastDay.nextElementSibling
      elementAfterLastDay?.classList.add('adjacent-right')
    }
    else {
      document.querySelector('.adjacent-left')?.classList.remove('adjacent-left')
      document.querySelector('.adjacent-right')?.classList.remove('adjacent-right')
    }
  }
  
  
  useEffect(() => {
    addCustomClasses()
    
  }, [value, allUnique])
  
  return (
    <Calendar
     onChange={onChange} 
     className={['checkoutCalendar']} 
     minDate={new Date}
     selectRange={true}
     view="month"
     />
  )

}
export default CheckoutCalendar
