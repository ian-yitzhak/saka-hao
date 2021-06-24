const express = require('express')
const multer = require('multer')
const expressLayouts = require('express-ejs-layouts')


const app = express()
const indexRouter = require('./routes/index')

const rentalRouter = require('./routes/rental')
require('./db/db')

app.set("view engine" , "ejs")
app.set("views", __dirname + '/views')
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))


app.use('/', indexRouter)
app.use('/rent', rentalRouter)

const port = 3000;
app.listen(port, ()=> console.log(`listening on ${port}`))