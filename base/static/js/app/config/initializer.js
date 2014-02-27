alert("app starting");

var mainapp = angular.module('mainapp', [])
.config(function(){
	alert("app configuring");

  alert("app configuration ended");
});

alert("app ending");
