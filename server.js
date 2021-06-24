const express = require('express')
const app = express()

app.set("view engine" , "ejs")
app.use(express.urlencoded({ extended: false }))

const port = 3000;
app.listen(port, ()=> console.log(`listening on ${port}`))