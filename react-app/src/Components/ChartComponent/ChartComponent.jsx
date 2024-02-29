import React from 'react';
import './ChartComponent.css'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import vehicalData from './chartData.json'

const ChartComponent = () => {
  return (
    <div className='chart_content'>
      <h2>Number of vehicals sales (Millions)</h2>
      <p>Comparison b/w mahindra and hyundai in india</p>
      <div className="chart_div">
        <ResponsiveContainer>
         <BarChart data={vehicalData.sales} margin={{right:45}}>
            <CartesianGrid vertical={false}/>

            <XAxis dataKey="Year" />

            <YAxis/>
            <Tooltip contentStyle={{backgroundColor:"#000000b2",color:"white"}}/>

            <Legend />

            <Bar dataKey="Mahindra" fill='#f77474'/>
            <Bar dataKey="Hyundai" fill='#78a7f0'/>
         </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartComponent
