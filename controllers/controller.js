class Controller {
  static home(req, res) {
    console.log(req.session.loginStatus)
    res.render('home')
  }

}

module.exports = Controller