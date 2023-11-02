const router = require('express').Router()
const { getReviews, createReview, deleteRevirew } = require('../models/reviewModel.js')



router.post('/', createReview)
router.get('/:id', getReviews)
//router.delete('/', verifyToken, deleteReview)






module.exports = router 