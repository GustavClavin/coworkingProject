const mongoose = require('mongoose')
const { Schema } = mongoose

const reviewSchema = new Schema({
    cowork: {type: Schema.Types.ObjectId, ref: 'Cowork', required: true},
    rating: {type: Number, required: true, min: 0, max: 5, validate: Number.isInteger},
    text: {type: String, required: true, validate: text => text.length < 256}
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review
