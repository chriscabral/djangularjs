/*
 * resource example for todos
 */

mainapp.controller('LoginController', function($scope, $modal, Api){
	$scope.logged_in = false;
	$scope.user = {};
	$scope.loggin_error = false;
	Api.UserApi.Login.get(function(response){
		$scope.logged_in = response.success;
	}, function(response){
		$scope.logged_in = false;
	});
	parentScope = $scope;
	$scope.register = function(){
		var registrationModal = $modal.open({
			templateUrl: '/static/js/app/templates/register.html',
			controller: function($scope, $modalInstance, $http){
				$scope.error = false;
				$scope.formData = {};
				$scope.register = function(event){
					$http.post("/register/", $scope.formData).success(function(response){
						$scope.error = !response.success;
						if(response.success){
							parentScope.logged_in = true;
							$modalInstance.dismiss('cancel');
						}
					}).error(function(response){
						$scope.error = "An error occured. Try again later.";
					});
				}
				$scope.cancel = function(){
					$modalInstance.dismiss('cancel');
				}
			}
		});
	};
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
