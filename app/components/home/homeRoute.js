'use strict';

module.exports = function ($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/components/home/home-tpl.html',
			controller: 'HomeCtrl',
			controllerAs: 'vm'
		})
};