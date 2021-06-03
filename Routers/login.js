const express = require('express')
const AuthController = require('../AuthController/authController')
const router = express.Router()

router.route('/')
.get(AuthController.login)
.post(AuthController.loginPOST)

module.exports = router