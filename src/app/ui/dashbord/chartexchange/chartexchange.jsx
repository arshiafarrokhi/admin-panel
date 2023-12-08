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
        uv: -1000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 500,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: -2000,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: -250,
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

const gradientOffset = () => {
    const dataMax = Math.max(...data.map((i) => i.uv));
    const dataMin = Math.min(...data.map((i) => i.uv));

    if (dataMax <= 0) {
        return 0;
    }
    if (dataMin >= 0) {
        return 1;
    }

    return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const chartexchange = () => {
    return (
        <div className='w-[100%] h-[450px] bg-[#171F2a] rounded-3xl p-8 flex flex-col justify-center items-center mb-16'>
            <h1 className='h-[20%] text-2xl font-extrabold transition-all hover:-translate-y-1 hover:text-[#ae593d]'>Market trades</h1>
            <ResponsiveContainer width="100%" height="100%">
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
                    <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset={off} stopColor="#3ebf77" stopOpacity={1} />
                            <stop offset={off} stopColor="#Ae593d" stopOpacity={1} />
                        </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default chartexchange