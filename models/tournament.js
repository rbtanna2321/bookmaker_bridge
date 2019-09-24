const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// autopopulate = require('mongoose-autopopulate');
const TournamentsSchema = new Schema ({
    sport_id : { 
        type: Schema.Types.ObjectId, 
        ref: 'sports' 
    },
    tournament_name : {
        type: String,
    },
    market_id : {
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