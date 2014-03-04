/*
 * resource example for todos
 */

mainapp.controller('LoginController', function($scope, Api){
	$scope.logged_in = false;
	$scope.user = {};
	$scope.loggin_error = false;
	Api.UserApi.Login.get(function(response){
		$scope.logged_in = response.success;
	}, function(response){
		$scope.logged_in = false;
	});
	$scope.login = function(){
		var userLogin = new Api.UserApi.Login($scope.user);
		userLogin.$login(function(response){
			$scope.logged_in = response.success;
			$scope.loggin_error = !$scope.logged_in;
		}, function(response){
			$scope.logged_in = false;
		});
	}
	$scope.logout = function(){
		Api.UserApi.Logout.get(function(response){
			$scope.logged_in = !response.success;
		}, function(response){
			$scope.logged_in = false;
		});
	};
});
