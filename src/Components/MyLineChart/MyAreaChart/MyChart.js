import React from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const MyChart = () => {
    const data = [
        {
          name: 'Chinki',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Pinki',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Payal',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Ankita',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Sulata',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Rini',
          uv: 245,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Urmi',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      
    return (
        <AreaChart  width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}>
            <CartesianGrid strokeDasharray="3 3" >
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" ></Area>

            </CartesianGrid>
        </AreaChart>
    );
};

export default MyChart;