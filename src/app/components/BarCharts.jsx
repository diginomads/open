"use client";

import React from 'react';
import {
 BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
// const data = [
//     { "name": "January 2022", "bookings": 5000 },
//     { "name": "February 2022", "bookings": 7500 },
//     { "name": "March 2022", "bookings": 10000 },
//     { "name": "April 2022", "bookings": 12000 },
//     { "name": "May 2022", "bookings": 15000 },
//     { "name": "June 2022", "bookings": 18000 },
//     { "name": "July 2022", "bookings": 21000 },
//     { "name": "August 2022", "bookings": 25000 },
//     { "name": "September 2022", "bookings": 30000 },
//     { "name": "October 2022", "bookings": 35000 },
//     { "name": "November 2022", "bookings": 40000 },
//     { "name": "December 2022", "bookings": 45000 },
//     { "name": "January 2023", "bookings": 50000 },
//     { "name": "February 2023", "bookings": 55000 },
//     { "name": "March 2023", "bookings": 60000 },
//     { "name": "April 2023", "bookings": 65000 },
//     { "name": "May 2023", "bookings": 70000 },
//     { "name": "June 2023", "bookings": 75000 },
//     { "name": "July 2023", "bookings": 80000 },
//     { "name": "August 2023", "bookings": 85000 },
//     { "name": "September 2023", "bookings": 90000 },
//     { "name": "October 2023", "bookings": 95000 },
//     { "name": "November 2023", "bookings": 100000 },
//     { "name": "December 2023", "bookings": 110000 },
//     { "name": "January 2024", "bookings": 120000 },
//     { "name": "February 2024", "bookings": 130000 },
//     { "name": "March 2024", "bookings": 140000 },
//     { "name": "April 2024", "bookings": 150000 },
//     { "name": "May 2024", "bookings": 160000 },
//     { "name": "June 2024", "bookings": 170000 },
//     { "name": "July 2024", "bookings": 180000 }

//  // Add more data points as needed
// ];
const BarCharts = ({data, dataKey}) => {
 return (
<ResponsiveContainer width="100%" height={400}>
<BarChart
       width={500}
       height={300}
       data={data}
       margin={{
         top: 20, right: 30, left: 20, bottom: 5,
       }}
>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name"/>
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey={dataKey} fill="#8884d8" />
{/* <Bar dataKey="abcd" fill="#8884d8" /> */}
</BarChart>
</ResponsiveContainer>
 );
}
export default BarCharts;