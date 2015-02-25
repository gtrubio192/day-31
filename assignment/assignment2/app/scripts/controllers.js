angular.module('app.controllers', [])
.controller('HomeCtrl', function($scope) {
	$scope.test = 'You\'re Home';
    
    $scope.goPlay = function() {
		console.log('goGame');
		$state.go('game');
	};
    $scope.goSettings = function() {
		console.log('goSettings');
		$state.go('settings');
	};
    $scope.goLeader = function() {
		console.log('goLeader');
		$state.go('leader');
	};
})
.controller('GameCtrl', function($scope, $state) {
	$scope.test = 'Game Time';
})
.controller('SettingsCtrl', function($scope) {
	$scope.test = 'Settings';
})
.controller('LeaderCtrl', function($scope) {
	$scope.test = 'Leader Board';
});