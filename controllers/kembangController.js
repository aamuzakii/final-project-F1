const {Kembang} = require("../models")
const toRupiah = require("../helpers/toRupiah")


class Controller {
    static getAllData(req, res) {
        let loggedUser = req.session.username
        Kembang.findAll()
        .then( arr => {
            res.render('kembang', { arr , toRupiah, Kembang, loggedUser})
        })
        .catch( err => {
            res.send(err)
        })
    }
  
  }
  
  module.exports = Controller