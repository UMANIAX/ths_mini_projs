const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/hack_db';
mongoose.connect(mongoDB);
mongoose.Promise = Promise;

module.exports.CardData = require('./h_cards')
module.exports.UserModel = require('./users')
