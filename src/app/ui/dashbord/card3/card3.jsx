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
    uv: 1770,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 4190,
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
    <div className='h-[150px] lg:w-[24%] w-[47%] mt-6 lg:mt-0 bg-[#171F2a] rounded-3xl p-5 transition-all hover:-translate-y-3 hover:bg-[#ae593d96]'>
      <div className='flex items-center justify-between height="20%"'>
        <div>
          <h5 className='text-xl font-black'>Dogecoin</h5>
          <h6 className='font-extrabold'    >$2500.00</h6>
        </div>
        <div>
          <img src="/888.png" alt="" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height="65%">
        <AreaChart
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke="#3ebf77" fill="#3ebf77" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default card