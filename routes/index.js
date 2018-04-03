var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//Paginas ejemplo

router.get('/ejemplo1', function(req, res, next) {
  res.render('ejemplo' , {numEjemplo:"1"});
});

router.get('/ejemplo2.1', function(req, res, next) {
  res.render('ejemplo' , {numEjemplo:"2.1"});
});

router.get('/ejemplo2.2', function(req, res, next) {
  res.render('ejemplo' , {numEjemplo:"2.2"});
});


module.exports = router;
