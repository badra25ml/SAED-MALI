var express = require('express');
var router = express.Router();
var request = require('superagent');
var axios = require('superagent');

var mailchimpInstance   = process.env.mailchimpInstance,
    listUniqueId        = process.env.listUniqueId,
    mailchimpApiKey     = process.env.mailchimpApiKey;

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
/* GET reference-barrage page. */
router.get('/reference-barrage', function(req, res, next) {
  res.render('reference-barrage', { title: 'Référence-barrage' });
});
/* GET reference-amenagement hydro agricole page. */
router.get('/reference-amenagement-hydro-agricole', function(req, res, next) {
  res.render('reference-amenagement-hydro-agricole', { title: 'Référence-amenagement-hydro-agricole' });
});
/* GET reference-projet-integre page. */
router.get('/reference-projet-integre', function(req, res, next) {
  res.render('reference-projet-integre', { title: 'Référence-Projet-Integre' });
});
/* GET bâtiment infrastructure page. */
router.get('/reference-batiments-infrastructures', function(req, res, next) {
  res.render('reference-batiments-infrastructures', { title: 'Référence-Bâtiments-Infrastructures' });
});
/* GET Alimentation en eau Potable page. */
router.get('/reference-alimentation-en-eau-potable-et-pastorale', function(req, res, next) {
  res.render('reference-alimentation-en-eau-potable-et-pastorale', { title: 'Référence-alimentation-en-eau-potable-et-pastorale' });
});
/* GET Routes bitumées page. */
router.get('/reference-routes-bitumees', function(req, res, next) {
  res.render('reference-routes-bitumees', { title: 'Référence-Routes-Bitumées' });
});
/* GET Piste Rurale page. */
router.get('/reference-piste-rurale-amelioree', function(req, res, next) {
  res.render('reference-piste-rurale-amelioree', { title: 'Référence-Piste-Rurale-Améliorée' });
});
router.post('/signup', function (req, res) {
  
  // save user details to your database.
  axios
        .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')

        .set('Content-Type', 'application/json;charset=utf-8')
        .set('Authorization', 'Basic ' + new Buffer.from('anystring:' + mailchimpApiKey ).toString('base64'))
        .send({
          'email_address': req.body.email,
          'status': 'subscribed',
          'merge_fields': {
            'FNAME': req.body.firstName,
            'LNAME': req.body.lastName
          }
        })
            .end(function(err, response) {
              if (response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
                res.send('Signed Up!');
              } else {
                res.send('Sign Up Failed :(');
              }
          });
});

module.exports = router;
