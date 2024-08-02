'use client';

import React, { useState } from 'react';

const tabs = ['Public', 'Investors', 'Team Members'];

const TabNavigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Public');

  return (
    <div className="bg-white">
      <nav className="flex space-x-4 pl-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-5 pb-6 pl-2 text-sm font-bold ${activeTab === tab ? 'text-gray-600 border-b-2 border-gray-500' : 'text-gray-600 hover:text-gray-900'
              }`}
            style={{ fontFamily: '"Arial", sans-serif' }}
          >
            {tab}
          </button>
        ))}
      </nav>
      <div className="pl-14 py-6">
        <h1 className="text-xl font-semibold text-gray-700">Cal.com, Inc.</h1>
      </div>
    </div>


  );
};

export default TabNavigation;
