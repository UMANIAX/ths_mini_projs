let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let hackathon_schema = new Schema({

    CardId: String,
    CompanyName: String,
    Position: String,
    Role: String,
    ContestType: String,
    StartDate: String,
    EndDate: String,
    CompanyImage: String,
    CompetitionImage: String,
    CompAdd: String
})

let card_model = mongoose.model('h_model', hackathon_schema)
module.exports = card_model