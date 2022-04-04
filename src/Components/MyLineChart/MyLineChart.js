import React from 'react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data=[
        {
            "name": "pinki",
            "price": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "name": "Rinki",
            "price": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "name": "mita",
            "price": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "name": "sita",
            "price": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "name": "gita",
            "price": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "name": "rita",
            "price": 700000,
            "sell": 670,
            "revenue": 61000
        }
          

    ]
      
    return (
          
        <LineChart width={400} height={500} data={data}>
            <Line dataKey={'price'}></Line>
            
            <XAxis dataKey="name"></XAxis>
           
            <YAxis></YAxis>

        </LineChart>
        
         
    );
};

export default MyLineChart;