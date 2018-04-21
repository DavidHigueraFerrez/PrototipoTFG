var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { layout: false });
});

//Paginas ejemplo

router.get("/index", function(req, res, next){
  res.render('index');
});

router.get('/ejemplo1', function(req, res, next) {

  res.render('ejemplo' , {numEjemplo:"1"});
});

router.get('/ejemplo2.1', function(req, res, next) {
  res.render('ejemplo' , {numEjemplo:"2.1"});
});

router.get('/ejemplo2.2', function(req, res, next) {
  res.render('ejemplo' , {numEjemplo:"2.2"});
});

router.get('/tribunalActas', function(req, res, next){
  res.render('tribunalActas');
});

module.exports = router;
