import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const Echart = ({filteredData, chartData}) => {

    const chartData = filteredData.map((data, index)=>{
      return {
        date: data[index],
        open: data.open,
        high: data.high,
        low: data.low,
        close: data.close
      }
    })

  return (
    <LineChart width={800} height={400} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="open" stroke="#8884d8" />
      <Line type="monotone" dataKey="high" stroke="#82ca9d" />
      <Line type="monotone" dataKey="low" stroke="#ffc658" />
      <Line type="monotone" dataKey="close" stroke="#8dd1e1" />
    </LineChart>
  )
}

export default Echart