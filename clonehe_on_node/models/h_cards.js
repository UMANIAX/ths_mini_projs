let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let hackathon_schema = new Schema({

    CardId: Number,
    CompanyName: String,
    Position: String,
    Role: String,
    ContestType: String,
    StartDate: {type: String, default: '2018-06-04'},
    StartTime: {type: String, default: '17:00'},
    EndDate: {type: String, default: '2018-06-09'},
    EndTime: {type: String, default: '19:00'},
    CompanyImage: String,
    CompetitionImage: String,
    CompAdd: String
})

let CardData = mongoose.model('h_model', hackathon_schema)
module.exports = CardData // Makes 'card_model' a class