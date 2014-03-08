var hmaServices = angular.module('hmaServices', ['ngResource']);
hmaServices.factory('TopFact', ['$resource', 
	function($resource){
		return $resource('json/top_config.json', {}, {
			get : {
				method:'GET',
				isArray : false,
				transformResponse : function(data){
					data = JSON.parse(data);
					return data;
				}
			}
		});
	}]);