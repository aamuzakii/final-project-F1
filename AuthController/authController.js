const {Profile, Kesatria, Kembang} = require('../models')
const { Op, Sequelize } = require("sequelize")
const { use } = require('../Routers')
const bcrypt = require('bcryptjs');
const nodemailer = require("nodemailer");

class AuthController {
  static login(req, res) {
    res.render('login', {validasi: req.query.validasi})
  }
  static loginPOST(req, res) {
    const {username, password} = req.body
    Profile.findAll({
      where: {
        username: username
      }
    })
    .then(e => {
      // console.log(e)
      if (e.length) {
        return e[0].password
      } 
    })
    .then(hash => {
      bcrypt.compare(password, hash, (err, tab) => {
        if (tab) {
          req.session.loginStatus = true
          res.redirect('/')
        } else {
         res.redirect(`/login?validasi=username-password-notmatch`)
        }
      })
    })
    .catch(err => err.errors ? res.redirect(`/login?validasi=${err.errors[0].message}`) : res.send(err))
    // Profile.findAll({
    //   where: {
    //     username: username,
    //     password: password}
    // })
    // .then(instance => {
    //   if (instance.length) {
    //     req.session.loginStatus = true
    //     res.redirect('/') 
    //   }
    //   else  res.redirect(`/login?validasi=username-password-notmatch`)})
    // .catch(err => err.errors ? res.redirect(`/login?validasi=${err.errors[0].message}`) : res.send(err))
  }
  static logout(req, res) {
    req.session.destroy((err) => {
      if(err) res.send(err)
      else res.redirect('/')
    })
  }
}

module.exports = AuthController