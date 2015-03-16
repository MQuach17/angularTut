// controller to store names from a static JSON file.
// uses $http service
app.controller('customersController',function($scope,$http){

		$http.get("http://www.w3schools.com/website/Customers_JSON.php")
			.success(function(response){
				$scope.names=response;
			});

});