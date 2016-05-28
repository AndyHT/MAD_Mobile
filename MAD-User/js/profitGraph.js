var echartbig=echarts.init(document.getElementById('echartbig'));
var echartline=echarts.init(document.getElementById('echartline'));
var optionTOP5={
    title : {
        text: '广告收益排行TOP5',
        top:'20%',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top:'30%',
        data: [
        //依次排名，广告title字符串
//      '直接','邮件营销','联盟广告','视频广告','搜索引擎'
        ]
    },
    series : [
        {
            name: 'TOP5',
            type: 'pie',
            radius : '55%',
            center: ['70%', '55%'],
            label:{
	            	normal:{
	            		position:'inner'
	            	}
            },
            data:[
            //{value:收益,name:广告title}
//              {value:5, name:'直接'},
//              {value:5, name:'邮件营销'},
//              {value:5, name:'联盟广告'},
//              {value:5, name:'视频广告'},
//              {value:5, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ],
    
};

var optionline={
    title: {
        text: '近7日广告收益',
        x:'center',
        subtext: 'MAD币'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {},
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        }
    },
    series: [
        {
            name:'广告收益',
            type:'line',
            data:[]
        }
    ]
};

var optionlineMonth={
    title: {
        text: '本月广告收益',
        x:'center',
        subtext: 'MAD币'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {},
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        }
    },
    series: [
        {
            name:'广告收益',
            type:'line',
            data:[]
        }
    ]
};

var optionlineYear={
    title: {
        text: '今年广告收益',
        x:'center',
        subtext: 'MAD币'
    },
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {},
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} '
        }
    },
    series: [
        {
            name:'广告收益',
            type:'line',
            data:[]
        }
    ]
};




//echartbig.setOption(optionTOP5);
//echartright.setOption(option1);
//echartleft.setOption(option3);
//var ran={};
//ran.n=function(){
//	return Math.round(Math.random()*15);
//}
		
		
		
		
		








		
		
		
//var option1={
//	title:{
//		text:'今日接单统计',
//		x:'center'
//	},
//	tooltip:{
//		trigger:'item',
//		
//	},
//	legend:{
//		orient:'vertical',
//		left:'left',
//		data:['ss','ss']
//	},
//	series:[
//	{
//		name:'fssg',
//		type:'pie',
//		radius:'55%',
//		center:["50%",'60%'],
//		label:{
//			normal:{
//				position:'inner'
//			}
//		},
//		data:[
//		{value:1,name:'s'},
//		{value:7,name:'f'}
//		],
//		itemStyle:{
//			emphasis:{
//				shadowBlur:10,
//				shadowOffsetX:0,
//				shadowColor:'rgba(0,0,0,0.5)'
//			}
//		}
//	}]
//	
//};
		
		
		
		
//var option3={
//	title:{
//		text:'可结算／总收益',
//		x:'center'
//	},
//	tooltip:{
//		trigger:'item',
//		
//	},
//	legend:{
//		orient:'vertical',
//		left:'left',
//		data:['ss','ss']
//	},
//	series:[
//	{
//		label:{
//			normal:{
//				position:'inner'
//			}
//		},
//		name:'fssg',
//		type:'pie',
//		radius:'55%',
//		center:["50%",'60%'],
//		data:[
//		{value:333,name:'d'}
//		
//		],
//		itemStyle:{
//			emphasis:{
//				shadowBlur:10,
//				shadowOffsetX:0,
//				shadowColor:'rgba(0,0,0,0.5)'
//			}
//		}
//	}]
//	
//};
		
		
//		setInterval(function(){
//			for (var i=0;i<5;i++) {
//				optionline.series[0].data[i+1]=ran.n();
////				optionline.series[1].data[i+2]=ran.n();
//				option2.series[0].data[i].value=ran.n();
//			}
//			echartline.setOption(optionline);
//			echartbig.setOption(option2);
//		},1000);