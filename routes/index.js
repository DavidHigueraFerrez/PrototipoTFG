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
router.get('/responsableDepartamento', function(req, res, next){
  res.render('responsableDepartamento');
});
router.get('/historial', function(req, res, next){
  res.render('historial');
});
router.get('/coordinador', function(req, res, next){
  res.render('coordinador');
});
router.get('/directorPosgrado', function(req, res, next){
  res.render('directorPosgrado');
});
router.get('/directorDepartamento', function(req, res, next){
  res.render('directorDepartamento');
});

module.exports = router;
