var ref = new Wilddog('https://wild-boar-00060.wilddogio.com/statistic/user');
var dayBtn = document.getElementById('dayProfit');
var monthBtn = document.getElementById('monthProfit');
var yearBtn = document.getElementById('yearProfit');
var hasRecord = true;
var active_tab = 'day';
if(localStorage.userId==null) localStorage.userId='18521037217';
getDay();
ref.child(localStorage.userId).once('value',function(snap){
	if(snap.val()!=null){
		ref=ref.child(localStorage.userId);
		//                  下面这个日期改成moment().format(YYYY-MM-DD'')以判断今日的TOP5统计量
		ref.child('daily/'+moment().format('YYYY-MM-DD')+'/top5').orderByChild('income').limitToLast(5).once('value',function(snap){
			if(snap.val()==null){
				mui.toast('今日暂无广告收益排行');
				return; 
			}
			for( key in snap.val()){
				optionTOP5.legend.data.push(snap.val()[key].title);
				optionTOP5.series[0].data.push({value:snap.val()[key].income,name:snap.val()[key].title});
			}
			echartbig.setOption(optionTOP5);
			get7days(6);
		});
	}else{
		mui.toast('您的账户下暂无统计数据','抱歉','知道了');
	}
});
monthBtn.addEventListener('tap',function(evnet){
	active_tab='month';
	echartline.setOption(optionlineMonth)
	optionlineMonth.xAxis.data=[];
	optionlineMonth.series[0].data=[];
	getThisMonth(30);
});
yearBtn.addEventListener('tap',function(evnet){
	active_tab='year';
	echartline.setOption(optionlineYear)
	optionlineYear.xAxis.data=[];
	optionlineYear.series[0].data=[];
	getThisYear(11);
});
dayBtn.addEventListener('tap',function(evnet){
	active_tab='day';
	echartline.setOption(optionline)
	optionline.xAxis.data=[];
	optionline.series[0].data=[];
	get7days(6);
});

function get7days(d)
{
	optionline.xAxis.data.push(moment().subtract(d,'days').format('YYYY-MM-DD'));
	ref.child('daily/'+moment().subtract(d,'days').format('YYYY-MM-DD')).once('value',function(snap){
		if(snap.val()==null){
			optionline.series[0].data.push(0);
		}else{
			optionline.series[0].data.push(snap.val().income.toFixed(2));
		}
		if(d>0) get7days(--d);
		else{
			if(active_tab=='day') echartline.setOption(optionline);
		}
	});
}

function getThisMonth(d)
{
	if(moment().subtract(d,'days').format('MM') != moment().format('MM')) {
		getThisMonth(--d);
		return;
	}
	optionlineMonth.xAxis.data.push(moment().subtract(d,'days').format('YYYY-MM-DD'));
	ref.child('daily/'+moment().subtract(d,'days').format('YYYY-MM-DD')).once('value',function(snap){
		if(snap.val()==null){
			optionlineMonth.series[0].data.push(0);
		}else{
			optionlineMonth.series[0].data.push(snap.val().income.toFixed(2));
		}
		if(d>0) getThisMonth(--d);
		else{
			if(active_tab=='month') echartline.setOption(optionlineMonth);
		}
	});
}

function getThisYear(m){
	if(moment().subtract(m,'months').format('YYYY') != moment().format('YYYY')) {
		getThisYear(--m);
		return;
	}
	optionlineYear.xAxis.data.push(moment().subtract(m,'months').format('YYYY-MM'));
	ref.child('monthly/'+moment().subtract(m,'months').format('YYYY-MM')).once('value',function(snap){
		if(snap.val()==null){
			optionlineYear.series[0].data.push(0);
		}else{
			optionlineYear.series[0].data.push(snap.val().income.toFixed(2));
		}
		if(m>0) getThisYear(--m);
		else {
			if(active_tab=='year') echartline.setOption(optionlineYear);
		}
	});
}

function getDay() {
	var dayIncome;
	console.log('dayIncome');
	ref.child(localStorage.userId).child('daily/'+moment().format('YYYY-MM-DD')).once('value',function(snap){
		if(snap.val()==null){
			document.getElementById('dayIncome').innerHTML='<h3>'+0+'</h3>'+'MAD币';
		}else{
			dayIncome=snap.val().income.toFixed(2);
			document.getElementById('dayIncome').innerHTML='<h3>'+dayIncome+'</h3>'+'MAD币';
			console.log(dayIncome);
		}
	});
	ref.child(localStorage.userId).child('totalIncome').once('value',function(snap){
		if(snap.val()==null){
			//optionline.series[0].data.push(0);
			document.getElementById('totalIncome').innerHTML='<h3>'+0+'</h3>'+'MAD币';
		}else{
			//optionline.series[0].data.push(snap.val().income.toFixed(2));
			document.getElementById('totalIncome').innerHTML='<h3>'+snap.val().toFixed(2)+'</h3>'+'MAD币';

		}
	});
}


// function getNowFormatDate() {
// 		var date = new Date();
// 		var seperator1 = "-";
// 		var year = date.getFullYear();
// 		var month = date.getMonth() + 1;
// 		var strDate = date.getDate();
// 		if (month >= 1 && month <= 9) {
// 			month = "0" + month;
// 		}
// 		if (strDate >= 0 && strDate <= 9) {
// 			strDate = "0" + strDate;
// 		}
// 		var currentdate = year + seperator1 + month + seperator1 + strDate;
// 		return currentdate;
// 	}
