import React from 'react'
import { PenIcon } from "../atoms/Icons"
import { Booking } from "../../utils/types/types"

interface Props {
    booking: Booking,
    edit: boolean
}

const UserBooking = (props: Props) => {
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

    }

    if(props.edit){
        return (
            <article className="booking">
                <img src={props.booking.cowork.images[0]} alt="" />
                <div className="">
                    <div className="title+edit">
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
            </article>
          )
    }else{
        return (
            <article className="booking">
                <img src={props.booking.cowork.images[0]} alt="" />
                <div className="">
                    <div className="title+edit">
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