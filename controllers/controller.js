const {Kembang, Jodoh, Profile, Kesatria} = require("../models")
const toRupiah = require("../helpers/toRupiah")



const nodemailer = require("nodemailer");


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
  static register(req, res) {
    res.render('register', {validasi: req.query.validasi, sent: req.query.sent})
  }
  static registerPOST(req, res) {
    const {username, email, password} = req.body
    const input = {username, email, password}
    Profile.create(input)
    .then(() => {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'herokuheromu6@gmail.com',
            pass: 'Inihitamputih123'
        }
      });
    
      let mailOptions = {
        from: 'rosalee.flatley46@ethereal.email',
        to: email, 
        subject: "Hello ✔", 
        text: "REGISTRASI pendaftaran TULANG RUSUK berhasil", 
        html: "<b>silahkan login</b>", 
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) return console.log(err)
        else return console.log('berhasil')
      })
      res.redirect('/register?sent=silakan-cek-email-yang-dikirimkan')})
    .catch(err => err.errors[0].message ? res.redirect(`/register?validasi=${err.errors[0].message}`) : res.send(err))
  }
}

module.exports = Controller