import { useEffect,useState,useRef } from 'react';
import * as echarts from 'echarts';
import './BarPlot.css'

const BarPlot = (props) => {
    const {rows} = props;
    const echartRef =useRef(null)

    useEffect(()=>{
        // init echarts
        let globalEchart;
        if(globalEchart===undefined){
            globalEchart =echarts.init(echartRef.current);
        }else{
            globalEchart.clear()
        }

        //echarts
        let option = {
        dataset: {
            source: rows
        },
        xAxis: {
            type: 'category',
            boundaryGap: false
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        series: [
            {
            type: 'bar',
            encode: {
                // reflect "Year" to x-axis
                x: 'Year',
                // reflect "NO2" to y-axis
                y: 'NO2'
            }
            }
        ]
            }
        globalEchart.setOption(option);
    })

    console.log("rows",rows);

    return(<>
        <div ref={echartRef} id='main' style={{width:500,height: 400}}>
    </div>
    </>
    )
}

export default BarPlot;