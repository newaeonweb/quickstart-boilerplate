'use strict';

module.exports = function ($urlRouterProvider, $locationProvider) {
	
	//$locationProvider.hashPrefix('!');
	$locationProvider.html5Mode(true);

		$urlRouterProvider
			.otherwise('/');
};