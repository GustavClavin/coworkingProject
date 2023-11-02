const mongoose = require('mongoose')
const { Schema } = mongoose

const priceSchema = new Schema(
    {
        interval: {
            type: String,
            required: true,
            validate: {
                validator: (interval) => ['daily', 'weekly', 'monthly'].includes(interval),
                message: 'Interval must be "daily," "weekly," or "monthly."'
            }
        },
        price: { type: Number, required: true },
    },
    {
        _id: false
    }
)


const coworkSchema = new Schema({
    images: [{ type: String, required: true }],
    area: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, required: true },
    facilities: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Facility' }],
        validate: [
            {
                validator: (facilities) => facilities.length >= 1 && facilities.length <= 5,
                message: 'There must be between 1-5 facilities.'
            },
            {
                validator: (facilities) => {
                    const uniqueFacilities = [...new Set(facilities)];
                    return uniqueFacilities.length === facilities.length;
                },
                message: 'Facilities must be unique.'
            }
        ]
    },
    pricing: {
        type: [priceSchema],
        validate: {
            validator: (array) => array.length > 0 && array.length <= 3,
            message: 'Pricing must contain between 1 and 3 elements.'
        }
    },
    name: { type: String, required: true },
    rating: { type: Number, required: false, default: 0 },
    createdAt: { type: String, required: true },
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    slug: { type: String }
})


const Cowork = mongoose.model('Cowork', coworkSchema)

module.exports = Cowork

