/*
 * todo api resource example
 */
mainapp.factory('Api', ['$resource', function($resource) {
	var apiRoot = '/api/v1/';
	var api = function(url) {return apiRoot + url;};
	var getJson = function(){return {};};
	var getArray = function(){
		return {
			'get': {method: 'GET', params: {}, isArray: true},
			'save': {method: 'POST', params: {}},
			'delete': {method: 'DELETE', params: {id: "@id"}},
			'update': {method: 'PUT', params: {id: "@id"}}
		};
	};
	alert("returning resource");
	return {
		'TodoAppApi' : {
				'TodoTask' : $resource(api('TodoTask/:id/#'), getJson(), getArray())
			}
		};
}]);

