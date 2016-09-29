(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
(function () {
    'use strict';
    /**
    * @ngdoc index
    * @name app
    * @description
    * # app
    *
    * Main modules of the application.
    */
    angular.module('app', [
        
    ]);

})();

},{}]},{},[1,2]);
