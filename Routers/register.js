const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router()

router.route('/')
.get(Controller.register)
.post(Controller.registerPOST)

module.exports = router