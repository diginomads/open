import React from 'react';

interface TotalBookingsCardProps {
    totalBookings: number;
    year: number;
    changePercentage: number;
    previousYear: number;
}

const TotalBookingsCard: React.FC<TotalBookingsCardProps> = ({ totalBookings, year, changePercentage, previousYear }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semi-bold text-left text-gray-500">Total Bookings</h3>
            <p className="text-5xl font-bold text-gray-800 mt-4">{totalBookings.toLocaleString()}</p>
            <p className="text-xl text-gray-500">{year}</p>
            <div className="flex justify-center items-center mt-2 text-green-500">
                <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V12h2.5a.5.5 0 010 1H9.5a.5.5 0 01-.5-.5v-4.5a.5.5 0 011 0v3.414l4.293-4.293a1 1 0 011.414 1.414L11 11.586z" clipRule="evenodd" />
                </svg>
                <span className="text-lg font-semibold">{changePercentage}%</span>
            </div>
            <p className="text-sm text-gray-500">vs. previous year: {previousYear.toLocaleString()}</p>
        </div>
    );
};

export default TotalBookingsCard;
