'use strict';

module.exports = function ($stateProvider) {
	$stateProvider
		.state('app', {
			url: '/',
			templateUrl: './components/layouts/layouts.html',
			controller: require('./layoutsCtrl'),
			controllerAs: 'vm'
		})
};