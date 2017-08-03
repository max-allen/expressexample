// STEP ONE: Importing and setting up express's app()
var express = require('express');
var app = express();

// STEP TWO: Setting up our primary event 'listen'er.
app.listen(1337, function(){
  console.log("Listening on port 1337!")
});

//STEP THREE: Setting up our logging middleware

var volleyball = require('volleyball')
app.use(volleyball)

//STEP FOUR: making a STATIC route for our public directory

app.use(express.static('public'));

//STEP FIVE: Setting up an index route.

app.get('*', function(req, res, next){
  res.send('File not found')
});

//STEP SIX: routing into a subrouter
var router = require('./routes')
app.use('/router', router);

