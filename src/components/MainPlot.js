import { useEffect,useState,useRef } from 'react';
import * as echarts from 'echarts';
import './MainPlot.css'

const MainPlot = (props) => {
    const {rows,yearSeriesTrans} = props;
    const echartRef =useRef(null)

    // console.log("yearSeriesTrans line1",yearSeriesTrans[0])
        // console.log("columns",yearSeriesTrans.columns)
    let itemArray = [yearSeriesTrans.columns];
    for (let item=0; item < yearSeriesTrans.length;item++){
        // console.log("item",yearSeriesTrans[item])
        // console.log("item keys",Object.keys(yearSeriesTrans[item]))
        // console.log("item last value",yearSeriesTrans[item][2000])
        // console.log("item name",yearSeriesTrans[item]['Pollutant'])
        // for (yearSeriesTrans[item].keys())
        let tempArray = []
        tempArray.push(yearSeriesTrans[item].Pollutant)
        tempArray.push(yearSeriesTrans[item][2000])
        tempArray.push(yearSeriesTrans[item][2001])
        tempArray.push(yearSeriesTrans[item][2002])
        tempArray.push(yearSeriesTrans[item][2003])
        tempArray.push(yearSeriesTrans[item][2004])
        tempArray.push(yearSeriesTrans[item][2005])
        tempArray.push(yearSeriesTrans[item][2006])
        tempArray.push(yearSeriesTrans[item][2007])
        tempArray.push(yearSeriesTrans[item][2008])
        tempArray.push(yearSeriesTrans[item][2009])
        tempArray.push(yearSeriesTrans[item][2010])
        tempArray.push(yearSeriesTrans[item][2011])
        tempArray.push(yearSeriesTrans[item][2012])
        tempArray.push(yearSeriesTrans[item][2013])
        tempArray.push(yearSeriesTrans[item][2014])
        tempArray.push(yearSeriesTrans[item][2015])
        tempArray.push(yearSeriesTrans[item][2016])
        // console.log("tempArray",tempArray)

        itemArray.push(tempArray)
    }
    // console.log("itemArray",itemArray)

    useEffect(()=>{
        // init echarts
        let globalEchart;
        if(globalEchart===undefined){
            globalEchart =echarts.init(echartRef.current);
        }else{
            globalEchart.clear()
        }

        console.log("itemArray",itemArray)
        //echarts
        let option;
        if(itemArray.length==5){
            setTimeout(()=> {
                option = {
                  legend: {},
                  tooltip: {
                    trigger: 'axis',
                    showContent: true
                  },
                  dataset: {
                    source: itemArray
                  },
                  title: {
                    text: 'Four Main Air Pollutants Trend by Year'
                  },
                  xAxis: { type: 'category' },
                  yAxis: { gridIndex: 0 },
                  grid: { 
                      top: '25%',
                      x: '10%' ,
                      x2: '10%',
                      width: '80%'
                    },
                  series: [
                    {
                      type: 'line',
                      smooth: true,
                      seriesLayoutBy: 'row',
                      emphasis: { focus: 'series' }
                    },
                    {
                      type: 'line',
                      smooth: true,
                      seriesLayoutBy: 'row',
                      emphasis: { focus: 'series' }
                    },
                    {
                      type: 'line',
                      smooth: true,
                      seriesLayoutBy: 'row',
                      emphasis: { focus: 'series' }
                    },
                    {
                      type: 'line',
                      smooth: true,
                      seriesLayoutBy: 'row',
                      emphasis: { focus: 'series' }
                    },
                    {
                      type: 'pie',
                      id: 'pie',
                      radius: '30%',
                      center: ['75%', '30%'],
                      emphasis: {
                        focus: 'self'
                      },
                      label: {
                        formatter: '{b}: {@2000} ({d}%)'
                      },
                      encode: {
                        itemName: 'Pollutant',
                        value: '2000',
                        tooltip: '2000'
                      }
                    }
                  ]
                };
                globalEchart.on('updateAxisPointer', (event)=> {
                  const xAxisInfo = event.axesInfo[0];
                  if (xAxisInfo) {
                    const dimension = xAxisInfo.value + 1;
                    // globalEchart.clear();
                    globalEchart.setOption({
                      series: {
                        id: 'pie',
                        label: {
                          formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                          value: dimension,
                          tooltip: dimension
                        }
                      }
                    });
                  }
                });
                globalEchart.setOption(option);
              });
        }
        
    })

    // console.log("rows",rows);

    return(<>
        <div ref={echartRef} style={{width:1000,height: 400}}>
    </div>
    </>
    )
}

export default MainPlot;