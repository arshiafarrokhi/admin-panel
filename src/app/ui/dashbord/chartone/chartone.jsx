"use client"
import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const card = () => {
  return (
    <div className='h-[450px] w-[63%] bg-[#171F2a] rounded-3xl p-10'>
      <h1 className='h-[20%] text-2xl font-extrabold transition-all hover:-translate-y-1 hover:text-[#ae593d]'>Monthly Overall Growth</h1>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#424A55" fill="#424A55" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#3ebf77" fill="#3ebf77" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#AE593D" fill="#AE593D" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default card