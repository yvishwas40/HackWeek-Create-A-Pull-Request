import React from 'react';
import { FaRegCalendarMinus, FaEllipsisV } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PieComponent from './PieComponent';
import { Progress } from 'antd';
import error from '../assets/error.png';

const datas = [
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

const Main = () => {
    return (
        <div className='px-4 pt-4 bg-gray-100 pb-8'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-normal text-gray-700 cursor-pointer'>Dashboard</h1>
                <button className='bg-blue-500 text-white px-3 py-2 rounded'>Generate Report</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 pb-4'>
                <div className='h-24 bg-white border-l-4 border-blue-600 rounded-lg flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-purple-500 text-sm font-bold'>EARNINGS (MONTHLY)</h2>
                        <h1 className='text-lg font-bold text-gray-700 mt-1'>$40,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} color='' />
                </div>
                <div className='h-24 bg-white border-l-4 border-green-500 rounded-lg flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-green-500 text-sm font-bold'>EARNINGS (ANNUAL)</h2>
                        <h1 className='text-lg font-bold text-gray-700 mt-1'>$240,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} />
                </div>
                <div className='h-24 bg-white border-l-4 border-blue-700 rounded-lg flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-blue-700 text-sm font-bold'>TASKS</h2>
                        <h1 className='text-lg font-bold text-gray-700 mt-1'>$240,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} />
                </div>
                <div className='h-24 bg-white border-l-4 border-yellow-500 rounded-lg flex items-center justify-between px-4 cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out'>
                    <div>
                        <h2 className='text-yellow-500 text-sm font-bold'>PENDING REQUESTS</h2>
                        <h1 className='text-lg font-bold text-gray-700 mt-1'>$240,000</h1>
                    </div>
                    <FaRegCalendarMinus fontSize={28} />
                </div>
            </div>
            <div className='flex mt-4 md:space-x-4'>
                <div className='flex-1 border bg-white shadow-md rounded-lg'>
                    <div className='bg-gray-100 flex items-center justify-between py-3 px-4 border-b border-gray-300'>
                        <h2 className='text-blue-600 text-lg font-bold'>Earnings Overview</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer' />
                    </div>
                    <div className='p-4'>
                        <LineChart width={600} height={300} data={datas}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type='monotone' dataKey='pv' stroke='#8884d8' activeDot={{ r: 8 }} />
                            <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
                        </LineChart>
                    </div>
                </div>
                <div className='flex-1 border bg-white shadow-md rounded-lg'>
                    <div className='bg-gray-100 flex items-center justify-between py-3 px-4 border-b border-gray-300'>
                        <h2 className='text-blue-600 text-lg font-bold'>Revenue Resources</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer' />
                    </div>
                    <div className='p-4'>
                        <PieComponent />
                    </div>
                </div>
            </div>
            <div className='flex mt-4 md:space-x-4'>
                <div className='flex-1 border bg-white shadow-md rounded-lg'>
                    <div className='bg-gray-100 flex items-center justify-between py-3 px-4 border-b border-gray-300'>
                        <h2 className='text-blue-600 text-lg font-bold'>Projects Overview</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer' />
                    </div>
                    <div className='p-4 space-y-4'>
                        <div>
                            <h2>Server Migration</h2>
                            <Progress percent={30} strokeColor='#E74A3B' />
                        </div>
                        <div>
                            <h2>Sales Tracking</h2>
                            <Progress percent={50} status='active' strokeColor='#F6C23E' />
                        </div>
                        <div>
                            <h2>Customer Database</h2>
                            <Progress percent={70} status='active' strokeColor='#4E73DF' />
                        </div>
                        <div>
                            <h2>Payout Details</h2>
                            <Progress percent={100} strokeColor='#36B9CC' />
                        </div>
                        <div>
                            <h2>Account Setup</h2>
                            <Progress percent={50} status='exception' strokeColor='#1CC88A' />
                        </div>
                    </div>
                </div>
                <div className='flex-1 border bg-white shadow-md rounded-lg'>
                    <div className='bg-gray-100 flex items-center justify-between py-3 px-4 border-b border-gray-300'>
                        <h2 className='text-blue-600 text-lg font-bold'>Resources</h2>
                        <FaEllipsisV color='gray' className='cursor-pointer' />
                    </div>
                    <div className='flex items-center justify-center h-64'>
                        <div>
                            <img src={error} alt='' className='transform scale-150' />
                            <p className='mt-4 text-sm font-semibold text-gray-500'>No data available</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
