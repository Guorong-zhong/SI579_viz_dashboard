import logo from './logo.svg';
import './App.css';
// import ReactECharts from 'echarts-for-react';
// import * as d3 from "d3";
// import echarts from 'echarts';
import {csv} from 'd3';
import * as echarts from 'echarts';
import Papa from "papaparse";
import { useRef, useEffect, useState }  from 'react';
import BarPlot from './components/BarPlot';
import StackLine from './components/StackLine';
import MainPlot from './components/MainPlot';
import TimeSeriesLine from './components/TimeSeriesLine';
import SearchBoxForm from './components/SearchBoxForm';

const trans = d => {
  d.NO2 = +(d.NO2);
  d.O3 = +(d.O3);
  d.SO2 = +(d.SO2);
  d.CO = +(d.CO);
  return d;
}

function App() {
  // const echartRef =useRef(null)
  const [rows, setRows] = useState([]);
  const [timeSeries, setTimeSeries] = useState([]);
	const [yearSeries, setYearSeries] = useState([]);
  const [yearSeriesTrans, setYearSeriesTrans] = useState([]);
  const [type, setType] = useState('NO2');

	useEffect(()=>{
    //parse local csv file
    csv('./data/airpollution_york_year.csv',trans).then(data => {
      console.log("data",data)
      setRows(data)
      // setTimeout(2000)
    })

    csv('./data/pollutionByYear_T.csv').then(data => {
      // console.log("data",data)
      setYearSeriesTrans(data)
      // setTimeout(2000)
    })

    csv('./data/pollutionByTime.csv').then(data => {
      // console.log("data",data)
      setTimeSeries(data)
      // setTimeout(2000)
    })
	},[])

  console.log("rows",rows);
  console.log("timeSeries",timeSeries);
  // console.log("yearSeries",yearSeries);
  console.log("yearSeriesTrans",yearSeriesTrans);

  return (<>
    <MainPlot rows={rows} yearSeriesTrans={yearSeriesTrans}/>
    <SearchBoxForm setType={setType}/>
    <TimeSeriesLine timeSeries={timeSeries} type={type}/>
    {/* <BarPlot rows={rows}/> */}
    {/* <div ref={echartRef} id='main' style={{width:500,height: 400}}>
    </div> */}
    {/* <StackLine rows={rows}/> */}
    </>
  );
}

export default App;
