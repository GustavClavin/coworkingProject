import { ObjectId } from "mongoose"
type BtnType = 'submit' | 'button' | 'reset'

type Direction = 'up' | 'down' | 'left' | 'right'

type PaymentMethod = 'paypal' | 'visaMastercard'

type BookingStatus = 'pending' | 'active' | 'cancelled' | 'passed'

type IMGURL = `${'https://'}${string}` | `${string}${'puplic/images/'}${string}`

type Facility = {_id: ObjectId, facility: string}

type Price = {
    interval: string,
    price: number
}

type VariableComponent = {
    content: any[]
}

type Cowork = {
    _id: ObjectId,
    images: IMGURL[],
    area: string,
    address: string,
    email: string,
    description: string,
    facilities: Facility[],
    pricing: Price[],
    name: string,
    rating: number,
    createdAt: string,
    lat: number,
    lng: number,
    slug: string
}

type Review = {
    id: ObjectId,
    cowork: Cowork,
    rating: number,
    text: string
}

type Credentials = {
    email: string,
    password: string
}

type AuthenticatedUser = {
    email: string,
    token: string
}


type Booking = {
    id: ObjectId,
    cowork: Cowork,
    user: AuthenticatedUser,
    paymentMethod: PaymentMethod,
    priceTotal: number,
    status: BookingStatus
}

