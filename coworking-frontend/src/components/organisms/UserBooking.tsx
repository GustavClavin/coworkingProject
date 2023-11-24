import React from 'react'
import { useModal } from "../../utils/contexts/ModalContext"
import { PenIcon } from "../atoms/Icons"
import { Booking } from "../../utils/types/types"
import { useEffect, useState } from "react"
import { useBooking } from "../../utils/contexts/BookingContext"

interface Props {
    booking: Booking,
    edit: boolean
}

const UserBooking = (props: Props) => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)
    const {startEdit, openModal} = useModal()
    const {setEditing} = useBooking()
    const _getMonth = (date: Date) => {
        switch (String(date).slice(5, 7)) {
                case '01':
                return 'Jan'
                case '02':
                return 'Feb'
                case '03':
                return 'Mar'
                case '04':
                return 'Apr'
                case '05':
                return 'May'
                case '06':
                return 'Jun'
                case '07':
                return 'Jul'
                case '08':
                return 'Aug'
                case '09':
                return 'Sep'
                case '10':
                return 'Okt'
                case '11':
                return 'Nov'
                case '12':
                return 'Dec'
                
            default:
                return '??'
        }
    }

    const handlePenClick = () => {
        openModal()
        startEdit()
        setEditing(props.booking)
    }

    const handleLayoutSwap = () => {
        setViewportWidth(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener('resize', handleLayoutSwap)
      return () => {
        window.removeEventListener('resize', handleLayoutSwap)
      }  
    }, [])
    if(viewportWidth < 650){
        if(props.edit){
            return (
                <div className="user-booking">
                    <img src={props.booking.cowork.images[0]} alt="" />
                    <div className="booking-info">
                        <div className="title-edit">
                            <h3>{props.booking.cowork.name}</h3>
                            <div className="pen" onClick={handlePenClick}>
                                <PenIcon />
                            </div>
                        </div>
                        <div className="separator"></div>
                        
                        <ul>
                            <li className="dates">
                                <p className="xs">{String(props.booking.startDate).slice(8, 10)} {_getMonth(props.booking.startDate)} - {String(props.booking.endDate).slice(8, 10)} {_getMonth(props.booking.endDate)}</p>
                            </li>
                            <li className="price-total">
                                <p className="xs">{props.booking.priceTotal} TBH</p>
                            </li>
                        </ul>
                    </div>
                </div>
                
              )
        }else{
            return (
                <article className="user-booking">
                    <img src={props.booking.cowork.images[0]} alt="" />
                    <div className="booking-info">
                        <div className="title-edit">
                            <h3>{props.booking.cowork.name}</h3>
                        </div>
                        <div className="separator"></div>
                        
                        <ul>
                            <li className="dates">
                                <p className="xs">{String(props.booking.startDate).slice(8, 10)} {_getMonth(props.booking.startDate)} - {String(props.booking.endDate).slice(8, 10)} {_getMonth(props.booking.endDate)}</p>
                            </li>
                            <li className="price-total">
                                <p className="xs">{props.booking.priceTotal} TBH</p>
                            </li>
                        </ul>
                    </div>
                </article>
              )
        }
    }

    if(props.edit){
        return (
            <div className="user-booking">
                <img src={props.booking.cowork.images[0]} alt="" />
                <div className="booking-info">
                    <div className="title-edit">
                        <h3>{props.booking.cowork.name}</h3>
                        <div className="pen" onClick={handlePenClick}>
                            <PenIcon />
                        </div>
                    </div>
                    <div className="separator"></div>
                    <p>
                        {props.booking.cowork.address} <br />
                        {props.booking.cowork.email}
                    </p>
                    <ul>
                        <li className="dates">
                            <p className="bold">{String(props.booking.startDate).slice(8, 10)} {_getMonth(props.booking.startDate)} - {String(props.booking.endDate).slice(8, 10)} {_getMonth(props.booking.endDate)}</p>
                        </li>
                        <li className="price-total">
                            <p className="bold">{props.booking.priceTotal} TBH</p>
                        </li>
                    </ul>
                </div>
            </div>
            
          )
    }else{
        return (
            <article className="user-booking">
                <img src={props.booking.cowork.images[0]} alt="" />
                <div className="booking-info">
                    <div className="title-edit">
                        <h3>{props.booking.cowork.name}</h3>
                    </div>
                    <div className="separator"></div>
                    <p>
                        {props.booking.cowork.address} <br />
                        {props.booking.cowork.email}
                    </p>
                    <ul>
                        <li className="dates">
                            <p className="bold">{String(props.booking.startDate).slice(8, 10)} {_getMonth(props.booking.startDate)} - {String(props.booking.endDate).slice(8, 10)} {_getMonth(props.booking.endDate)}</p>
                        </li>
                        <li className="price-total">
                            <p className="bold">{props.booking.priceTotal} TBH</p>
                        </li>
                    </ul>
                </div>
            </article>
          )
    }
  
}

export default UserBooking