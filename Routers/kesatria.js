const express = require('express')
const kesatriaController = require('../controllers/kesatriaController')
const router = express.Router()

router.route('/')
.get(kesatriaController.getAllData)

module.exports = router