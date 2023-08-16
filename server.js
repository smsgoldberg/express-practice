const express = require('express');
const path = require('path');

//require the rabbit "database"
const rabbitDb = require('./data/rabbit-db');

//create our express app
const app = express();

//Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//root directory
app.get('/', function(req, res) {
  //Path MUST start with leading slash
  res.redirect('/rabbits');
});

app.get('/home', function(req, res) {
    //Never begin the name of the template with a forward slash
    res.render('home');
});

app.get('/rabbits', function(req, res) {
  res.render('rabbits/index', {
rabbits: rabbitDb.getAll()
  });
});

//Tell the app to listen on port 3000
//for HTTP requests from clients
app.listen(3000, function () {
    console.log('Listening on port 3000');
});


