/*
 * resource example for todos
 */

mainapp.controller('TodoController', function($scope, Api){
	Api.TodoAppApi.TodoTask.get().$promise.then(function(data){
		$scope.todolist = data;
		$scope.todoCheckedChange = function(todo){
			todo.$update(function(data){}, function(response){
				alert('The connection is not working right now.');
			});	
		};
		$scope.todoDelete = function(todo){
			todo.$delete(function(data){
				$scope.todolist.forEach(function(single_todo, index){
					if (single_todo.id === data.id) {
						$scope.todolist.splice(index, 1);
					}
				});
			}, function(response){
				alert('The connection is not working right now.');
			});	
		};
	});
});

mainapp.controller('TodoAddController', function($scope, Api){
	$scope.formData = {owner: 1}; //set to only user, todo set this server side
	$scope.success = "";
	$scope.addTodo = function($event){
		var todo = new Api.TodoAppApi.TodoTask($scope.formData);
		todo.$save(function(data){
			$scope.formData = {owner: 1};
			$scope.errors = [];
			$scope.success = "Todo item added successfully.";
		}, function(response){
			$scope.errors = response.data;
			$scope.success = "";
		});
	};
});