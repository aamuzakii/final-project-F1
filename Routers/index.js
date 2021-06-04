const express = require('express')
const router = express.Router()
const login = require('./login')
const logout = require('./logout')
const home = require('./home')



const kembang = require('./kembang')
const kesatria = require('./kesatria')
const lamar = require('./lamar')
const batalkan = require('./batalkan')



const register = require('./register')
const loginCheck = require('../Middlewares/loginCheck')

router.use('/login', login)
router.use('/logout', logout)
router.use('/register', register)
router.use(loginCheck)
router.use('/', home)
router.use('/kembang', kembang)
router.use('/kesatria', kesatria)
router.use('/lamar', lamar)
router.use('/batalkan', batalkan)

module.exports = router