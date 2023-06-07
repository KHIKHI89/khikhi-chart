import React , {useState} from "react";
import { Responsive , WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./doc.css";
import Sidebar from "./Sidebar"
import {schema} from "./schema"
import {data} from "./donee.js"
import ReactEcharts from "echarts-for-react";
import Chart from "./Componentcharts"
//import Chart from "./anothercomponentjhg"
//import Chart from "./lastcomponent"

function Content() {
 
  
  const xAxis = "Modéle"
  const yAxis = "Cout"
  
  const option = {
    
    title:{
        text:"Chart "
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
         top: '55%' ,
        containLabel: true
   },
xAxis: 
 {
   type: "category",
   name : xAxis
 }
,
yAxis: 
 {
   type: "value",
   name: yAxis
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
 
 series: 
[
    {
        type:"line",
        name:yAxis,
        smooth :true,
        data : yAxis,

    },
    {
        type : "pie",
        center: ["50%","25%"],
        radius:"30%",
    },
    {
        type : "line",
        smooth: true,
        data: yAxis,
    }
]
}


  return(

    
            <div style={{width: "100%", height: "100%"}}>
                <div style={{width: "100%", height: "100%"}}>
                
                    <Chart {...{option , xAxis, yAxis , data , schema  }}  />
                  </div>
                
               </div>
            
          
        

  )
  }

  export default Content
  /**
   * const optionpie = {
    
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
 
}
   */