'use strict';

var app = require('angular').module('app');

app.controller('HomeCtrl', require('./homeCtrl'));
app.config(require('./homeRoute'));
