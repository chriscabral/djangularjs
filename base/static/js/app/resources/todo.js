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
	return {
				'TodoAppApi' : {
					'TodoTask': $resource(api('TodoTask/:id/#'), getJson(), getArray())
				},
				'UserApi': {
					'Login': $resource('/login/#', getJson(), {
						'get': {method: 'GET', params: {}, isArray: false},
						'login': {method: 'POST', params: {}, isArray: false}}
						),
					'Logout': $resource('/logout/#', getJson(), {'get': {method: 'GET', params: {}, isArray: false}}),
				}
			};
}]);

