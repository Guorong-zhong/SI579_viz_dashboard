import { useEffect,useState,useRef } from 'react';
import * as echarts from 'echarts';
import './TimeSeriesLine.css'

const TimeSeriesLine = (props) => {
    const {timeSeries,type} = props;
    const echartRef =useRef(null)
    

    let itemDict = {}
    let dateArray = []
    let NO2Array = []
    let SO2Array = []
    let O3Array = []
    let COArray = []
    for (let item=0; item < timeSeries.length;item++){
        dateArray.push(timeSeries[item].Date)
        NO2Array.push(timeSeries[item].NO2)
        SO2Array.push(timeSeries[item].SO2)
        O3Array.push(timeSeries[item].O3)
        COArray.push(timeSeries[item].CO)
    }
    // console.log("NO2Array",NO2Array)
    // console.log("SO2Array",SO2Array)
    // console.log("O3Array",O3Array)
    // console.log("COArray",COArray)
    itemDict['NO2']=NO2Array
    itemDict['SO2']=SO2Array
    itemDict['O3']=O3Array
    itemDict['CO']=COArray
    console.log("type",type)
    // console.log("extract type array",itemDict[type])

    // const [resultArray,setResultArray] = useState(NO2Array)

    // if(type==='NO2'){
    //     setResultArray(NO2Array)
    // }else if(type==="SO2"){
    //     setResultArray(SO2Array)
    // }else if(type==="O3"){
    //     setResultArray(O3Array)
    // }else{
    //     setResultArray(COArray)
    // }


    useEffect(()=>{

        // init echarts
        let globalEchart;
        if(globalEchart===undefined){
            globalEchart =echarts.init(echartRef.current);
        }else{
            globalEchart.clear()
        }

        let option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
            return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
            text: 'Large Area Chart ' + type
        },
        toolbox: {
            feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: dateArray
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        grid: { 
            top: '10%',
            x: '10%' ,
            x2: '10%',
            width: '100%'
          },
        dataZoom: [
            {
            type: 'inside',
            start: 0,
            end: 10
            },
            {
            start: 0,
            end: 10
            }
        ],
        series: [
            {
            name: 'Data for Each Day',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                },
                {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }
                ])
            },
            data: itemDict[type]
            }
        ]
        };
        globalEchart.setOption(option);
        // console.log("timeSeries",timeSeries)
    })

    return(<>
        <div ref={echartRef} id='main' style={{width:1000,height: 400}}>
    </div>
    </>
    )
}

export default TimeSeriesLine;