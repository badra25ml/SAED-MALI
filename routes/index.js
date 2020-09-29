var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Accueil | SAED MALI | Société Africaine d'Etudes pour le Développement" });
});
/* GET ageroute senegal page. */
router.get('/ageroutesenegal', function(req, res, next) {
  res.render('ageroutesenegal', { title: 'Ageroute Sénégal' });
});

/* GET nos domains page. */
router.get('/nos-domaines', function(req, res, next) {
  res.render('nos-domaines', { title: 'Nos Domaines' });
});
/* GET home page. */
router.get('/nos-moyens', function(req, res, next) {
  res.render('nos-moyens', { title: 'Nos moyens' });
});
/* GET home page. */
router.get('/notre-mission', function(req, res, next) {
  res.render('notre-mission', { title: 'Notre Mission' });
});
/* GET home page. */
router.get('/nous-contacter', function(req, res, next) {
  res.render('nous-contacter', { title: 'Contact' });
});
/* GET home page. */
router.get('/perimetre', function(req, res, next) {
  res.render('perimetre', { title: 'Périmètre' });
});
/* GET home page. */
router.get('/projets', function(req, res, next) {
  res.render('projets', { title: 'Nos Projets' });
});
/* GET home page. */
router.get('/propos', function(req, res, next) {
  res.render('propos', { title: 'A Propos de nous' });
});
/* GET home page. */
router.get('/references', function(req, res, next) {
  res.render('references', { title: 'Références' });
});
/* GET home page. */
router.get('/sodagri', function(req, res, next) {
  res.render('sodagri', { title: 'Sodagri' });
});
module.exports = router;
