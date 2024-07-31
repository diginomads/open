import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const DonutChart = () => {
  const data = [
    { name: 'Europe/London', value: 51.673, color: '#0088FE' },
    { name: 'Asia/Calcutta', value: 4.691, color: '#00C49F' },
    { name: 'America/New_York', value: 4.681, color: '#FFBB28' },
    { name: 'America/Los_Angeles', value: 3.965, color: '#FF8042' },
    { name: 'America/Chicago', value: 2.447, color: '#A28CFE' },
    { name: 'Europe/Paris', value: 2.433, color: '#C49F00' },
    { name: 'Europe/Berlin', value: 1.984, color: '#8042FF' },
    { name: 'America/Sao_Paulo', value: 1.834, color: '#FE9F40' },
    { name: 'Europe/Amsterdam', value: 1.803, color: '#8CFFB5' },
    { name: 'Asia/Kolkata', value: 1.287, color: '#FF99C5' },
    { name: 'America/Detroit', value: 1.246, color: '#FFC400' },
    { name: 'Europe/Brussels', value: 1.081, color: '#00A49F' },
    { name: 'America/Toronto', value: 0.966, color: '#C49FFF' },
    { name: 'Europe/Madrid', value: 0.852, color: '#FF99C5' },
    { name: '5 more', value: 15.047, color: '#C9C9C9' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Timezones of Users</h2>
      <div className="flex justify-center">
        <PieChart width={600} height={400}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="30%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            iconType="circle"
            iconSize={8}
            formatter={(value, entry) => (
              <span>
                {entry.icon} {value} ({entry.payload.value}%)
              </span>
            )}
          />
        </PieChart>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-4xl font-bold">439,932</h3>
        <p className="text-gray-500">TOTAL</p>
      </div>
    </div>
  );
};

export default DonutChart;
