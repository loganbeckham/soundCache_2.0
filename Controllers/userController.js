const express = require('express')
const router = express.Router()

const User = require('../Models/userModel')

// Login Route
router.post('/login', (req, res) => {
    res.json({mssg: 'login user'})
})

// Signup Route
router.post('/signup', async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)
        res.status(200).json({email, user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router