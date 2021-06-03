const express = require('express')
const router = express.Router()
const login = require('./login')
const logout = require('./logout')
const home = require('./home')
const register = require('./register')
const loginCheck = require('../Middlewares/loginCheck')

router.use('/login', login)
router.use('/logout', logout)
router.use('/register', register)
router.use(loginCheck)
router.use('/', home)

module.exports = router