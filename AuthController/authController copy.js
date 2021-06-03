// const {Profile, Kesatria, Kembang} = require('../models')
// const { Op, Sequelize } = require("sequelize")
// const { use } = require('../Routers')
// const nodemailer = require("nodemailer");

// class AuthController {
//   static login(req, res) {
//     res.render('login', {validasi: req.query.validasi})
//   }
//   static loginPOST(req, res) {
//     const {username, password} = req.body
//     Profile.findAll({
//       where: {
//         username: username,
//         password: password}
//     })
//     .then(instance => {
//       if (instance.length) {
//         req.session.loginStatus = true

//         const transporter = nodemailer.createTransport({
//           service: 'gmail',
//           auth: {
//               user: 'herokuheromu6@gmail.com',
//               pass: 'Inihitamputih123'
//           }
//         });
      
//         let mailOptions = {
//           from: 'rosalee.flatley46@ethereal.email',
//           to: "vuteni@vomoto.com", 
//           subject: "Hello ✔", 
//           text: "REGISTRASI pendaftaran TULANG RUSUK berhasil", 
//           html: "<b>silahkan login</b>", 
//         };

//         transporter.sendMail(mailOptions, (err, info) => {
//           if (err) return console.log(err)
//           else return console.log('berhasil')
//         })

//         res.redirect('/') 
//       }
//       else  res.redirect(`/login?validasi=username-password-notmatch`)})
//     .catch(err => err.errors ? res.redirect(`/login?validasi=${err.errors[0].message}`) : res.send(err))
//   }
// }

// module.exports = AuthController