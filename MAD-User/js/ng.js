var mad=angular.module('mad',[]);
mad.controller('mad',['$scope','$http',function($scope,$http){
	$scope.test="ss";
	$scope.getads=function(){
		$http.get(severUrl+'/advert/all/'+userId+"?token="+'dc78501a4076d3f596341f910af8756fc86acfb58893a8d18cebbad5e638c851').then(function(response){
			$scope.ads=response.data.adList;
			console.log(JSON.stringify(response));
			console.log($scope.ads)
		},function(error){
			console.log(error);
		});
	}; 
	$scope.getads();
	console.log($scope.ads);
}]);
