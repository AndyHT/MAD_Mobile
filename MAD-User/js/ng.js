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
//			$scope.info=response.data;
			var userINF = response.data;
			if(userINF.VIN == "") userINF.VIN = "未认证驾驶证";
			if(userINF.email == "") userINF.email = "未绑定邮箱";
			if(userINF.gender == true) userINF.gender = "男";
			else if(userINF.gender == false) userINF.gender = "女";
			if(userINF.alipay == "") userINF.alipay = "未绑定支付宝账号";
			$scope.info = userINF;
			console.log(response);
		},function(error){
			
		});
	};
	$scope.getInfo();
}]);
mad.controller('madMsg',['$scope','$http',function($scope,$http){
	$scope.getMsg=function(){
//		console.log('here');
		$http.get(severUrl+'/msglist/'+userId+'?token='+token).then(function(response){
			$scope.msglist=response.data.messageList;
//			console.log(JSON.stringify(response));
			console.log(JSON.stringify(response.data));
		},function(error){
			console.log(error);
		})
	};
	$scope.getMsg();   
}]);
mad.controller('madWdh',['$scope','$http',function($scope,$http){
	$scope.getHistory=function(){
		$http.get(severUrl+'/withdraw/'+userId+'?token='+token).then(function(response){
			$scope.historyList=response.data.withdrawHistory;
		},function(error){
			console.log(error);
		})
	}
}])
