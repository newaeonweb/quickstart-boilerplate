'use strict';

var angular = require('angular');
require('angular-ui-router');

var app = angular.module('app', [ 'ui.router' ]);

app.constant('VERSION', require('../package.json').version);

require('./components/home');
	
app.config(function($urlRouterProvider, $locationProvider, $stateProvider) {
	$locationProvider.hashPrefix('!');
	//$locationProvider.html5Mode(true);

	$urlRouterProvider
		.otherwise('/');

});
	