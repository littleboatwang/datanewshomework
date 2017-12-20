var chartJuxing = echarts.init(document.getElementById('juxing'));

var optionJuxing = {
    title : {
        text: '2017年快递业务量前15位城市情况',
        subtext: '单位/万件'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b}: {c}"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : [
        {
            name:'矩形图',
            type:'treemap',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}"
                    },
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data:[
                {
                    name: '广州',
                    value: '354940.7'
                },
                {
                    name: '上海',
                    value: '279773.8'
                },
                {
                    name: '深圳',
                    value: '234596.4'
                },
                {
                    name: '金华',
                    value: '224906.8'
                },
                {
                    name: '杭州',
                    value: '206469.3'
                },
                {
                    name: '北京',
                    value: '204429.5'
                },
                {
                    name: '东莞',
                    value: '110583.4'
                },
                 {
                    name: '苏州',
                    value: '92439.1'
                },
                {
                    name: '成都',
                    value: '74170.5'
                },
                {
                    name: '泉州',
                    value: '66599'
                },
                {
                    name: '温州',
                    value: '64517.1'
                },
                {
                    name: '武汉',
                    value: '64438.4'
                },
                {
                    name: '南京',
                    value: '57011.7'
                },
                {
                    name: '宁波',
                    value: '56929.8'
                },
                {
                    name: '揭阳',
                    value: '52678.2'
                },


            ]
        }
    ]
};
  chartJuxing.setOption(optionJuxing);

var chartQian = echarts.init(document.getElementById('qian'));
        var option = {
    title : {
        text: '2017年我国快递业务量前25位城市情况',
        subtext: '单位（万件）'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['快递业务量']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['广州','上海','深圳','金华','杭州','北京','东莞','苏州','成都','泉州','温州','武汉','南京','宁波','揭阳','台州','天津','郑州','无锡','嘉兴','汕头','合肥','佛山','石家庄','西安']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'快递业务量',
            type:'bar',
            data:['354940.7', '279773.8', '234596.4', '223906.8', '206469.3', '204429.5', '110583.4', '92439.1', '74170.5', '66599', '64517.1', '64438.4','57011.7','56929.8','52678.2','48239.9','45843.3','44178.1','40709.4','35665.4','35257.6','35065.9','34710.3','31525.7','30630.2'],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
       
    ]
};
 chartQian.setOption(optionQian);

var chartHuishou = echarts.init(document.getElementById('huishou'));
        var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['累积并卖给废品回收站','留待寄送快递时使用','当做杂物收纳盒','丢弃']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'center',
                        max: 1548
                    }
                }
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
        {
            name:'如何处理',
            type:'pie',
            radius : ['50%', '70%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '30',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[
                {value:'4', name:'累积并卖给废品回收站'},
                {value:'15', name:'留待寄送快递时使用'},
                {value:'16', name:'当做杂物收纳盒'},
                {value:'46', name:'丢弃'}
            ]
        }
    ]
};
chartHuishou.setOption(optionHuishou);

 var chartBaozhuang = echarts.init(document.getElementById('baozhuang'));
        var option = {
    title : {
        text: '快递包装类别数量统计',
        subtext: '2015-2017年（单位：亿个）'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['2015年','2016年','2017年']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['快递运单数量','编织袋','塑料袋','包装箱']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'2015年',
            type:'bar',
            data:['139.6','20','55.84','67']
        },
        {
            name:'2016年',
            type:'bar',
            data:['207','31','82.68','41.91']
        },
        {
            name:'2017年',
            type:'bar',
            data:['312.8','32','147','37']
        }
    ]
};
chartBaozhuang.setOption(optionBaozhuang);

