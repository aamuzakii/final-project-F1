const express = require('express')
const router = express.Router()
const login = require('./login')
const home = require('./home')

router.use('/*', login)
router.use('/', home)

module.exports = router