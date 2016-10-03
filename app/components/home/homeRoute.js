'use strict';

module.exports = function ($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: './components/home/home-tpl.html',
			controller: require('./homeCtrl'),
			controllerAs: 'vm'
		})
};