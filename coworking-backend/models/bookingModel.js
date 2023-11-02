const  User = require('../schemas/userSchema')
const Booking  = require('../schemas/bookingSchema')
const auth = require('../auth/auth')

exports.createBooking = async (req, res) => {
    const {cowork, paymentMethod, priceTotal, status} = req.body
    if(!cowork || !paymentMethod || !priceTotal || !status){
        return res.status(400).json({
            message: 'A booking must contain Cowork, PaymentMethod, PriceTotal and Status'
        })
    }
    const userId = req.userId
    const booking = await Booking.create({user: userId, cowork, paymentMethod, priceTotal, status})
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
        const bookings = await Booking.find({user: userId}).populate('user')
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
        console.log('↓ ↓ ↓ ↓ ↓ ↓ ↓')
        console.log('↓ ↓ ↓ ↓ ↓ ↓ ↓')

        await Booking.findOneAndDelete(req.body._id)
        res.status(200).json({
            message: 'deleted'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Could not update item'
        })
    }
}
