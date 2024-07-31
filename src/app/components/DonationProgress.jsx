import React from 'react';

const DonationProgress = ({ currentAmount, goalAmount }) => {
  const percentage = (currentAmount / goalAmount) * 100;

  return (
    <div className="bg-white p-4 rounded-sm shadow-lg">
      <h3 className="text-gray-600 mb-2">Open Source Donations</h3>
      <div className="relative h-12 bg-green-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-green-500"
          style={{ width: `${percentage}%` }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-2 text-gray-700">
          <span className="text-sm">0</span>
          <span className="text-sm font-bold">${currentAmount.toFixed(2)}</span>
          <span className="text-sm">Goal ${goalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default DonationProgress;