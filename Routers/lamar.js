const express = require('express')
const kesatriaController = require('../controllers/kesatriaController')
const Controller = require('../controllers/controller')
const router = express.Router()

router.route('/:user/:KembangId')
.get(kesatriaController.Lamar)

router.route('/schema')
.get(Controller.Schema)

module.exports = router