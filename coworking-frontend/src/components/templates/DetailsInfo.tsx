import React, { useEffect } from 'react'
import Map from "../organisms/Map"
import { Cowork, Review } from "../../utils/types/interfaces"
import { CreditCardIcon, ReviewIcon, StarIcon } from "../atoms/Icons"

import MainButton from "../atoms/MainButton"
import Pricing from "../organisms/Pricing"
import { useCowork } from "../../utils/contexts/CoworkContext"
import CoworkGeneralInfo from "../molecules/CoworkGeneralInfo"
import { useModal } from "../../utils/contexts/ModalContext"


interface Props {
    cowork: Cowork
    reviews: Review[]
}
const DetailsInfo = (props: Props) => {
    const {reviews} = useCowork()
    const { isOrdering, startOrder, openModal } = useModal()
    
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

    const handleClick = async () => {
        startOrder()
        openModal()
    }
    
  return (
    <> 
    <section className="detailsMain">
        <div className="detailsGeneral">
            <div className="detailsGeneralText">
                <h1>{props.cowork.name}</h1>
                <CoworkGeneralInfo cowork={props.cowork}/>
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
            <MainButton onClick={handleClick}  color="greenbg" btnText="Book now!" type="button" />
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