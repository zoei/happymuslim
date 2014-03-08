var hmaControllers = angular.module('hmaControllers', [
]);

hmaControllers.controller('BodyCtrl', ['$scope', '$element', 
	function($scope, $element){
		$scope.isDrag = false;
		$scope.drag = function(e){
			$scope.isDrag = true;
		};
		$scope.release = function(e){
			$scope.isDrag = false;
		};
	}	
]);
