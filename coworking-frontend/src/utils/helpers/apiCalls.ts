import { json } from "stream/consumers"
import { AuthenticatedUser, BookingRequest, Credentials, Facility, Review } from "../types/types"
import { ObjectId } from "mongoose"

const BASE_URL = process.env.REACT_APP_API_BASE_URL

export const createUser = async (credentials: Credentials) => {
        try {
            const response = await fetch(BASE_URL + 'users/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            })
    
            const jsonRes = await response.json()
            console.log(jsonRes)
            return jsonRes
        } catch (error) {

            console.error('Error creating in user:', error)
            throw error
        }
}

export const loginUser = async (credentials: Credentials) => {
    try {
        const response = await fetch(BASE_URL + 'users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })

        const jsonRes = await response.json()
        console.log(jsonRes)
        return jsonRes
    } catch (error) {
        
        console.error('Error logging in user:', error)
        throw error
    }
}

export const logoutUser = async (user: AuthenticatedUser) => {
    try {
        const response = await fetch(BASE_URL + 'users/logout', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            console.log('logout failed')
            return {success: false}
        }
        console.log('logout ok')
        return { success: true }
        
    } catch (error) {
        
        console.error('Error loggin out user:', error)
        throw error
    }
}

export const getCoworks = async () => {
    try {
        const response = await fetch(BASE_URL + 'coworks', {
            method: 'GET',
            headers: {}
        })

        const jsonRes = await response.json()
        console.log('All coworks: ')
        console.log(jsonRes)
        return jsonRes

    } catch (error) {
        console.error('Error getting coworks:', error)
        throw error
    }
}

export const getCoworkBySlug = async (slug: string) => {
    try {
        const response = await fetch(BASE_URL + `coworks/${slug}`, {
            method: 'GET',
            headers: {}
        })

        const jsonRes = await response.json()
        console.log('Details cowork:')
        console.log(jsonRes)
        return jsonRes

    } catch (error) {
        console.error('Error getting cowork ' + slug + ': ' + error)
        throw error
    }
}

export const getFacilities = async () => {
    try {
        const response = await fetch(BASE_URL + 'facilities', {
            method: 'GET',
            headers: {}
        })

        const jsonRes = await response.json()
        console.log('All facilities: ')
        console.log(jsonRes)
        return jsonRes
    } catch (error) {
        console.error('Error getting facilities: ' + error)
        throw error
    }
}

export const _getReviews = async (slug: string) => {
    try {
        const response = await fetch(BASE_URL + `reviews/${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const jsonRes = await response.json()
        console.log('Reviews for: ' + slug)
        console.log(jsonRes)
        return jsonRes
    } catch (error) {
        console.log('Error getting reviews for: ' + slug)
        console.error(error)
        throw error
    }
}

export const createBooking = async (bookingRequest: BookingRequest, user: AuthenticatedUser) => {
    try {
        const response = await fetch(BASE_URL + 'bookings', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingRequest)
        })

        const jsonRes = await response.json()
        console.log('Booking request sent for: ')
        console.log(jsonRes)
        return jsonRes
    } catch (error) {
        console.log('Error creating booking!')
        console.log(error)
        throw error
    }
}

export const getBookings = async (user: AuthenticatedUser) => {
    try {
        const response = await fetch(BASE_URL + 'bookings', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            }
        })

        const jsonRes = await response.json()
        console.log('Bookings fetched: ')
        console.log(jsonRes)
        return jsonRes
    } catch (error) {
        console.log('Error fetching bookings!')
        console.log(error)
        throw error
    }
}

export const editBooking = async (_id: ObjectId, user: AuthenticatedUser) => {
    try {
        const response = await fetch(BASE_URL + 'bookings', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_id)
        })

        const jsonRes = await response.json()
        console.log('Edir sent for: ')
        console.log(jsonRes)
        return jsonRes
    } catch (error) {
        console.log('Error editing booking!')
        console.log(error)
        throw error
    }
}

export const deleteBooking = async (_id: ObjectId, user: AuthenticatedUser) => {
    try {
        const response = await fetch(BASE_URL + 'bookings', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_id)
        })

        const jsonRes = await response.json()
        console.log('Delete sent for: ')
        console.log(jsonRes)
        return jsonRes
    } catch (error) {
        console.log('Error deleting booking!')
        console.log(error)
        throw error
    }
}