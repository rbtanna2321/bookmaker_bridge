const express = require("express");
const tournaments = express.Router();
const cors = require("cors");
const Tournament = require('../models/tournament');

tournaments.use(cors())
process.env.SECRET_KEY = "secret"
           
tournaments.post("/tournament/add", (req,res) => {
    console.log("data",req)
    const today = new Date();
    const tournamentData = {
      sport_id : req.body.sport_id,
      tournament_name : req.body.tournament_name,
      market_id : req.body.market_id,
      is_actiive : req.body.is_actiive,
      createdAt : today,
    }
    console.log(tournamentData)
    
                Tournament.create(tournamentData)
                .then(tournaments => {
                  console.log("tournament res", tournaments)
                    res.json({status:tournaments + "Add Tournament"})
                }).catch( err => {
                    res.send("error" + err)
                })
            })
            tournaments.get('/tournament', function (req , res) {
                Tournament.find( {},function (err , data) {
                  if(err){
                    res.send(err)
                  }else{
                    res.send(data)
                  }
                })
              });
module.exports = tournaments;