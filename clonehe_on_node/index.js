const express = require('express')
const path = require('path');
const app = express()
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/hack_db';
mongoose.connect(mongoDB);
const db = mongoose.connection;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname + '/views'))
app.use(express.static(path.join(__dirname + '/public')))

app.listen(3000)

app.get('/', function (req, res) {

    res.render('face')
})

const card_data = require('./models/h_cards')

app.get('/get_card_det', function (req, res) {

    card_data.find()
        .exec(function (err, cards) {
            res.send(cards)
        })
})