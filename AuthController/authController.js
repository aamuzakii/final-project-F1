const {Profile, Kesatria, Kembang} = require('../models')
const { Op, Sequelize } = require("sequelize")
const { use } = require('../Routers')

class AuthController {
  static login(req, res) {
    res.render('login')
  }
  static loginPOST(req, res) {
    const {username, password} = req.body
    Profile.findAll({
      where: {
        username: username,
        password: password}
    })
    .then(instance => {
      if ('numpang ganti bentar biar gausah login terus' === 'numpang ganti bentar biar gausah login terus') {
        req.session.loginStatus = true
        req.session.username = username
        res.redirect('/')
      }
      else  res.send('salah')})
    .catch(err => res.send(err))

  }
}

module.exports = AuthController