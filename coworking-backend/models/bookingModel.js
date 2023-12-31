const  User = require('../schemas/userSchema')
const Booking  = require('../schemas/bookingSchema')
const auth = require('../auth/auth')

exports.createBooking = async (req, res) => {
    const {cowork, paymentMethod, priceTotal, startDate, endDate, status} = req.body
    if(!cowork || !paymentMethod || !priceTotal || !startDate || !endDate){
        return res.status(400).json({
            message: 'A booking must contain cowork._id, paymentMethod, priceTotal, status'
        })
    }
    const createdAt = new Date
    const userId = req.userId
    const booking = await Booking.create({user: userId, cowork, paymentMethod, priceTotal, startDate, endDate, status, createdAt})
    if(!booking){
        return res.status(500).json({
            message: 'Something went wrong when creating the booking'
        })
    }

    res.status(201).json(booking)
}
    
exports.getBookings = async (req, res) => {
    try {
        const userId = req.userId
        const bookings = await Booking.find({user: userId}).populate({
            path: 'cowork',
            populate: {
                path: 'facilities'
            }
        })
        res.status(200).json(bookings)
        
    } catch (error) {
        res.status(500).json({
            message: 'Could not fetch posts'
        })
    }
    
}

exports.editBooking = async (req, res) => {
    try {
        if(!req.body._id){
            return res.status(400).json({
                message: 'Must contain an _id'
            })
        }

        const target = await Booking.findOne({_id: req.body._id})
        if(!target){
            return res.status(404).json({
                message: '404 booking not found'
            })
        }

        console.log(target)
        console.log('↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓')
        console.log('↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓')

        const newBooking = await Booking.findOneAndUpdate({ _id: req.body._id }, req.body ,{new: true} )
        console.log(newBooking)
        res.status(200).json(newBooking)
    } catch (error) {
        res.status(500).json({
            message: 'Could not update item'
        })
    }
}

exports.deleteBooking = async (req, res) => {
    try {
        if(!req.body._id){
            return res.status(400).json({
                message: 'Must contain an _id'
            })
        }

        const target = await Booking.findOne({_id: req.body._id})
        if(!target){
            return res.status(404).json({
                message: '404 booking not found'
            })
        }

        console.log(target)

        await Booking.findOneAndDelete({_id: req.body._id})
        res.status(200).json({
            message: 'deleted'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Could not delete item'
        })
    }
}
