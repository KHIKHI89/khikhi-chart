import React , {useEffect} from 'react';

import * as echarts from 'echarts'
import { Key } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Chart = (props)=> {
  const {title ,legend ,grid , xAxis, yAxis, dataZoom , tooltip , toolbox , axisPointer ,brush , series} = props.option
  const data = props.data
  const xselected = props.xAxis
  const yselected = props.yAxis
  
  const [display, setDisplay] = React.useState(false)

  
  const handleClick =() => {setDisplay(true)} 
  
  useEffect(() => {

     function generateseries (series , data , xselected , yselected) {
      let seriesoptions= []
  
      seriesoptions = series.map( (serie) => {
        let option = {}
        if (serie.type === 'line' || serie.type === 'bar')
        { 
           option = {
            name: serie.name,
            type: serie.type,
            smooth: serie.smooth,
            data : data.map((d) => d[yselected])
  
          }
          
  
        }else if(serie.type ==='pie')
        {
          option =  {
            type: serie.type,
            data: data.map((d) => ({
              name: d[xselected],
              value: d[yselected]
            })),
            radius: serie.radius,
             center: serie.center,
             bottom : serie.bottom
  
          }
        }
    
       return option
      }
      )
      return seriesoptions  
    }
  
    const SERIES = generateseries(series , data , xselected , yselected)


    if(display) {
      var myChart = echarts.init(document.getElementById("graph"));
      

      console.log(SERIES);
  myChart.setOption({  

          title:{
             text:title.text
          }, 
          tooltip: {
            show : tooltip?.show,
            trigger: tooltip?.trigger,
            formatter : tooltip?.formatter
          },
            axisPointer: {
              show: axisPointer?.show ,
               type: axisPointer?.type ,
      },
          legend: {
            show: legend?.show,
            type:legend?.type,
            orient: legend?.orient,
            data: legend?.data,
            itemGap: 4
          },
            toolbox: {...toolbox},
          grid: {...grid},
          
          xAxis: series.filter(s=>['bar','line'].includes(s.type).length > 0) 
          ? [
            {
              type: xAxis?.type,
              name : xAxis?.name,
              data: data.map((d) => d[xselected])
            }
          ]
          : undefined,
          yAxis: [
            {
              type: yAxis?.type,
              name: yAxis?.name,
              data : data.map((d) => d[yselected])
            }
          ],
          dataZoom: [
            {
              type: dataZoom?.type,
              show: true,
              start: 0,
              end: 100,
              handleSize: 8
            }
          ],
           brush: {
                toolbox: brush.toolbox || 'rect',
            },
         series: SERIES

        
         
         
    })     
    console.log()       
  }      
}, [display]);

return (
  <div style={{width:"100%" , height:"100%"}}>
   
    <button onClick={handleClick}>
      Display
    </button>

         <div
    id="graph"
    style={{
      width: "100%",
      height: "100%"
    }}
  /> 
</div>
)}



export default Chart;
