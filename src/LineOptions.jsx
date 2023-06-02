import React , {useEffect} from 'react';

import * as echarts from 'echarts'

const Chart = (props, state=false)=> {
  const {title ,legend ,grid , xAxis, yAxis, dataZoom , tooltip , toolbox , axisPointer ,brush , series, data , x , y , opt} = props
  const [display, setDisplay] = React.useState(state)
  const handleClick = () => setDisplay(true)
  useEffect(() => {
    if(display) {
      var myChart = echarts.init(document.getElementById("graph"));
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
              data: xAxis?.data
            }
          ],
          yAxis: [
            {
              type: yAxis?.type,
              name: yAxis?.name,
              data : yAxis?.data
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
         series
    })          
  }      
console.log(series)
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
