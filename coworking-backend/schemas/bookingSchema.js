const mongoose = require('mongoose')

const { Schema } = mongoose

const bookingSchema = new Schema({
    status: {type: String, required: false, default: 'pending'},
    paymentMethod: {type: String, required: true},
    cowork: {type: Schema.Types.ObjectId, ref: 'Cowork', required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    createdAt: {type: Date},
    priceTotal: {type: Number, required: true}
})



const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking