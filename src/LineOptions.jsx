import React , {useEffect} from 'react';

import * as echarts from 'echarts'
import { Key } from '@mui/icons-material';

const Chart = (props)=> {
  const {title ,legend ,grid , xAxis, yAxis, dataZoom , tooltip , toolbox , axisPointer ,brush , series  } = props
  const data = props.data
  const selectedx = props.xAxis
  const selectedy = props.yAxis
  const [display, setDisplay] = React.useState(false)
  const handleClick = () => setDisplay(true)
  useEffect(() => {
    if(display) {
      var myChart = echarts.init(document.getElementById("graph"));
      const seriesoptions= []
  console.log(props)
  myChart.setOption({  
          title:{
             text:title
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
          grid: {
            top: grid?.top,
            left: grid?.left,
            right: grid?.right,
            bottom: grid?.bottom,
            containLabel: true
          },
          xAxis: [
            {
              type: xAxis?.type,
              name : xAxis?.name,
              data: data.map((item) => item[selectedx])
            }
          ],
          yAxis: [
            {
              type: yAxis?.type,
              name: yAxis?.name,
              data : data.map((item) => item[selectedy])
            }
          ],
          dataZoom: [
            {
              type: dataZoom?.type,
              show: true,
              start: 94,
              end: 100,
              handleSize: 8
            }
          ],
           brush: {
                toolbox: brush?.toolbox || 'rect',
            },
         series: series.map( function (key) {
          let option = {}
          if (key.type === 'line' || key.type === 'bar')
          { 
             option = {

              type: key?.type,
              smooth: key?.smooth,
              data : data.map((item) => item[selectedy])

            }
            

          }else if(Key.type ===' pie')
          {
            option =  {
              type: key?.type,
              data: data.map((d) => ({
                name: d[selectedx],
                value: d[selectedy]
              })),
              radius: key?.radius,
               center: key?.center,

            }
          }
        
         seriesoptions.push(option)
         console.log(seriesoptions)

         return seriesoptions
        }
        )
         
        
    })            
  }      
console.log()
}, [display]);

return (
  <div>
    <button onClick={handleClick}>
      Display
    </button>
         <div
    id="graph"
    style={{
      width: "50%",
      height: 200,
    }}
  /> 
</div>
)}



export default Chart;
