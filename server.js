var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var http = require('http');
var request = require('request');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var db = 'app/data.json';
var mongoose = require('mongoose');
//var mongooseConfig = process.env.MONGOLAB_LAB_URI || process.env.MONGO_URI || 'mongodb://localhost:9001/cerberus';
var allData = [];


//mongoose.connect()

app.set('port', process.env.PORT || 9001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'app')));

var test = {
  name: "bob",
  key: "testKey"
};

/// reads data json
fs.readFile(db, 'utf8', function(err, data) {
  if (err) {
    console.log(err);
  }
  allData.push(data);
  console.log(allData);
});


app.get('/', function (req, res) {
  res.sendFile('app');
});

app.get('/data', function(req, res) {
  res.send(test)
});

app.post('/new-user', function(req, res) {

  var newGuy = req.body;
  //fs.appendFile(db, JSON.stringify(newGuy), function() {})
  allData.push(newGuy);
  fs.writeFile(db, JSON.stringify(allData), function() {})
});


app.listen(app.get('port'), function() {
  console.log("running on port " + app.get('port'));
});
