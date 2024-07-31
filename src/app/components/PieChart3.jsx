import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const PieChart3 = () => {
  const data = [
    { name: 'Founders', value: 61, color: '#82ca9d' },
    { name: 'Employee Pool', value: 13, color: '#a4de6c' },
    { name: 'Investors', value: 25, color: '#d0ed57' },
    { name: 'Customers', value: 1, color: '#ffc658' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Captable in Percent</h2>
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
            label={({ name, value }) => `${value}%`}
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
            formatter={(value) => (
              <span>{value}</span>
            )}
          />
        </PieChart>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-4xl font-bold">100%</h3>
        <p className="text-gray-500">TOTAL</p>
      </div>
    </div>
  );
};

export default PieChart3;
