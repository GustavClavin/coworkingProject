const router = require('express').Router()
const { verifyToken } = require("../auth/auth.js")
const { createBooking, editBooking, getBookings, deleteBooking } = require('../models/bookingModel.js')


router.post('/', verifyToken, createBooking)
router.get('/', verifyToken, getBookings)
router.put('/', verifyToken, editBooking)
router.delete('/', verifyToken, deleteBooking)





module.exports = router