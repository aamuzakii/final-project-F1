const express = require('express')
const router = express.Router()
const login = require('./login')
const home = require('./home')
const loginCheck = require('../Middlewares/loginCheck')

router.use('/login', login)
router.use(loginCheck)
router.use('/', home)

module.exports = router