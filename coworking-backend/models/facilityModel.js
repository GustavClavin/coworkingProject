const Facility = require('../schemas/facilitySchema')


exports.createFacility = async (req, res) => {
    
    try {
        console.log(req.body.facility)
        const facility =  await Facility.create({facility: req.body.facility})
        return res.status(200).json(facility)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getFacilities = async (req, res) => {
    try {
        const facilities = await Facility.find()
        return res.status(200).json(facilities)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

