const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

const User = require('../Models/userModel')

// Login Route
router.post('/login', async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// Signup Route
router.post('/signup', async (req, res) => {
    
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)
        const token = createToken(user._id)
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router