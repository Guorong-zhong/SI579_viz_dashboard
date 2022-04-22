import { useEffect,useState,useRef } from 'react';
import * as echarts from 'echarts';
import './StackLine.css'

const StackLine = (props) => {
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
            title: {
              text: 'Stacked Line'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['NO2', 'O3', 'SO2', 'CO']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: 'NO2',
                type: 'line',
                // stack: 'Total',
                encode: {
                    // reflect "Year" to x-axis
                    x: 'Year',
                    // reflect "NO2" to y-axis
                    y: 'NO2'
                }
              },
              {
                name: 'O3',
                type: 'line',
                // stack: 'Total',
                encode: {
                    // reflect "Year" to x-axis
                    x: 'Year',
                    // reflect "NO2" to y-axis
                    y: 'O3'
                }
              },
              {
                name: 'SO2',
                type: 'line',
                // stack: 'Total',
                encode: {
                    // reflect "Year" to x-axis
                    x: 'Year',
                    // reflect "NO2" to y-axis
                    y: 'SO2'
                }
              },
              {
                name: 'CO',
                type: 'line',
                // stack: 'Total',
                encode: {
                    // reflect "Year" to x-axis
                    x: 'Year',
                    // reflect "NO2" to y-axis
                    y: 'CO'
                }
              }
            ]
        };
        globalEchart.setOption(option);
    })

    console.log("rows",rows);

    return(<>
        <div ref={echartRef} id='main' style={{width:500,height: 400}}>
    </div>
    </>
    )
}

export default StackLine;