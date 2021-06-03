console.clear()
console.log(`---------------------------------`)
console.log('\033[2J');

const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
