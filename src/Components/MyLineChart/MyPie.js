import React from 'react';
import { Pie, PieChart } from 'recharts';

const MyPie = () => {
    const data01 = [
        { name: 'rina', salary: 400 },
        { name: 'mina', salary: 300 },
        { name: 'dona', salary: 300 },
        { name: 'sana', salary: 200 },
      ];
      const data02 = [
        { name: 'Ram',salary: 100 },
        { name: 'Sam', salary: 300 },
        { name: 'Jodu', salary: 100 },
        { name: 'Madu', salary: 80 },
        { name: 'Mathu', salary: 40 },
        { name: 'Sina', salary: 30 },
        { name: 'Ritu', salary: 50 },
        { name: 'Koel', salary: 100 },
        { name: 'Parna',salary: 200 },
        { name: 'Moina', salary: 150 },
        { name: 'Jinia', salary: 50 },
      ];
      
      
      
        
          return (
            
              <PieChart width={400} height={400}>
                <Pie data={data01} dataKey="salary" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" ></Pie>
                <Pie data={data02} dataKey="salary" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label ></Pie>
              </PieChart>
           
          );
        
      
};

export default MyPie;