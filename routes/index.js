// Setting up the express router

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.send('Hit the router!')
})

//BONUS: router.param('paramName', callback(req, res, next, ID <-- this is the value of paramName))

router.param('number', function(req, res, next, id){
  req.number = id;
  next();
});

router.get('/:number', function(req, res, next){
  res.json(req.number)
})



module.exports = router;
