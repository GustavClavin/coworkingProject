const jwt = require('jsonwebtoken')
const  User = require('../schemas/userSchema')
const dotenv = require('dotenv')
dotenv.config()

const secretKey = process.env.SECRET_KEY

exports.generateToken = (user) => {

    return jwt.sign({_id: user._id, tokenVersion: user.tokenVersion}, secretKey, {expiresIn: '7d'})
} 

exports.verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, secretKey)
        req.tokenVersion = decoded.tokenVersion
        
        const user = await User.findById(decoded._id)
        if (!user) {
            return res.status(404).json({
                message: 'User not found'
            })
        }
        
        if (user.tokenVersion !== req.tokenVersion) {
            return res.status(401).json({
                message: 'Access denied, login required'
            })
        }

        req.userId = user._id
        //console.log(req.userId)
        next()
    } catch {
        return res.status(401).json({
            message: 'Access denied, login required'
        })
    }
}
