import React , {useState} from "react";
import Validate from "./Components/data"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ReactEcharts from "echarts-for-react";
import ChartingZOne from './ChartingZOne';
import "./Sidebar.css"
 

function Sidebar (props ) {
    const schema = props.schema
    const donee = props.data;
    const [x , setX] = useState("")
const [y, setY] = useState("")
const [xData, setXData] = useState([])
const [yData, setYData] = useState([])
console.log(yData)

     function genData(data) {
  
      var legendData = [];
      var seriesData = [];
      var selected = {};
      for (var i = 0; i < 50; i++) {
        const name =
          Math.random() > 0.65
            ? makeWord(4, 1) + "·" + makeWord(3, 0)
            : makeWord(2, 1);
        legendData.push(name);
        seriesData.push({
          name: name,
          value: Math.round(Math.random() * 100000)
        });
        selected[name] = i < 6;
      }
    
      return {
        legendData: legendData,
        seriesData: seriesData,
        selected: selected
      };
    
      function makeWord(max, min) {
        var nameLen = Math.ceil(Math.random() * max + min);
        var name = [];
        for (var i = 0; i < nameLen; i++) {
          name.push(data[Math.round(Math.random() * data.length - 1)]);
        }
        return name.join("");
      }
    }
    var Data = genData(xData);

     const handledataX = (e) => {
      const value = e.target.value
       setXData(donee.map((item) => item[value]))
       
    }
    const handledataY = (e) => {
      const value = e.targe.value
      setYData(donee.map((item) => item[value]))
    }
   const pieOptions = {
      title: {
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        type: "scroll",
        orient: "vertical",
        right: 1,
        top: 20,
        bottom: 20,
        data: Data.legendData,
    
        selected: Data.selected
      },
      series: [
        {
          type: "pie",
          radius: "55%",
          center: ["40%", "50%"],
          data: Data.seriesData,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
  
    }
    const  Lineoption={
      color: ["red"],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            }
          },
          grid: {},
          xAxis: [
            {
              type: "category",
              data: xData
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          series: [
            {
              type: "line",
              data: yData
            }
          ]
        }
    

    return(
    <div className="app-sidebar">
       
       <div>
      <select name="X" onChange={e=>handledataX(e)}>
        {Validate(schema).x.map((item) => 
          <option>{item}</option>
        )}
      </select>
      </div>
      <div>
      <select name="" >
        {Validate(schema).y.map((item) => 
          <option>{item}</option>
        )}
      </select>
      </div>
      <div>
      {xData.length !== 0 && yData.length !== 0 ? (
      < ReactEcharts
        option={Lineoption}
        style={{ height: "60px", width: "10%", marginBottom: "20px" }} 
      />): null}
      </div>
      
</div>
  );
  

          



}

export default Sidebar