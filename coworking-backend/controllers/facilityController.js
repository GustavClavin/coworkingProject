const router = require('express').Router()
const { createFacility, getFacilities } = require('../models/facilityModel.js')

router.post('/', createFacility)
router.get('/', getFacilities)
//Function was only added to add a set number of facilities, this is not intended to be used any more.

module.exports = router