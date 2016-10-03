'use strict';

var app = require('angular').module('app');

app.controller('HomeCtrl', require('./homeCtrl'));
app.service('HomeService', require('./homeService'));
app.config(require('./homeRoute'));