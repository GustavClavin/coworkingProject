import React from 'react'
import { Cowork } from "../../utils/types/interfaces"
import { CreditCardIcon, EmailIcon, FoodIcon, MedalIcon, PinIcon, ReviewIcon, StarIcon } from "../atoms/Icons"
import FacilityComponent from "../atoms/FacilityComponent"

interface Props {
    cowork: Cowork
}
const CoworkGeneralInfo = (props: Props) => {
  return (
    <>
            <p className="xs"><PinIcon /> {props.cowork.address}</p>
            <p className="xs"><EmailIcon /> {props.cowork.email}</p>
            <ul className="facilityList">
                {props.cowork.facilities.map((facility) => (
                    <li key={String(facility._id)+String(facility.facility)} className="facility+name">
                        <FacilityComponent facility={facility}/>
                        <p className="pRajhadi xs">{facility.facility}</p>
                    </li>
                ))}
            </ul>
    </>
  )
}

export default CoworkGeneralInfo