const  Cowork = require('../schemas/coworkSchema')
const Review = require('../schemas/reviewSchema')



exports.createCowork = async (req, res) => {

    const slugify = text =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    
    const { images, area, address, facilities, pricing, name, email, description, createdAt, lat, lng} = req.body

    if (!images || !area || !address || !facilities || !pricing || !facilities || !name || !email || !description || !createdAt || !lat || !lng) {
        return res.status(400).json({
            message: 'A cowork has to contain all fields, check cowork schema for feference!'
        })
    }
    const slug = slugify(name)
    try {
        const cowork = await Cowork.create({
            images, area, address, email, description, facilities, pricing, name, createdAt, lat, lng, slug
        })
        
        return res.status(201).json(cowork)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            message: 'Error creating cowork',
        })
    }
}

exports.getCoworks = async (req, res) => {
    try {
        
        const coworks = await Cowork.find().populate('facilities')
        return res.status(200).json(coworks);
    } catch (error) {
        return res.status(500).json({
            message: 'Error getting coworks',
        })
    }
}

exports.getCoworkById = async (req, res) => {
    const slug = req.params.id
    
    try {
        const cowork = await Cowork.findOne({slug: slug}).populate('facilities')
        
        if (!cowork) {
            return res.status(404).json({
                message: 'Cowork not found'
            });
        }

        return res.status(200).json(cowork)
    } catch (error) {
        return res.status(500).json({
            message: 'Error getting cowork by slugvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv',
        })
    }
}