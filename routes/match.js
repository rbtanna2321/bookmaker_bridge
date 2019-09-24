const express = require("express");
const matches = express.Router();
const cors = require("cors");
const Match = require('../models/match');

matches.use(cors())
process.env.SECRET_KEY = "secret"
           
matches.post("/match/add", (req,res) => {
    console.log("data",req)
    const today = new Date();
    const matchData = {
      sport_id : req.body.sport_id,
      match_name : req.body.match_name,
      market_id : req.body.market_id,
      is_actiive : req.body.is_actiive,
      createdAt : today,
    }
    console.log(matchData)
    
                Match.create(matchData)
                .then(matches => {
                  console.log("match res", matches)
                    res.json({status:matches + "Add Match"})
                }).catch( err => {
                    res.send("error" + err)
                })
            })
            matches.get('/match', function (req , res) {
                Match.find( {},function (err , data) {
                  if(err){
                    res.send(err)
                  }else{
                    res.send(data)
                  }
                })
              });
module.exports = matches;