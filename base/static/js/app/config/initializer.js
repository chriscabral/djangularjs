var mainapp = angular.module('mainapp', ['ui.router', 'ui.bootstrap', 'ngResource'])
.config(function($stateProvider, $urlRouterProvider, $interpolateProvider, $httpProvider){
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	$urlRouterProvider.otherwise("/todolist");
	$stateProvider
	.state('todolist', {
      	url: "/todolist",
      	views:{
      		"viewHeader": { templateUrl: "/static/js/app/templates/header.html" },
      		"viewBody": { templateUrl: "/static/js/app/templates/todolist.html" },
      		"viewFooter": { templateUrl: "/static/js/app/templates/footer.html" }
		}
    })
    .state('addtodo', {
    		url: "/addtodo",
		views:{
      		"viewHeader": { templateUrl: "/static/js/app/templates/header.html" },
      		"viewBody": { templateUrl: "/static/js/app/templates/addtodo.html" },
      		"viewFooter": { templateUrl: "/static/js/app/templates/footer.html" }
		}
    });
});


