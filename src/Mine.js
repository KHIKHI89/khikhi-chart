import React , {useState} from "react";
import { Responsive , WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./doc.css";
import Sidebar from "./Sidebar"
import {schema} from "./schema"
import {data} from "./donee.js"
import ReactEcharts from "echarts-for-react";
import Chart from "./LineOptions"

const ResponsiveGridLayout = WidthProvider(Responsive)
function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("report-rgl")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}
function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "report-rgl",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

function Content() {
  const [items, setItems] = useState( [
    { i: "a", x: 0, y: 0, w: 8, h: 14, minW: 2, minH: 3 , static : false },
    { i: "b", x: 8, y: 0, w: 4, h: 14, minW: 2, minH: 3 , static : false},
    { i: "c", x: 0, y: 14, w: 8, h: 7, minW: 2, minH: 3 , static : false},
    { i: "d", x: 8, y: 14, w: 4, h: 7, minW: 2, minH: 3 , static : false} ,
 
  ]);
  const [layouts, setLayouts] = useState(
    JSON.parse(JSON.stringify(getFromLS("layouts") || {}))  );
  const [tainted , setTainted] = useState(null)
  const onLayoutChange=(layout,layouts)=>
  { 
    saveToLS("layouts", layouts);

      setLayouts({ layouts})
  }
  const onResizeStop= (layout , oldItem , newItem , placeholder , e , element) =>
  {
    setTainted(oldItem.i)
  }
  const resizeChartDone = ( ) => 
  {
    setTainted(null)
  }
  const onWidthChange = (containerWidth) => 
  {
    setTainted("all")
  }
  const xAxis = data.map((item) => item.Marque)
  const yAxis = data.map((item) => item.Cout)
  const option = {
    
    title:{
        text:"Hello "
     },
tooltip: {
  show : true,
  trigger: "axis",
  formatter :  "{a} <br/>{b}: {c}"
},
  axisPointer: {
    show: true ,
     type:  "none",
},
    toolbox: {
        show: true,
        orient: "horizontal",
        feature: {
           
           magicType: {
              type:["line" , "bar" , "stack"],
           },
           saveAsImage: {
            type: "png",
           }
          }
     },
     grid: {
       top: 50,
       left: 2,
       right:10, 
       bottom:5, 
       containLabel: true
   },
xAxis: 
 {
   type: "category",
   name : "number",
   data: xAxis
 }
,
yAxis: 
 {
   type: "value",
 }
,
dataZoom: 
 {
   type: "inside",
   show: true,
   start: 4,
   end: 100,
   handleSize: 8
 }
,
brush: {
     toolbox: 'rect',
 },
series: [{
    type: "bar",
    data: yAxis

},
{
  type: "line",
  data: data.map((item)=> item.Bénéfice)
},
{
  type:"pie",
  radius: 70,
  center: ["75%" , "100%"],
  data: data.map( function(key) {
    return {
      name: key.Marque,
      value: key.Cout
    }
  })
}]
}

  return(
    <ResponsiveGridLayout
       className="layout"
       layouts={layouts}
       cols={{lg:12 , md:9 , sm:6 , xs: 4 , xxs:2}}
       rowHeight={50}
       onLayoutChange={onLayoutChange}
       autoSize={false}
       onResizeStop={onResizeStop}
       onWidthChange={onWidthChange}
          
    >
       {items.map((item, index) => {
          let { i,  ...dataGrid } = item;
          return (
            <div key={i} data-grid={{ ...dataGrid }}>
                
                    <ReactEcharts option={option}/>

                
               </div>
              
          );
        })}

        

    </ResponsiveGridLayout>
  )
  }

  export default Content