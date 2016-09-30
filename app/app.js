(function () {
	'use strict';
	//require('es5-shim');
	//require('es5-sham');

	var angular = require('angular');
	require('angular-ui-router');

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main modules of the application.
	*/

	angular
		.module('app', [ 'ui.router' ]);
		// Import custom configuration
		require('./app.config.js');

})();
