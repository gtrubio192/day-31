angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function(
	$scope,
	Test,
	RandomNumber,
    RandomElement
    ) {

	$scope.min = 0;
	$scope.max = 10;
	// $scope.Test = Test;
	// $scope.testTest = function() {
	// 	console.log(Test);
	// };

	// $scope.baz = function() {
	// 	console.log(Test + ' hello');
	// };

	// $scope.testFoo = function() {
	// 	console.log(Foo);
	// };

	// $scope.testBar = function() {
	// 	console.log(Bar);
	// };

	$scope.testRandomNumber = function() {
		for(var i=0; i<10; i++) {
			console.log(RandomNumber(parseFloat($scope.min), parseFloat($scope.max), true));
		}
	};
    
	 $scope.testRandElement = function() {
         $scope.randomArray = [1,2,3,4,5,6,7,8,9,44
                               ,77,88,666,666,666,495];
	 	for(var i=0; i<10; i++) {
	 		console.log("Random element: " + RandomElement($scope.randomArray));
	 	}
	 };
    
    $scope.randElement = function(){
        
    }
});