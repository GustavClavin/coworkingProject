const User = require('../schemas/userSchema')
const bcrypt = require('bcryptjs')
const auth = require('../auth/auth')



exports.createUser = async (req, res) => {
    const { email, password } = req.body
    const users = await User.find({ email: email });

    if (users.length > 0) {
        return res.status(400).json({
            message: 'That email already exists!'
        });
    }
    if(!email || !password){
        return res.status(400).json({
            message: 'A user must have a valid username and password!'
        })
    }
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const _user = new User({email: email, passwordHash: hash, tokenVersion: 1})
    const user = await _user.save()

    res.status(200).json({token: auth.generateToken(user), email: user.email})
}

exports.login = async (req, res) => {

    const { email, password } = req.body
    if(!email || !password){
        return res.status(400).json({
            message: 'Please enter email and password!'
        })
    }

    const user = await User.findOne({email: email})
    if(!user) {
        return res.status(404).json({
            message: '404 user not found'
        })
    }

    const match = await bcrypt.compare(password, user.passwordHash)
    if(!match) {
        return res.status(401).json({
            message: 'Email and password does not match'
        })
    }

    res.status(200).json({token: auth.generateToken(user), email: user.email})
}

exports.logout = async (req, res) => {
    try {
        const userId = req.userId
        console.log(userId)
    
        await User.findByIdAndUpdate(userId, { $inc: { tokenVersion: 1 } }, { new: true });
        res.status(200).json({ message: 'Logged out successfully' })
        
    } catch (error) {
        res.status(500).json({
            message: 'Logout failed'
        })
    }

    
}

/* exports.autoLogin = async (req, res) => {
    const {email, hashedPass} = req.body
    if(!email || !hashedPass){
        return res.status(400).json({
            message: 'Autologin missing credentials'
        })
    }

    const user = await User.findOne({email: email})
    if(!user) {
        return res.status(404).json({
            message: '404 user not found'
        })
    }


} */