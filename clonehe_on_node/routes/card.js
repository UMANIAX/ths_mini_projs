const express = require('express')
const router = express.Router()
const db = require('../models/db_connect')

router.get('/', function (req, res) {

    res.render('challanges')
})

router.get('/get_card_det', function (req, res) {

    db.CardData.find()
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
    db.CardData.find()
        .exec(function (err, data) {

            let new_cardId = 1 + data.length
            card_info.CardId = new_cardId
            new_card_entry = new db.CardData(card_info)
            new_card_entry.save(function () {

                res.send({redirect: '/cards'})
                // res.redirect('/cards') // Will work with inline form post
            })
        })
})

// Route for updations
// router.get('/make_updations', function (req, res) {
//
//     db.CardData.find() //do may as true
//         .exec(function (err, data) {
//
//             for(let i in data){
//
//                 data[i].ContestType = data[i].ContestType.toUpperCase()
//                 data[i].save()
//             }
//
//             res.send('Done')
//         })
//
//     // db.CardData.update({}, {$set: {StartDate: '2018-06-04', EndDate: '2018-06-09', EndTime: '13:56'}}, {multi: true}, function (err, num) {
//     //
//     //     console.log(num)
//     // })
//     // res.send('Done')
// })

module.exports = router