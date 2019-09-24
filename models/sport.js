const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// autopopulate = require('mongoose-autopopulate');
const SportsSchema = new Schema ({
    sport_name : {
        type: String,
    },
    market_id : {
        type: String,
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
  
})
// SportsSchema.plugin(autopopulate);
module.exports = Sports = mongoose.model("sports" , SportsSchema)