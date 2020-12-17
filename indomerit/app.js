var express = require('express')
var app = express()

const port = 3000 
const routes = require('./routes/index')

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true }))
app.use(routes)

app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`)
})