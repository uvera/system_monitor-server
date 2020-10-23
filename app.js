var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var statsRouter = require('./routes/stats');
var specsRouter = require('./routes/specs');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/stats', statsRouter);
app.use('/specs', specsRouter);

module.exports = app;
