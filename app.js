var createError = require('http-errors');
var express = require('express');
var path = require('path');
var request = require('request');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongo = require('mongodb');
var mongoose= require('mongoose');
var dotenv = require('dotenv').config();
var monk = require('monk');
var request = require('superagent');
var flash = require('connect-flash');
var session = require('express-session');
var db = mongoose.connect('mongodb://localhost/newsletter', {useNewUrlParser: true, useUnifiedTopology: true});
var db1 = monk('localhost:27017/newsletter');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// make database accessible to the router
app.use(function(req, res, next){
  req.db1 = db1;
  next();
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret:'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(flash());

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
