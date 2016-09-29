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
		.module('modulename')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$urlRouterProvider'];

	function configure($urlRouterProvider) {

		//$locationProvider.hashPrefix('!');
		//$locationProvider.html5Mode(true);

		$urlRouterProvider
			.otherwise('/login');

	}

	runBlock.$inject = [];

	function runBlock() {
		'use strict';

		//console.log('AngularJS run() function...');
	}

})();
