const express = require('express')
const path = require('path');
const app = express()
const bodyParser = require('body-parser')

//Routes
let cardRoute = require('./routes/card')
let loginRoute = require('./routes/login')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))
app.use(express.static(path.join(__dirname + '/public')))
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000)

app.use('/cards', cardRoute)
app.use('/newUser', loginRoute)