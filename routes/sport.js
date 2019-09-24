const express = require("express");
const sports = express.Router();
const cors = require("cors");
const Sport = require('../models/sport');

sports.use(cors())
process.env.SECRET_KEY = "secret"
           
sports.post("/sport/add", (req,res) => {
    const today = new Date();
    const sportData = {
      sport_name : req.body.sport_name,
      market_id : req.body.market_id,
      createdAt : today,
    }
    
                Sport.create(sportData)
                .then(sports => {
                  console.log("sports res", sports)
                    res.json({status:sports + "Add Sport"})
                }).catch( err => {
                    res.send("error" + err)
                })
            })
            sports.get('/sport', function (req , res) {
                Sport.find( {},function (err , data) {
                  if(err){
                    res.send(err)
                  }else{
                    res.send(data)
                  }
                })
              });
module.exports = sports;