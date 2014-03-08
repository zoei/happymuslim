var hma = angular.module('hma', [
	'ngRoute',
	'hmaControllers',
	'hmaServices',
	'ui.bootstrap',
	'angular-gestures'
]);

// weApp.directive('tScroll', function(){
// 	var compile = function(element, attrs, link){
// 		var content = element.children()[0];
// 		var parentElement = content.parentElement;
// 		/*parentElement.remove(content);*/
// 		var newe = document.createElement('div');
// 		newe.innerText = 'new element';
// 		console.log(element);
		
// 	}
// 	return {
// 		compile: compile,
// 		restrict: 'A'
// 		/*templateUrl: './view/dataview/scroller.html'*/
// 		/*transclude: 'element' */
// 	};
// });

// weApp.directive('tList', function(){
// 	var compile = function(element, attrs, link){
// 		var link = function($scope, $element, $attrs){
// 			$scope.items = $scope[$attrs.items];
// 			$scope.tpl = './view/component/dataview/list.html';
// 		};
// 		return link;
// 	};

// 	return {
// 		compile: compile,
// 		templateUrl: './view/component/scroller.html',
// 		restrict: 'E',
// 		replace: true
// 	};
// });

// weApp.directive('tsList', function(){
// 	var compile = function(element, attrs, link){
// 		console.log(arguments);	
// 		var link = function($scope, $element, $attrs){
// 			$scope.items = $scope[$attrs.items];
// 			console.log(arguments);
// 		};
// 		return link;
// 	};


// 	return {
// 		compile: compile,
// 		restrict: 'E',
// 		replace: true,
// 		template: '<div t-scroll-view tpl="./view/component/dataview/list.html"/>'
// 	};
// });

// weApp.directive('tScrollView', function(){
// 	var compile = function(e, a, l){
// 		console.log(arguments);
// 		var link = function($scope, $element, $attrs){
// 			console.log(arguments);
// 			$scope.tpl = $attrs.tpl;
// 		};
// 		return link;
// 	};
// 	return {
// 		compile: compile,
// 		transclude: 'true',
// 		restrict: 'E',
// 		replace: true,
// 		/*scope: true,*/
// 		templateUrl: './view/component/scroller.tpl'
// 	};
// });

hma.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/top', {
			templateUrl : 'view/top.tpl',
			controller : 'TopCtrl'
		})
		.when('/chargs/:status-:plugtype', {
			templateUrl : 'view/charging/list.tpl',
			controller : 'ChargingListCtrl'
		})
		.when('/charg/:plugId', {
			templateUrl : 'view/charging/detail.tpl',
			controller : 'ChargingDetailCtrl'
		})
		.when('/ddn', {
			templateUrl : 'view/ddn/setting.tpl',
			controller : 'DDNSettingCtrl'
		})
		.when('/muslim', {
			templateUrl : 'view/muslim/muslim-food.tpl',
			controller : 'MuslimFoodCtrl'
		})
		.otherwise({
			redirectTo : '/top'

		});
}]);
