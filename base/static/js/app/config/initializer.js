alert("app starting");

var mainapp = angular.module('mainapp', ['ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){
	alert("app configuring");
	$urlRouterProvider.otherwise("/state1");
	
	$stateProvider
    .state('state1', {
      	url: "/state1",
      	views:{
      		"viewHeader": { templateUrl: "/static/js/app/templates/header.html" },
      		"viewBody": { templateUrl: "/static/js/app/templates/state1.html" },
      		"viewFooter": { templateUrl: "/static/js/app/templates/footer.html" }
		}
    })
    .state('state2', {
		url: "/state2",
      	views:{
      		"viewHeader": { templateUrl: "/static/js/app/templates/header.html" },
      		"viewBody": { templateUrl: "/static/js/app/templates/state2.html" },
      		"viewFooter": { templateUrl: "/static/js/app/templates/footer.html" }
		}
    });
    alert("app configuration ended")
});

alert("app ending");