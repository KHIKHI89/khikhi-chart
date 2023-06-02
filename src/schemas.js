/**import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const MultiChartComponent = () => {

 
  useEffect(() => {
    var myChart = echarts.init(document.getElementById("graph"));
    const OPTION = []
    const chartData = [
      {
        type: 'bar',
        title: 'Bar Chart',
        data: [10, 20, 30, 40, 50],
      },
      {
        type: 'line',
        title: 'Line Chart',
        data: [5, 10, 15, 20, 25],
      },
      {
        type: 'pie',
        title: 'Pie Chart',
        data: [
          { name: 'A', value: 30 },
          { name: 'B', value: 50 },
          { name: 'C', value: 20 },
        ],
      },
    ];
  

    chartData.forEach((chart) => {
      const { type, title, data } = chart;
      let options = {}
      if(type === "bar" || type === "line"){
         options = {
          title: {
            text: title,
          },
          xAxis: {
            type: "category",
            data : ["A", "B", "C"]
          }, 
          yAxis: {
            type: 'value',
          },
          series: [
            {
              type: type,
              data: data,
            },
          ],
        };

      }else if (type === "pie" )
      {
         options = {
          title: {
            text: title,
          },
          series: [
            {
              type: type,
              data: data,
            },
          ],
        };
      }
      OPTION.push(options);
      

      myChart.setOption(options);
      console.log(OPTION);
    });

    return () => {
      myChart.dispose();
      console.log(myChart);
    };
  }, []);

  return (
    <div>

 <div
    id="graph"
    style={{
      width: "50%",
      height: 50,
    }}
  />     </div>
  );
};

export default MultiChartComponent;
*/
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const MultiChartComponent = () => {
  const chartRefs = useRef([]);

 

  useEffect(() => {
    const chartData = [
      {
        type: 'bar',
        title: 'Bar Chart',
        data: [10, 20, 30, 40, 50],
      },
      {
        type: 'line',
        title: 'Line Chart',
        data: [5, 10, 15, 20, 25],
      },
      {
        type: 'pie',
        title: 'Pie Chart',
        data: [
          { name: 'A', value: 30 },
          { name: 'B', value: 50 },
          { name: 'C', value: 20 },
        ],
      },
    ];
    const charts = chartData.map(() => echarts.init());

    chartRefs.current = charts.map((chart) => ({ ref: React.createRef(), chart }));
    chartRefs.current.forEach(({ ref, chart }, index) => {
      ref.current = chart;
      chart.setOption(getOptions(chartData[index]));

    });

    // Dispose the charts when the component is unmounted
    return () => {
      chartRefs.current.forEach(({ chart }) => {
        chart.dispose();
      });
    };
  }, []);

  const getOptions = (chart) => {
    const { type, title, data } = chart;

    return {
      title: {
        text: title,
      },
      series: [
        {
          type: type,
          data: data,
        },
      ],
    };
  };

  return (
    <div>
      <h1>Multi Chart Component</h1>
      {chartRefs.current.map(({ ref }, index) => (
        <div key={index} ref={ref} style={{ width: '100%', height: '400px' }} />
      ))}
    </div>
  );
};

export default MultiChartComponent;
