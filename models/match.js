const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// autopopulate = require('mongoose-autopopulate');
const TournamentsSchema = new Schema ({
    sport_id : { 
        type: Schema.Types.ObjectId, 
        ref: 'sports' 
    },
    tournament_id : { 
        type: Schema.Types.ObjectId, 
        ref: 'tournaments' 
    },
    match_betfair_id : {
        type: String,
    },
    name : {
        type: String,
    },
    match_start_date_time : { 
        type: Schema.Types.ObjectId, 
        ref: 'sports' 
    },
    status : { 
        type: Schema.Types.ObjectId, 
        ref: 'tournaments' 
    },
    channel_no : {
        type: String,
    },
    is_show_live : {
        type: String,
    },
    is_play : {
        type: String,
    },
    is_actiive : {
        type: String,
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})
// SportsSchema.plugin(autopopulate);
module.exports = Tournaments = mongoose.model("tournaments" , TournamentsSchema)