var app = angular.module("myApp", ["ngRoute"]);

app.config(function($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('');

	$routeProvider
	.when("/details/:id", {
		templateUrl : "details.html",
		controller : "myCtrl2"
	});
});

app.controller("myCtrl", function($scope, $http) {
	$http.get("employees.json")
	.then(function(response) {
		$scope.employees = response.data.employees;
	})
	.catch(function(data) {
		alert("Data could not be loaded.");
	});
});

app.controller("myCtrl2", function($scope, $routeParams) {
	var index = $scope.employees.findIndex(x => x.id == $routeParams.id);
	if(index != -1) {
		$scope.employee = $scope.employees[index];
	}
	else {
		alert("Employee not found.");
	}
});