var chartYouzheng = echarts.init(document.getElementById('youzheng'));
        var option = {
    title : {
        text: '邮件服务申诉（单位：件）',
        subtext: '2016年11月-2017年10月'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['申诉件数']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['投递服务','邮件延误','邮件丢失短少','邮件损毁','收集服务','违规收费','其他']
        }
    ],
    series : [
        {
            name:'申诉件数',
            type:'bar',
            data:['8380', '4578', '3047', '968', '545', '39','25'],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        }
    ]
};
chartYouzheng.setOption(optionYouzheng);

var chartKuaidi = echarts.init(document.getElementById('kuaidi'));
var option = {
    title : {
        text: '快递服务申诉（单位：件）',
        subtext: '2016-2017年'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['申诉件数']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['投递服务','邮件延误','邮件丢失短少','邮件损毁','收集服务','违规收费','代收货款','其他']
        }
    ],
    series : [
        {
            name:'申诉件数',
            type:'bar',
            data:['90934', '76001', '48240', '20755', '6016', '1757','1068','696'],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        }
    ]
};
chartKuaidi.setOption(optionKuaidi);

var chartTousulv = echarts.init(document.getElementById('tousulv'));
        var option = {
    title : {
        text: '主要快递企业有效申诉率节选',
        subtext: '2016年11月-2017年10月  单位：有效申诉数/百万件快件'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['全峰快递','国通','京东','苏宁易购','中通','申通']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['16年11月','16年12月','17年1月','17年2月','17年3月','17年4月','17年5月','17年6月','17年7月','17年8月','17年9月','17年10月']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} '
            }
        }
    ],
    series : [
        {
            name:'全峰快递',
            type:'line',
            data:['37.2','21.7','43.32','37.98','33.14','19.05','23.23','23.06','38.61','28.3','42.73','50.4'],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
         {
            name:'国通',
            type:'line',
            data:['25.87','52.86','38.4','27.61','33.64','22.82','27.2','20.71','21.32','24.86','24.49','27.07'],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
         {
            name:'京东',
            type:'line',
            data:['1.03','1.09','1.11','0.86','0.42','0.62','0.69','1.81','2.92','0.96','0.98','0.98'],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
         {
            name:'苏宁易购',
            type:'line',
            data:['0.13','0.05','0.06','0.08','0.07','0.06','0.07','0.08','0.07','0.04','0.05','0.06'],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
         {
            name:'中通',
            type:'line',
            data:['2.9','9.12','6.94','6.41','3.28','2.3','1.79','1.93','1.38','1.14','1.33','1.77'],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'申通',
            type:'line',
            data:['10.52','31.41','30.57','22.71','14.92','6.51','6.53','7.52','9.75','9.65','7.89','10.93'],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
chartTousulv.setOption(optionTousulv);

var chartBeijing = echarts.init(document.getElementById('beijing'));

var option = {
    title : {
        text: '北京市各区快递网点分布情况',
        subtext: '单位/个'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b}: {c}"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : [
        {
            name:'矩形图',
            type:'treemap',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}"
                    },
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data:[
                {
                    name: '西城区',
                    value: '1196'
                },
                {
                    name: '朝阳区',
                    value: '908'
                },
                {
                    name: '海淀区',
                    value: '527'
                },
                {
                    name: '丰台区',
                    value: '394'
                },
                {
                    name: '大兴区',
                    value: '324'
                },
                {
                    name: '通州区',
                    value: '296'
                },
                {
                    name: '昌平区',
                    value: '291'
                },
                 {
                    name: '东城区',
                    value: '264'
                },
                {
                    name: '顺义区',
                    value: '233'
                },
                {
                    name: '房山区',
                    value: '130'
                },
                {
                    name: '石景山区',
                    value: '76'
                },
                {
                    name: '怀柔区',
                    value: '58'
                },
                {
                    name: '平谷区',
                    value: '49'
                },
                {
                    name: '门头沟区',
                    value: '43'
                },
                {
                    name: '延庆县',
                    value: '36'
                },
                {
                    name: '密云县',
                    value: '28'
                }


            ]
        }
    ]
};
  chartBeijing.setOption(optionBeijing);