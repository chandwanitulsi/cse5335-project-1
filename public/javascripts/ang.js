var app = angular.module('myApp', []);
app.controller('getCountriesController', function($scope,$http) {
    $scope.count = 0;
	$scope.CountryDatajson="";
    $scope.myFunction = function() {
        $scope.count++;
		var data = {
		amount: 3,
		currency: 2,
		source: 3,
		description: 4
};
		var response = $http.get('http://localhost:3000/details',{
                params:{substring: $scope.name},
            });
		alert($scope.name);

        response.success(function(data, status, headers, config) {

            $scope.CountryDatajson = data;
			alert($scope.CountryDatajson);
			

        });

        response.error(function(data, status, headers, config) {
		alert("Error.");});
    }
});