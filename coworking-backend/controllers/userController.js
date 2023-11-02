const router = require('express').Router()
const { verifyToken } = require("../auth/auth.js")
const { createUser, login, logout } = require('../models/userModel.js')


router.post('/add', createUser)
router.post('/login', login)
router.put('/logout', verifyToken, logout)




module.exports = router