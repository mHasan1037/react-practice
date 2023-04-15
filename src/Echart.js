import React from 'react'

import * as echarts from 'echarts/core';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import {
    TitleComponent,
    GraphicComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    DataZoomComponent,
  } from 'echarts/components';
import { BarChart, CandlestickChart, LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';



const Echart = ({filteredData, dateTimeArray, valumesData}) => {

    console.log(dateTimeArray)

    echarts.use([
        TitleComponent,
        GraphicComponent,
        TooltipComponent,
        GridComponent,
        LegendComponent,
        DataZoomComponent,
        BarChart,
        CandlestickChart,
        LineChart,
        CanvasRenderer,
        UniversalTransition,
      ]);
      
      const colorList = [
        '#c23531',
        '#2f4554',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3',
      ];
      const labelFont = 'bold 12px Sans-serif';
      
      function calculateMA(dateTimeArray, filteredData) {
        const result = [];
        for (let i = 0, len = filteredData.length; i < len; i++) {
          if (i < dateTimeArray) {
            result.push('-');
            continue;
          }
          let sum = 0;
          for (let j = 0; j < dateTimeArray; j++) {
            sum += +filteredData[i - j][1];
          }
          result.push((sum / dateTimeArray).toFixed(2));
        }
        return result;
      }
      // prettier-ignore
     
      const dataMA5 = calculateMA(5, filteredData);
      const dataMA10 = calculateMA(10, filteredData);
      const dataMA20 = calculateMA(20, filteredData);
      
      const options = {
        animation: false,
        color: colorList,
        title: {
          left: 'center',
          text: 'Stock price data',
        },
        axisPointer: {
          link: [
            {
              xAxisIndex: [0, 1],
            },
          ],
        },
        // dataZoom: [
        //   {
        //     type: 'slider',
        //     xAxisIndex: [0, 1],
        //     realtime: false,
        //     start: 20,
        //     end: 70,
        //     top: 65,
        //     height: 20,
        //     handleIcon:
        //       'path://M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        //     handleSize: '120%',
        //   },
        //   {
        //     type: 'inside',
        //     xAxisIndex: [0, 1],
        //     start: 40,
        //     end: 70,
        //     top: 30,
        //     height: 20,
        //   },
        // ],
        xAxis: [
          {
            type: 'category',
            data: filteredData,
            boundaryGap: false,
            axisLine: { lineStyle: { color: '#777' } },
            axisLabel: {
              formatter(value) {
                return echarts.format.formatTime('MM-dd', value);
              },
            },
            min: 'dataMin',
            max: 'dataMax',
            axisPointer: {
              show: true,
            },
          },
          {
            type: 'category',
            gridIndex: 1,
            data: dateTimeArray,
            scale: true,
            boundaryGap: false,
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            axisLine: { lineStyle: { color: '#777' } },
            min: 'dataMin',
            max: 'dataMax',
            // slider
            axisPointer: {
              type: 'shadow',
              label: { show: false },
              triggerTooltip: true,
              handle: {
                show: true,
                margin: 30,
                color: '#B80C00',
              },
            },
          },
        ],
        yAxis: [
          {
            scale: true,
            splitNumber: 2,
            axisLine: { lineStyle: { color: '#777' } },
            splitLine: { show: true },
            axisTick: { show: false },
            axisLabel: {
              inside: true,
              formatter: '{value}\n',
            },
          },
          {
            scale: true,
            gridIndex: 1,
            splitNumber: 2,
            axisLabel: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
          },
        ],
        grid: [
          {
            left: 20,
            right: 20,
            top: 110,
            height: 120,
          },
          {
            left: 20,
            right: 20,
            height: 40,
            top: 260,
          },
        ],
        // graphic: [
        //   {
        //     type: 'group',
        //     left: 'center',
        //     top: 70,
        //     width: 300,
        //     bounding: 'raw',
        //     children: [
        //       {
        //         id: 'MA5',
        //         type: 'text',
        //         style: { fill: colorList[1], font: labelFont },
        //         left: 0,
        //       },
        //       {
        //         id: 'MA10',
        //         type: 'text',
        //         style: { fill: colorList[2], font: labelFont },
        //         left: 'center',
        //       },
        //       {
        //         id: 'MA20',
        //         type: 'text',
        //         style: { fill: colorList[3], font: labelFont },
        //         right: 0,
        //       },
        //     ],
        //   },
        // ],
        series: [
          {
            name: 'Volume',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              color: '#7fbe9e',
            },
            emphasis: {
              itemStyle: {
                color: '#140',
              },
            },
            data: valumesData,
          },
          {
            type: 'candlestick',
            name: '日K',
            filteredData,
            itemStyle: {
              color: '#ef232a',
              color0: '#14b143',
              borderColor: '#ef232a',
              borderColor0: '#14b143',
            },
            emphasis: {
              itemStyle: {
                color: 'black',
                color0: '#444',
                borderColor: 'black',
                borderColor0: '#444',
              },
            },
          },
        ],
      };

  return (
    <div>
        <ReactEChartsCore
            style={{ height: 500 }}
            opts={{ height: 500 }}
            echarts={echarts}
            option={options}
            notMerge
            lazyUpdate
      />
    </div>
  )
}

export default Echart