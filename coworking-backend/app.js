const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())



app.use('/api/coworks', require('./controllers/coworkController'))
app.use('/api/users', require('./controllers/userController'))
app.use('/api/bookings', require('./controllers/bookingController'))
app.use('/api/reviews', require('./controllers/reviewController'))
app.use('/api/facilities', require('./controllers/facilityController'))







module.exports = app