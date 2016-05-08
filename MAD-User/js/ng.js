var mad=angular.module('mad',[]);
mad.controller('mad',['$scope','$http',function($scope,$http){
	$scope.test="ss";
	$scope.getads=function(){
		$http.get(severUrl+'/advert/all/'+userId+"?token="+token).then(function(response){
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
mad.controller('madUser',['$scope','$http',function($scope,$http){
	$scope.getInfo=function(){
		$http.get(severUrl+'/account/'+userId+'?token='+token).then(function(response){
			$scope.info=response.data;
			console.log(response);
		},function(error){
			
		});
	};
	$scope.getInfo();
}])
