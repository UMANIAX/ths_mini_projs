const express = require('express')
const router = express.Router()
const db = require('../models/db_connect')

router.get('/login', function (req, res) {

    res.render('login')
})

router.post('/login_det', function(req, res){

    let userInfo = req.body

    db.UserModel.findOne({Username: userInfo.user})
        .exec(function (err, data) {

            if(data === null) {

                console.log('What?')
                res.send({redirect: 'nowhere'})
            }

            else {
                console.log(data)
                res.send({redirect: '/cards'})
            }
        })
})

router.get('/signUp', function (req, res) {

    res.render('signUp')
})

router.post('/signUp_det', function (req, res, next) {

    let newUserData = {

        Username: req.body.user,
        Password: req.body.pass,
    }

    if (newUserData.Password !== req.body.passConf)
        return res.send({redirect: "Passwords Don't Match"})

    let newEntry = new db.UserModel(newUserData)
    newEntry.save(function (err, data) {

        if (err)
            return res.send(err)

        res.send({redirect: '/cards'})
    })

    // db.UserModel.create(newUserData, function (err, user) {
    //
    //     if (err) {
    //
    //         console.log(err)
    //         return next(err)
    //     }
    //
    //     res.send({redirect: '/cards'})
    // })
})

// router.get('/userUpdations', function (req, res) {
//
//     db.UserModel.find()
//         .exec((err, data) => data.forEach(dataItem => {
//
//             dataItem.PasswordConf = dataItem.Password
//             dataItem.save()
//         }))
//
//     res.send('Done')
// })

module.exports = router