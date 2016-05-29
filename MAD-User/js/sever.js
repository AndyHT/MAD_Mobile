//var severUrl='http://121.42.57.59:4000/user';
//var severUrl='http://127.0.0.1:4000/user';
var severUrl='http://192.168.1.118:4000/user';
var userId=localStorage.userId;
var token=localStorage.token;
var ads;

var danger = [];
function getfilter(cb){
	mui.get(severUrl+'/advert/filter',{
		token:localStorage.token||'b6862bd18f3fb8f14d5aad69201c0532c42683a1cfc76054097db0a3483b8a09'
	},function(data){
		console.log('aa');
		console.log(JSON.stringify(data));
		danger = data.adValidationSettings;
		cb();
	},"json");
}
function getAds(){
	
	mui.ajax(severUrl+'/advert/all/'+userId,{
				data:{
					token:token,
				},
				dataType:'json',
				type:'get',
				timeout:10000,
				success:function(data){
					console.log(data.adList);
					console.log(JSON.stringify(data));
					/* 
						get success 
					*/
					if(data.errCode==0){
						ads=data.adList;
						console.log(ads);
						//return ads;
					}
				},
				error:function(error){
					console.log(JSON.stringify(error));
					
				} 
		});
	console.log("ss"+ads);
	return ads;
	
}
