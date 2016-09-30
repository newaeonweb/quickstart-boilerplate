(function () {
	'use strict';
	/**
	* @ngdoc configuration file
	* @name app.config:config
	* @description
	* # Config and run block
	* Configutation of the app
	*/
	angular
		.module('app')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$urlRouterProvider', '$locationProvider'];

	function configure($urlRouterProvider, $locationProvider) {

		//$locationProvider.hashPrefix('!');
		$locationProvider.html5Mode(true);

		$urlRouterProvider
			.otherwise('/');

	}

	runBlock.$inject = [];

	function runBlock() {
		'use strict';

		//console.log('AngularJS run() function...');
	}

})();
