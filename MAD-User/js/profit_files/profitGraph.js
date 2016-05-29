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
        data: []
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
            data:[],
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
