'use strict';

module.exports = function($scope, HomeService) {
    $scope.results = [];
    $scope.test = 'fuck yeah'

    
    // Get the results from API using a service.
		HomeService.get('2015').then(function (data){
			$scope.results = data.MRData.RaceTable.Races;
            console.log($scope.results);
		}, function (error){
			console.log(error);
		});
  
};