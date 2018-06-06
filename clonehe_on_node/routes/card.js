const express = require('express')
const router = express.Router()

const mongoose = require('mongoose');
const card_data = require('../models/h_cards')

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/hack_db';
mongoose.connect(mongoDB);
const db = mongoose.connection;

router.get('/', function (req, res) {

    res.render('face')
})

router.get('/get_card_det', function (req, res) {

    card_data.find()
        .exec(function (err, cards) {
            res.send(cards)
        })
})

router.get('/enter_card_info', function (req, res) {

    res.render('comp_entry')
})

router.post('/post_card_info', function(req, res){

    let card_info = req.body
    let new_card_entry
    card_data.find()
        .exec(function (err, data) {

            let new_cardId = 1 + data.length
            card_info.CardId = new_cardId
            new_card_entry = new card_data(card_info)
            new_card_entry.save(function () {

                res.send({redirect: '/cards'})
                // res.redirect('/cards') // Will work with inline form post
            })
        })
})

// Route for updations
// router.get('/make_updations', function (req, res) {
//
//     // card_data.find() //do may as true
//     //     .exec(function (err, data) {
//     //
//     //         for(let i in data){
//     //
//     //             data[i].save()
//     //         }
//     //
//     //         res.send('Done')
//     //     })
//
//     // card_data.update({}, {$set: {StartDate: '2018-06-04', EndDate: '2018-06-08'}}, {multi: true}, function (err, num) {
//     //
//     //     console.log(num)
//     // })
//     // res.send('Done')
// })

module.exports = router