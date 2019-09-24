
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded("extends: false"))
app.use(function (req , res , next) {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','GET , POST , OPTIONS, PUT , PATCH , DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-with, content-type');
    res.setHeader('Access-Control-Allow-Credential',true);
    next();
  });
const mongoUri = 'mongodb://localhost:27017/bookMaker';

mongoose.connect(mongoUri , {useNewUrlParser:true} )
.then(() => console.log("mongodb Connected"))
.catch(() => console.log(err));

var Users = require("./routes/Users");
var Sports = require("./routes/sport");
var Tournaments = require("./routes/tournament");
var Matches = require("./routes/match");
app.use("/users", Users);
app.use("/sports", Sports);
app.use("/tournaments", Tournaments);
app.use("/matches", Matches);

app.listen(port , function() {
    console.log("Server is Running :" + port);
})


// var express = require('express');

// var bodyParser = require('body-parser');
// var mongo = require('mongoose');


// var db = mongo.connect('mongodb://localhost:27017/bookMaker' , function (err , response) {
//   if(err){
//     console.log(err);
//   }else{
//     console.log("connected To" + db , "+" , response)
//   }
// });

// var app = express();
// app.use(bodyParser());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(function (req , res , next) {
//   res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods','GET , POST , OPTIONS, PUT , PATCH , DELETE');
//   res.setHeader('Access-Control-Allow-Headers','X-Requested-with, content-type');
//   res.setHeader('Access-Control-Allow-Credential',true);
//   next();
// });

// var Schema = mongo.Schema;



// // Sports Rest Api

// var SportsSchema = new Schema({
//   sport_name : {type: String},
//   market_id : {type: String},
// },{versionKey:false});

// var Sports = mongo.model('sports' , SportsSchema ,'sports');

// app.post('/api/createSports', function (req , res) {
//   var sports = new Sports(req.body);
//   console.log(req.body)
//   sports.save(function (err , data) {
//     if(err){
//       res.send(err)
//     }else{
//       res.send({data:"Sports successfully Created"})
//     }
//   })
// });

// app.get('/api/allSports', function (req , res) {
//   Sports.find( {},function (err , data) {
//     console.log(data)
//     if(err){
//       res.send(err)
//     }else{
//       res.send(data)
//     }
//   })
// });

// // Tournament Rest Api

// var TournamentsSchema = new Schema({
//   sport_id : { type: Schema.Types.ObjectId, ref: 'sports' },
//   tournament_name : {type: String},
//   market_id : {type: String},
//   is_actiive : {type: Boolean},
// },{versionKey:false});

// var Tournaments = mongo.model('tournaments' , TournamentsSchema ,'tournaments');

// app.post('/api/createTournament', function (req , res) {
//   var tournament = new Tournaments(req.body);
//   console.log(req.body)
//   tournament.save(function (err , data) {
//     if(err){
//       res.send(err)
//     }else{
//       res.send({data:"Tournaments successfully Created"})
//     }
//   })
// });

// app.get('/api/allTournament', function (req , res) {
//   Tournaments.find( {},function (err , data) {
//     console.log(data)
//     if(err){
//       res.send(err)
//     }else{
//       res.send(data)
//     }
//   })
// });




// app.listen(8080 , function () {
//   console.log("example app listening on Port")

// });
