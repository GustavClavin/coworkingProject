const router = require('express').Router()
const { createCowork, getCoworks, getCoworkById } = require('../models/coworkModel.js')

router.post('/', createCowork)
router.get('/', getCoworks)
router.get('/:id', getCoworkById)





module.exports = router