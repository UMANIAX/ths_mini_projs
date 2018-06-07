const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

let userSchema = new Schema({

    Username: {type: String, unique: true, required: true, trim: true},
    Password: {type: String, required: true},
})

userSchema.pre('save', function (next) {

    let user = this

    bcrypt.hash(user.Password, 10, function (err, hash) {

        if(err)
            return next(err)

        user.Password = hash
        next()
    })
})

let UserModel = mongoose.model('users', userSchema)
module.exports = UserModel