import React from 'react'
import Map from "../organisms/Map"
import { Cowork, Review } from "../../utils/types/interfaces"
import { CreditCardIcon, EmailIcon, FoodIcon, MedalIcon, PinIcon, ReviewIcon, StarIcon } from "../atoms/Icons"
import FacilityComponent from "../atoms/FacilityComponent"
import MainButton from "../atoms/MainButton"
import Pricing from "../organisms/Pricing"
import { useCowork } from "../../utils/contexts/CoworkContext"


interface Props {
    cowork: Cowork
    reviews: Review[]
}
const DetailsInfo = (props: Props) => {
    const {reviews} = useCowork()
    
    const stars = reviews.slice(0, 2).map((review, i) => {
        const yellowStars: JSX.Element[] = Array.from({ length: review.rating }, (_, i) => {
            return(
                <li key={`star${i}`} className="cardicon">
                    <StarIcon />
                </li>
            )   
        })
        const greyStars: JSX.Element[] = Array.from({length: 5 - review.rating }, (_, i) => {
            return(
                <li key={`greyStar${i}`} className="grey cardicon">
                    <StarIcon />
                </li>
            )   
        })
        return (
            <ul key={`stars${i}`}>
                {yellowStars}
                {greyStars}
            </ul>
        )
    })

  return (
    <> 
    <section className="detailsMain">
        <div className="detailsGeneral">
            <div className="detailsGeneralText">
                <h1>{props.cowork.name}</h1>
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
                <p className="detailsDescription">{props.cowork.description}</p>
            </div>
            
            <Map lat={props.cowork.lat} lng={props.cowork.lng} />
        </div>
        <aside>
            <h2 className="lightGrey asideHeading">Pricing<CreditCardIcon /></h2>
            <div className="pricing">
                {props.cowork.pricing.map((price) => (
                    <Pricing color="lightGrey" key={String(price.interval) + String(price.price)} price={price} />
                ))}
            </div>
            <MainButton color="green" btnText="Book now!" type="button" />
            <h2 className="lightGrey asideHeading">Reviews<ReviewIcon /></h2>
            <div className="reviews ">
                <article>
                    {stars[0]}
                    <p className="lightGrey">"{reviews[0].text}"</p>
                </article>
                <article>
                    {stars[1]}
                    <p className="lightGrey">"{reviews[1].text}"</p>
                </article>
            </div>
        </aside>

        
    </section>
    
    </>
  )
}

export default DetailsInfo