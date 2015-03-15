// create controller named "personController" for the module 'myApp'. Pass in the $scope variable 
angular.module('myApp',[]).controller('personController',['$scope',function($scope){

	// create firstName and lastName variables
		$scope.firstName= "Mike";
		$scope.lastName = "Quach";

	// function to return full name
		$scope.fullName=function(){
			return $scope.firstName + " " + $scope.lastName;
		};

	// create an array of names with key-value pairs
		$scope.names=[
			{name:'Jani',country:'Norway'},
	        {name:'Hege',country:'Sweden'},
	        {name:'Kai',country:'Denmark'}
        ];

}]);