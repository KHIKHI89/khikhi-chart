import React from 'react'
import ReactEcharts from "echarts-for-react";

const ChartingZOne = ( pieOptions , Lineoption , type ) => {

    // eslint-disable-next-line default-case
    switch (type) {
        case "Pie":
          return (
            <ReactEcharts 
               option={pieOptions}
               style={{ height: "60px", width: "10%", marginBottom: "20px" }} 
              
            />
          )  
          
          case "Line":
            return(
              <ReactEcharts 
                 option={Lineoption}
                 style={{ height: "600px", width: "100%", marginBottom: "20px" }} 
              />

            )
            case "Bar" : 
            return (
              <ReactEcharts 
                 option={Lineoption}
                 style={{ height: "600px", width: "100%", marginBottom: "20px" }} 
              />
                
            )
        }
  
}
export default  ChartingZOne