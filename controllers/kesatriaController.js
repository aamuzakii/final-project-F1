const {Kembang, Profile, Kesatria, Jodoh} = require("../models")
const toRupiah = require("../helpers/toRupiah")


class kesatriaController {

    static Batalkan(req, res) {
    
        let KesatriaId

        Profile.findAll({
            where: {
                username : req.params.user
            },
            include: Kesatria
        })
        .then( data => {
            KesatriaId = data[0].Kesatrium.id
            return Jodoh.destroy({
                where: {
                    KesatriaId :KesatriaId,
                    KembangId : req.params.KembangId
                }
            })
        })
        .then(() => {
            res.redirect('/')
        })
        .catch( err => {
            res.send(err)
        })

    }

    static Lamar(req, res) {
        
        let KesatriaId

        Profile.findAll({
            where: {
                username : req.params.user
            },
            include: Kesatria
        })
        .then( data => {
            KesatriaId = data[0].Kesatrium.id
            return Jodoh.create({
                KembangId : req.params.KembangId,
                KesatriaId
            })
        })
        .then(() => {
            res.redirect('/')
        })
        .catch( err => {
            res.send(err)
        })

    }

    static getAllData(req, res) {
        let loggedUser = req.session.username
        Kesatria.findAll()
        .then( arr => {
            res.render('kesatria', { arr , toRupiah, Kesatria, loggedUser})
        })
        .catch( err => {
            res.send(err)
        })
    }
  
  }
  
  module.exports = kesatriaController