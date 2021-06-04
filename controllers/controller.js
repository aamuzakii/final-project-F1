const {Profile, Kembang, Kesatria} = require('../models')
const nodemailer = require("nodemailer");

class Controller {
  static home(req, res) {
    console.log(req.session.loginStatus)
    res.render('home')
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