const express = require('express')
const kembangController = require('../controllers/kembangController')
const router = express.Router()

router.route('/')
.get(kembangController.getAllData)

module.exports = router