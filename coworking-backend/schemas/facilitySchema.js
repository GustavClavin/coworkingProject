const mongoose = require('mongoose')
const { Schema } = mongoose

const facilitySchema = new Schema({
    facility: {
        type: String,
        required: true,
        validate: {
            validator: (facility) => ['food', 'gym', 'activities', 'coffee', 'safety'].includes(facility)
        }
    }
})

const Facility = mongoose.model('Facility', facilitySchema)

module.exports = Facility