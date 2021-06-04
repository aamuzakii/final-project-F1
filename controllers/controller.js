const {Kembang, Jodoh, Profile, Kesatria} = require("../models")
const toRupiah = require("../helpers/toRupiah")


class Controller {

  static Schema(req, res) {
    Jodoh.findAll({
    })
    .then( data => {
      // res.send(data)
      res.render('schema', {arr : data})
    })
    .catch(err => {
      res.send(err)
    })
  }

  static home(req, res) {
    let loggedUser = req.session.username
    let KesatriaId
    Profile.findAll({
      where: {
        username: req.session.username
      },
      include: Kesatria
    })
    .then( data => {
      KesatriaId = data[0].Kesatrium.id
      return Jodoh.findAll({
        where: {
          KesatriaId : KesatriaId
        }
      })
    })
    .then( data => {
      let KembangIdArr = data.map( el => el.KembangId)
      return Kembang.findAll({
        where: {
          id : KembangIdArr
        }
      })
    })
    .then( arr => {
      res.render('home', { arr, toRupiah , loggedUser})
    })
    .catch( err => {
      res.send(err.toString())
    })
  }

}

module.exports = Controller