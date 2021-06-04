console.clear()
console.log(`---------------------------------`)
console.log('\033[2J');

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./Routers')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'tulangrusuk'
}))
app.use(router)
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})