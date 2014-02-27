alert("app starting");

var mainapp = angular.module('mainapp', ['ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){
	alert("app configuring");
	$urlRouterProvider.otherwise("/state1");
	
	$stateProvider
    .state('state1', {
      	url: "/state1",
      	views:{
      		"viewHeader": { template: "/static/js/app/templates/header.html" },
      		"viewBody": { template: "/static/js/app/templates/state1.html" },
      		"viewFooter": { template: "/static/js/app/templates/footer.html" }
		}
    })
    .state('state2', {
		url: "/state2",
      	views:{
      		"viewHeader": { template: "/static/js/app/templates/header.html" },
      		"viewBody": { template: "/static/js/app/templates/state2.html" },
      		"viewFooter": { template: "/static/js/app/templates/footer.html" }
		}
    });
    alert("app configuration ended")
});

alert("app ending");