var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var loginRouter = require('./routes/login');

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
app.use('/', loginRouter);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

module.exports = app;
