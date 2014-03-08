hmaControllers.controller('TopCtrl', ['$scope', 'TopFact', 
	function($scope, TopFact){
		$scope.topInfo = TopFact.get();
		$scope.clickItem = function(index){
			console.log(index);
		};
		$scope.goBack = function(){
			window.location.href='';
		};
		$scope.myInterval = 5000;
		var slides = $scope.slides = $scope.topInfo.slides || [];
		$scope.addSlide = function() {
			var newWidth = 600 + slides.length;
			slides.push({
			  image: 'http://placekitten.com/' + newWidth + '/300',
			  text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
			    ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
			});
		};
		for (var i=0; i<4; i++) {
			$scope.addSlide();
		}
	}	
]);
