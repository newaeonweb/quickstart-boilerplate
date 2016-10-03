'use strict';

module.exports = function ($http, $q) {
	return {
		get: function (year) {
			var deferred = $q.defer();
			$http.jsonp('http://ergast.com/api/f1/' + year + '/results.json?limit=400&offset=0&callback=JSON_CALLBACK')
				.success(function (data) {
					deferred.resolve(data);

				}).error(function (error) {
					deferred.reject(error);
				});
				return deferred.promise;
			}
	}
};