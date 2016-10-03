'use strict';

// Start AngularJS module
var angular = require('angular');
// Required AngularJS Modules
require('angular-ui-router');
require('angular-resource');
require('angular-animate');
require('angular-sanitize');
require('angular-aria');

// Set modules dependencies
var app = angular.module('app', [ 'ui.router', 'ngResource', 'ngAnimate', 'ngSanitize', 'ngAria' ]);

app.constant('VERSION', require('../package.json').version);
// Require application modules
require('./components/home');
// Setup initial config and route	
app.config(require('./app.config'));
	