import React from 'react';
import MyChart from '../MyLineChart/MyAreaChart/MyChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPie from '../MyLineChart/MyPie';


const DashBoard = () => {
    return (
        <div className='dash-board'>
            
            <MyLineChart>

            </MyLineChart>
            <MyPie></MyPie>
            <MyChart></MyChart>
            
        </div>
    );
};

export default DashBoard;