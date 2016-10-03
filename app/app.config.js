'use strict';
// Routes and others providers
module.exports = function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
	
	$locationProvider.hashPrefix('!');
	//$locationProvider.html5Mode(true);

	$urlRouterProvider
		.otherwise('/');
	
};