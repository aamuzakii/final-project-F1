const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./Routers')

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(router)
 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})