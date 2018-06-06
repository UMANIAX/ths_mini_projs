let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let hackathon_schema = new Schema({

    CardId: Number,
    CompanyName: String,
    Position: String,
    Role: String,
    ContestType: String,
    StartDate: String,
    StartTime: {type: String, default: '17:00'},
    EndDate: String,
    EndTime: {type: String, default: '19:00'},
    CompanyImage: String,
    CompetitionImage: String,
    CompAdd: String
})

let card_model = mongoose.model('h_model', hackathon_schema)
module.exports = card_model // Makes 'card_model' a class