const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    email: {type: String, required: true },
    passwordHash: {type: String, required: true},
    tokenVersion: {type: Number},  //To invalidate old jwts after logging out
    
})

const User = mongoose.model('User', userSchema)

module.exports = User