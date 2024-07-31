import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

const DonutChart = () => {
  const data = [
    { name: 'bug', value: 18.61, color: '#FF6384', icon: '🐛' },
    { name: 'Low priority', value: 8.11, color: '#36A2EB' },
    { name: 'feature', value: 8.11, color: '#FFCE56', icon: '✨' },
    { name: 'Medium priority', value: 7.62, color: '#36A2EB' },
    { name: 'Improvement', value: 4.88, color: '#4BC0C0', icon: '🛠' },
    { name: 'Quick Wins', value: 4.55, color: '#FF9F40', icon: '⚡' },
    { name: 'help wanted', value: 3.94, color: '#9966FF', icon: '🙋‍♂️' },
    { name: 'High priority', value: 3.87, color: '#FF6384' },
    { name: 'Stale', value: 3.43, color: '#FF9F40' },
    { name: 'linear', value: 2.27, color: '#FF6384' },
    { name: 'bookings', value: 2.11, color: '#FF6384' },
    { name: 'good first issue', value: 2.00, color: '#4BC0C0', icon: '✅' },
    { name: 'ui', value: 1.85, color: '#FFCE56' },
    { name: 'app-store', value: 1.79, color: '#FF9F40' },
    { name: '3 more', value: 1.73, color: '#C9C9C9' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">GitHub: Total Issues per label</h2>
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
        <h3 className="text-4xl font-bold">14,377</h3>
        <p className="text-gray-500">TOTAL</p>
      </div>
    </div>
  );
};

export default DonutChart;