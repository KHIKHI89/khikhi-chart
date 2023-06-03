import React , {useEffect} from 'react';

import * as echarts from 'echarts'
import { Key } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Chart = (props)=> {
  const {title ,legend ,grid , xAxis, yAxis, dataZoom , tooltip , toolbox , axisPointer ,brush , series ,schema   } = props
  const data = props.data
  const possibles = Object.keys(schema.columns).reduce(
    (acc, cur) => {
      const { type } = schema.columns[cur];
      if (
        type.includes('char')
        || type.includes('foreigns')
        || type.includes('enum')
        || type.includes('set')
        || type.includes('int')
        || type.includes('time')
        || type.includes('varchar')
        || type.includes( 'date')
      ) {
        acc.xKeys.push({ label: schema.columns[cur].label });
      }
      
      if (
        schema.columns[cur].type.includes('float')
        || schema.columns[cur].type.includes('decimal')
        || schema.columns[cur].type.includes('int')
      ) {
        acc.yKeys.push({ label: schema.columns[cur].label});
      }
      return acc;
    },
    { xKeys: [], yKeys: [] },
  );

  const [display, setDisplay] = React.useState(false)
  const [xselected , setXselected] = React.useState()
  const [yselected , setYselected] = React.useState()
  const handleClick = () => setDisplay(true)
  const handledataX = (e) => {
    setXselected(e.target.value)
  }
  const handleychange = (e) => {
    setYselected(e.target.value)
  }
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
              data: data.map((item) => item[xselected])
            }
          ],
          yAxis: [
            {
              type: yAxis?.type,
              name: yAxis?.name,
              data : data.map((item) => item[yselected])
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
              data : data.map((item) => item[yselected])

            }
            

          }else if(Key.type ===' pie')
          {
            option =  {
              type: key?.type,
              data: data.map((d) => ({
                name: d[xselected],
                value: d[yselected]
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
    <div>
      <div>
      <FormControl  style={{ minWidth: 120 }}>
        <InputLabel>{possibles.xKeys}</InputLabel>
        <Select
                onChange={e=>handleychange(e)
          }
        >
          {' '}
          <MenuItem key="all" value={null}>
            <u>Aucun</u>
          </MenuItem>
          {possibles.xKeys.map((item) => (
            <MenuItem key={item.label} value={item.value}>
              {item.label}
    
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      </div>
      <div>
      <FormControl  style={{ minWidth: 120 }}>
        <InputLabel>{possibles.xKeys}</InputLabel>
        <Select
          onChange={e=>handleychange(e)
          }
        >
          {' '}
          <MenuItem key="all" value={null}>
            <u>Aucun</u>
          </MenuItem>
          {possibles.yKeys.map((item) => (
            <MenuItem key={item.label} value={item.value}>
              {item.label}
    
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      </div>
    </div>
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
