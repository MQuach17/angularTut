app.controller('customersController',function($scope,$https){

		$https.get("http://www.w3schools.com/website/Customers_JSON.php")
			.success(function(response){
				$scope.names=response;
			});

});