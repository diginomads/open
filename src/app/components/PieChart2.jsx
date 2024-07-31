import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const DonutChart = () => {
  const data = [
    { name: 'en', value: 88.539, color: '#0088FE' },
    { name: 'fr', value: 3.132, color: '#00C49F' },
    { name: 'de', value: 1.883, color: '#FFBB28' },
    { name: 'pt-BR', value: 1.551, color: '#FF8042' },
    { name: 'es', value: 1.503, color: '#A28CFE' },
    { name: 'it', value: 0.589, color: '#C49F00' },
    { name: 'Other', value: 2.803, color: '#C9C9C9' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Languages of Users</h2>
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
              <span>{value} ({entry.payload.value}%)</span>
            )}
          />
        </PieChart>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-4xl font-bold">145,111</h3>
        <p className="text-gray-500">TOTAL</p>
      </div>
    </div>
  );
};

export default DonutChart;
