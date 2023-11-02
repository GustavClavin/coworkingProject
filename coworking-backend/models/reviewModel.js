const Review = require('../schemas/reviewSchema')
const Cowork = require('../schemas/coworkSchema')


exports.createReview = async (req, res) => {
    const { cowork, rating, text} = req.body

    if (!cowork || !rating || !text) {
        return res.status(400).json({
            message: 'A review has to contain a cowork._id, a rating and text'
        })
    }

    try {
        const _cowork = await Cowork.findById(cowork)
        if(!_cowork){
        return res.status(404).json({
            message: 'Cowork not found'
        })
        }
        if(!(0 <= rating <= 5) || !Number.isInteger(rating)){
            return res.status(400).json({
                message: 'Rating has to be an integer 0-5'
            })
        }

        const review = await Review.create({cowork: _cowork._id, rating, text})
        
        const coworkReviews = await Review.find({cowork: _cowork._id})
        const totalRating = coworkReviews.reduce((sum, review) => sum + review.rating, 0)
        _cowork.rating = coworkReviews.length > 0 ? totalRating / coworkReviews.length : 0
        await _cowork.save()
        
        return res.status(200).json(review)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: "Could not create review"
        })
    }
}

exports.getReviews = async (req, res) => {
    try {
        const coworkSlug = req.params.id
        console.log(coworkSlug)
        const cowork = await Cowork.findOne({slug: coworkSlug})
        console.log(cowork._id)

        const reviews = await Review.find({cowork: cowork._id})
        console.log(reviews)
        if(!reviews){
            return res.status(404).json({
                message: '404 cowork not found'
            })
        }
        return res.status(200).json(reviews)
        
    } catch (error) {
        return res.status(500).json({
            message: 'Could not get reviews'
        })
    }
    
    
}
