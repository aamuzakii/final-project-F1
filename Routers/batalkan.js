const express = require('express')
const kesatriaController = require('../controllers/kesatriaController')
const router = express.Router()

router.route('/:user/:KembangId')
.get(kesatriaController.Batalkan)

module.exports = router