import React from 'react';
import MyLineChart from '../MyLineChart/MyLineChart';
import MyPie from '../MyLineChart/MyPie';


const DashBoard = () => {
    return (
        <div className='dash-board'>
            
            <MyLineChart>

            </MyLineChart>
            <MyPie></MyPie>
            
        </div>
    );
};

export default DashBoard;