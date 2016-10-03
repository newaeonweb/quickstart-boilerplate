'use strict';

var app = require('angular').module('app');

app.controller('LayoutsCtrl', require('./layoutsCtrl'));
app.config(require('./layoutsRoute'));
