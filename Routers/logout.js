const express = require('express')
const router = express.Router()
const AuthController = require('../AuthController/authController')

router.get('/', AuthController.logout)

module.exports = router