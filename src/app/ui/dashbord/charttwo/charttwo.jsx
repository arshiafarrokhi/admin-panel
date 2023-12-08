"use client"
import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';



const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];
const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 },
];


const charttwo = () => {
  return (
    <div className='lg:w-[33%] w-[100%] h-[450px] bg-[#171F2a] rounded-3xl p-8 flex flex-col justify-center items-center mt-6 lg:mt-0'>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#AE593D" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#3ebf77" label />
        </PieChart>
      </ResponsiveContainer>
      <h5 className='text-[#C6D9E4] font-extrabold text-xl  '>Total Balance</h5>
      <p className='my-2'>0.3475948</p>
      <p className='text-[#3ebf77]'>11,032.24 USD</p>
      <button className='bg-[#3ebf77] rounded-2xl py-2 px-4 mt-2 transition-all hover:text-[#Ae593d] '>Withdraw</button>
    </div>
  )
}

export default charttwo