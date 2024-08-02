"use client";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset } from '../dataset/weather';
import BarCharts from './BarCharts';
import {
  Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Legend,
} from 'recharts';
import TotalBookingsCard from './TotalBookingsCard';
import DonutChart from './DonutChart';
import DonationProgress from './DonationProgress';
import PieChart from './PieChart';
import PieChart2 from './PieChart2';
import PieChart3 from './PieChart3';

type TickParamsSelectorProps = {
  tickPlacement: 'end' | 'start' | 'middle' | 'extremities';
  tickLabelPlacement: 'tick' | 'middle';
  setTickPlacement: React.Dispatch<
    React.SetStateAction<'end' | 'start' | 'middle' | 'extremities'>
  >;
  setTickLabelPlacement: React.Dispatch<React.SetStateAction<'tick' | 'middle'>>;
};

function TickParamsSelector({
  tickPlacement,
  tickLabelPlacement,
  setTickPlacement,
  setTickLabelPlacement,
}: TickParamsSelectorProps) {
  return (
    <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
      <FormControl>
        <FormLabel id="tick-placement-radio-buttons-group-label">
          tickPlacement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="tick-placement-radio-buttons-group-label"
          name="tick-placement"
          value={tickPlacement}
          onChange={(event) =>
            setTickPlacement(
              event.target.value as 'start' | 'end' | 'middle' | 'extremities',
            )
          }
        >
          <FormControlLabel value="start" control={<Radio />} label="start" />
          <FormControlLabel value="end" control={<Radio />} label="end" />
          <FormControlLabel value="middle" control={<Radio />} label="middle" />
          <FormControlLabel
            value="extremities"
            control={<Radio />}
            label="extremities"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="label-placement-radio-buttons-group-label">
          tickLabelPlacement
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="label-placement-radio-buttons-group-label"
          name="label-placement"
          value={tickLabelPlacement}
          onChange={(event) =>
            setTickLabelPlacement(event.target.value as 'tick' | 'middle')
          }
        >
          <FormControlLabel value="tick" control={<Radio />} label="tick" />
          <FormControlLabel value="middle" control={<Radio />} label="middle" />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
}

const valueFormatter = (value: number | null) => `${value}mm`;

const chartSetting = {
  yAxis: [
    {
      label: 'Count',
      scaleType: 'linear', // Set the scale type, default is 'linear'
      domain: [0, 50000], // Define the range of the axis
      //   tickFormat: (value: { toLocaleString: () => any; }) => `${value.toLocaleString()}`, // Format the ticks
      ticks: 20,
    },
  ],
  series: [{ dataKey: 'seoul', label: 'Monthly Bookings', valueFormatter }],
  height: 600,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};
const data1 = [
  { "name": "January 2022", "CreatedAt": 0 },
  { "name": "February 2022", "CreatedAt": 3000 },
  { "name": "March 2022", "CreatedAt": 6000 },
  { "name": "April 2022", "CreatedAt": 9000 },
  { "name": "May 2022", "CreatedAt": 12000 },
  { "name": "June 2022", "CreatedAt": 15000 },
  { "name": "July 2022", "CreatedAt": 18000 },
  { "name": "August 2022", "CreatedAt": 22000 },
  { "name": "September 2022", "CreatedAt": 26000 },
  { "name": "October 2022", "CreatedAt": 30000 },
  { "name": "November 2022", "CreatedAt": 34000 },
  { "name": "December 2022", "CreatedAt": 38000 },
  { "name": "January 2023", "CreatedAt": 42000 },
  { "name": "February 2023", "CreatedAt": 46000 },
  { "name": "March 2023", "CreatedAt": 50000 },
  { "name": "April 2023", "CreatedAt": 55000 },
  { "name": "May 2023", "CreatedAt": 60000 },
  { "name": "June 2023", "CreatedAt": 65000 },
  { "name": "July 2023", "CreatedAt": 70000 },
  { "name": "August 2023", "CreatedAt": 75000 },
  { "name": "September 2023", "CreatedAt": 80000 },
  { "name": "October 2023", "CreatedAt": 90000 },
  { "name": "November 2023", "CreatedAt": 100000 },
  { "name": "December 2023", "CreatedAt": 120000 },
  { "name": "January 2024", "CreatedAt": 140000 },
  { "name": "February 2024", "CreatedAt": 160000 },
  { "name": "March 2024", "CreatedAt": 180000 },
  { "name": "April 2024", "CreatedAt": 200000 },
  { "name": "May 2024", "CreatedAt": 210000 },
  { "name": "June 2024", "CreatedAt": 220000 }
];


const data2 = [
  { "name": "January 2022", "Month": 1000 },
  { "name": "February 2022", "Month": 1200 },
  { "name": "March 2022", "Month": 1400 },
  { "name": "April 2022", "Month": 1600 },
  { "name": "May 2022", "Month": 1800 },
  { "name": "June 2022", "Month": 2000 },
  { "name": "July 2022", "Month": 2300 },
  { "name": "August 2022", "Month": 2600 },
  { "name": "September 2022", "Month": 3000 },
  { "name": "October 2022", "Month": 3500 },
  { "name": "November 2022", "Month": 4000 },
  { "name": "December 2022", "Month": 4500 },
  { "name": "January 2023", "Month": 5000 },
  { "name": "February 2023", "Month": 5500 },
  { "name": "March 2023", "Month": 6000 },
  { "name": "April 2023", "Month": 7000 },
  { "name": "May 2023", "Month": 8000 },
  { "name": "June 2023", "Month": 9000 },
  { "name": "July 2023", "Month": 10000 },
  { "name": "August 2023", "Month": 11000 },
  { "name": "September 2023", "Month": 12000 },
  { "name": "October 2023", "Month": 14000 },
  { "name": "November 2023", "Month": 16000 },
  { "name": "December 2023", "Month": 18000 },
  { "name": "January 2024", "Month": 20000 },
  { "name": "February 2024", "Month": 22000 },
  { "name": "March 2024", "Month": 24000 },
  { "name": "April 2024", "Month": 26000 },
  { "name": "May 2024", "Month": 28000 },
  { "name": "June 2024", "Month": 30000 },
  { "name": "July 2024", "Month": 32000 }
];

const data3 = [
  { "name": "January 2022", "BookingId → CreatedAt": 10000 },
  { "name": "February 2022", "BookingId → CreatedAt": 12000 },
  { "name": "March 2022", "BookingId → CreatedAt": 14000 },
  { "name": "April 2022", "BookingId → CreatedAt": 16000 },
  { "name": "May 2022", "BookingId → CreatedAt": 18000 },
  { "name": "June 2022", "BookingId → CreatedAt": 20000 },
  { "name": "July 2022", "BookingId → CreatedAt": 23000 },
  { "name": "August 2022", "BookingId → CreatedAt": 26000 },
  { "name": "September 2022", "BookingId → CreatedAt": 30000 },
  { "name": "October 2022", "BookingId → CreatedAt": 35000 },
  { "name": "November 2022", "BookingId → CreatedAt": 40000 },
  { "name": "December 2022", "BookingId → CreatedAt": 45000 },
  { "name": "January 2023", "BookingId → CreatedAt": 50000 },
  { "name": "February 2023", "BookingId → CreatedAt": 55000 },
  { "name": "March 2023", "BookingId → CreatedAt": 60000 },
  { "name": "April 2023", "BookingId → CreatedAt": 70000 },
  { "name": "May 2023", "BookingId → CreatedAt": 80000 },
  { "name": "June 2023", "BookingId → CreatedAt": 90000 },
  { "name": "July 2023", "BookingId → CreatedAt": 100000 },
  { "name": "August 2023", "BookingId → CreatedAt": 110000 },
  { "name": "September 2023", "BookingId → CreatedAt": 120000 },
  { "name": "October 2023", "BookingId → CreatedAt": 140000 },
  { "name": "November 2023", "BookingId → CreatedAt": 160000 },
  { "name": "December 2023", "BookingId → CreatedAt": 180000 },
  { "name": "January 2024", "BookingId → CreatedAt": 200000 },
  { "name": "February 2024", "BookingId → CreatedAt": 220000 },
  { "name": "March 2024", "BookingId → CreatedAt": 240000 },
  { "name": "April 2024", "BookingId → CreatedAt": 260000 },
  { "name": "May 2024", "BookingId → CreatedAt": 280000 },
  { "name": "June 2024", "BookingId → CreatedAt": 300000 },
  { "name": "July 2024", "BookingId → CreatedAt": 320000 }
];

const data4 = [
  { "name": "January 2022", "Created": 100 },
  { "name": "February 2022", "Created": 150 },
  { "name": "March 2022", "Created": 200 },
  { "name": "April 2022", "Created": 250 },
  { "name": "May 2022", "Created": 300 },
  { "name": "June 2022", "Created": 350 },
  { "name": "July 2022", "Created": 400 },
  { "name": "August 2022", "Created": 450 },
  { "name": "September 2022", "Created": 500 },
  { "name": "October 2022", "Created": 550 },
  { "name": "November 2022", "Created": 600 },
  { "name": "December 2022", "Created": 650 },
  { "name": "January 2023", "Created": 700 },
  { "name": "February 2023", "Created": 750 },
  { "name": "March 2023", "Created": 800 },
  { "name": "April 2023", "Created": 850 },
  { "name": "May 2023", "Created": 900 },
  { "name": "June 2023", "Created": 950 },
  { "name": "July 2023", "Created": 1000 },
  { "name": "August 2023", "Created": 1050 },
  { "name": "September 2023", "Created": 1100 },
  { "name": "October 2023", "Created": 1150 },
  { "name": "November 2023", "Created": 1200 },
  { "name": "December 2023", "Created": 1250 },
  { "name": "January 2024", "Created": 1300 },
  { "name": "February 2024", "Created": 1350 },
  { "name": "March 2024", "Created": 1400 },
  { "name": "April 2024", "Created": 1450 },
  { "name": "May 2024", "Created": 1500 },
  { "name": "June 2024", "Created": 1550 },
  { "name": "July 2024", "Created": 1600 }
];

const data5 = [
  { "name": "January 2022", "Starred At": 3300 },
  { "name": "February 2022", "Starred At": 1300 },
  { "name": "March 2022", "Starred At": 1100 },
  { "name": "April 2022", "Starred At": 900 },
  { "name": "May 2022", "Starred At": 800 },
  { "name": "June 2022", "Starred At": 700 },
  { "name": "July 2022", "Starred At": 600 },
  { "name": "August 2022", "Starred At": 500 },
  { "name": "September 2022", "Starred At": 400 },
  { "name": "October 2022", "Starred At": 1600 },
  { "name": "November 2022", "Starred At": 1200 },
  { "name": "December 2022", "Starred At": 1000 },
  { "name": "January 2023", "Starred At": 2000 },
  { "name": "February 2023", "Starred At": 1500 },
  { "name": "March 2023", "Starred At": 1100 },
  { "name": "April 2023", "Starred At": 900 },
  { "name": "May 2023", "Starred At": 1000 },
  { "name": "June 2023", "Starred At": 800 },
  { "name": "July 2023", "Starred At": 700 },
  { "name": "August 2023", "Starred At": 1200 },
  { "name": "September 2023", "Starred At": 1100 },
  { "name": "October 2023", "Starred At": 2500 },
  { "name": "November 2023", "Starred At": 1800 },
  { "name": "December 2023", "Starred At": 1500 },
  { "name": "January 2024", "Starred At": 2000 }
];

const data6 = [
  { "name": "January 2022", "Starred At": 1000 },
  { "name": "February 2022", "Starred At": 1300 },
  { "name": "March 2022", "Starred At": 1600 },
  { "name": "April 2022", "Starred At": 2100 },
  { "name": "May 2022", "Starred At": 2500 },
  { "name": "June 2022", "Starred At": 3000 },
  { "name": "July 2022", "Starred At": 3400 },
  { "name": "August 2022", "Starred At": 3800 },
  { "name": "September 2022", "Starred At": 4200 },
  { "name": "October 2022", "Starred At": 4800 },
  { "name": "November 2022", "Starred At": 5400 },
  { "name": "December 2022", "Starred At": 5900 },
  { "name": "January 2023", "Starred At": 6400 },
  { "name": "February 2023", "Starred At": 6900 },
  { "name": "March 2023", "Starred At": 7400 },
  { "name": "April 2023", "Starred At": 7900 },
  { "name": "May 2023", "Starred At": 8500 },
  { "name": "June 2023", "Starred At": 9000 },
  { "name": "July 2023", "Starred At": 9500 },
  { "name": "August 2023", "Starred At": 10000 },
  { "name": "September 2023", "Starred At": 10600 },
  { "name": "October 2023", "Starred At": 11200 },
  { "name": "November 2023", "Starred At": 11800 },
  { "name": "December 2023", "Starred At": 12500 },
  { "name": "January 2024", "Starred At": 13200 },
];

const data7 = [
  { name: "January 2022", closed: 1, open: 0 },
  { name: "January 2022", closed: 136, open: 136 - 1 },
  { name: "January 2022", closed: 258, open: 258 - 136 },
  { name: "January 2022", closed: 489, open: 489 - 258 },
  { name: "January 2022", closed: 838, open: 838 - 489 },
  { name: "January 2023", closed: 1417, open: 1417 - 838 },
  { name: "January 2023", closed: 2272, open: 2272 - 1417 },
  { name: "January 2023", closed: 3270, open: 3270 - 2272 },
  { name: "January 2023", closed: 4203, open: 4203 - 3270 },
  { name: "January 2024", closed: 4952, open: 4952 - 4203 },
  { name: "January 2024", closed: 5539, open: 5539 - 4952 },
  { name: "January 2024", closed: 6163, open: 6163 - 5539 },
];

const data8 = [
  { "name": "January 2022", "Merged At": 10 },
  { "name": "February 2022", "Merged At": 20 },
  { "name": "March 2022", "Merged At": 30 },
  { "name": "April 2022", "Merged At": 40 },
  { "name": "May 2022", "Merged At": 50 },
  { "name": "June 2022", "Merged At": 60 },
  { "name": "July 2022", "Merged At": 45 },
  { "name": "August 2022", "Merged At": 50 },
  { "name": "September 2022", "Merged At": 55 },
  { "name": "October 2022", "Merged At": 60 },
  { "name": "November 2022", "Merged At": 65 },
  { "name": "December 2022", "Merged At": 70 },
  { "name": "January 2023", "Merged At": 75 },
  { "name": "February 2023", "Merged At": 80 },
  { "name": "March 2023", "Merged At": 70 },
  { "name": "April 2023", "Merged At": 75 },
  { "name": "May 2023", "Merged At": 80 },
  { "name": "June 2023", "Merged At": 60 },
  { "name": "July 2023", "Merged At": 65 },
  { "name": "August 2023", "Merged At": 70 },
  { "name": "September 2023", "Merged At": 60 },
  { "name": "October 2023", "Merged At": 55 },
  { "name": "November 2023", "Merged At": 60 },
  { "name": "December 2023", "Merged At": 70 },
  { "name": "January 2024", "Merged At": 65 },
  { "name": "February 2024", "Merged At": 55 },
  { "name": "March 2024", "Merged At": 60 },
  { "name": "April 2024", "Merged At": 75 },
  { "name": "May 2024", "Merged At": 80 },
  { "name": "June 2024", "Merged At": 85 },
  { "name": "July 2024", "Merged At": 90 },
];

const data9 = [
  { "name": "January 2022", "date": 5000 },
  { "name": "February 2022", "date": 10000 },
  { "name": "March 2022", "date": 15000 },
  { "name": "April 2022", "date": 20000 },
  { "name": "May 2022", "date": 25000 },
  { "name": "June 2022", "date": 30000 },
  { "name": "July 2022", "date": 35000 },
  { "name": "August 2022", "date": 40000 },
  { "name": "September 2022", "date": 45000 },
  { "name": "October 2022", "date": 50000 },
  { "name": "November 2022", "date": 55000 },
  { "name": "December 2022", "date": 60000 },
  { "name": "January 2023", "date": 65000 },
  { "name": "February 2023", "date": 70000 },
  { "name": "March 2023", "date": 75000 },
  { "name": "April 2023", "date": 80000 },
  { "name": "May 2023", "date": 85000 },
  { "name": "June 2023", "date": 90000 },
  { "name": "July 2023", "date": 95000 },
  { "name": "August 2023", "date": 100000 },
  { "name": "September 2023", "date": 105000 },
  { "name": "October 2023", "date": 110000 },
  { "name": "November 2023", "date": 115000 },
  { "name": "December 2023", "date": 120000 },
  { "name": "January 2024", "date": 125000 },
  { "name": "February 2024", "date": 130000 },
  { "name": "March 2024", "date": 135000 },
  { "name": "April 2024", "date": 140000 },
  { "name": "May 2024", "date": 145000 },
  { "name": "June 2024", "date": 150000 },
  { "name": "July 2024", "date": 155000 },
];

const data10 = [
  { name: "January 1, 2022", closed: 10, open: 0 },
  { name: "February 1, 2022", closed: 20, open: 0 },
  { name: "March 1, 2022", closed: 30, open: 0 },
  { name: "April 1, 2022", closed: 35, open: 0 },
  { name: "May 1, 2022", closed: 40, open: 0 },
  { name: "June 1, 2022", closed: 45, open: 0 },
  { name: "July 1, 2022", closed: 50, open: 0 },
  { name: "August 1, 2022", closed: 50, open: 0 },
  { name: "September 1, 2022", closed: 50, open: 0 },
  { name: "October 1, 2022", closed: 60, open: 0 },
  { name: "November 1, 2022", closed: 60, open: 0 },
  { name: "December 1, 2022", closed: 60, open: 0 },
  { name: "January 1, 2023", closed: 60, open: 0 },
  { name: "February 1, 2023", closed: 70, open: 0 },
  { name: "March 1, 2023", closed: 70, open: 0 },
  { name: "April 1, 2023", closed: 70, open: 0 },
  { name: "May 1, 2023", closed: 80, open: 0 },
  { name: "June 1, 2023", closed: 80, open: 0 },
  { name: "July 1, 2023", closed: 80, open: 0 },
  { name: "August 1, 2023", closed: 80, open: 0 },
  { name: "September 1, 2023", closed: 80, open: 0 },
  { name: "October 1, 2023", closed: 90, open: 0 },
  { name: "November 1, 2023", closed: 90, open: 0 },
  { name: "December 1, 2023", closed: 90, open: 0 },
  { name: "January 1, 2024", closed: 90, open: 0 },
];

const data11 = [
  { name: "July 2021", funding: 0 },
  { name: "October 2021", funding: 7400000 }, // $7.4M
  { name: "January 2022", funding: 32400000 }, // $32.4M
];

const data12 = [
  {
    "Timestamp": "January 2023",
    "Does Your Work Align with Company Goals?": 8.7,
    "Do You Feel Trusted to Do Your Job?": 8.8,
    "Do You Feel Recognized for Your Contributions?": 8.7,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.5,
    "How Would You Characterize Your Workload?": 8.7,
    "How Effectively Do You Communicate with Your Team?": 8.6,
    "Does Your Work Environment Support Your Well-Being?": 8.5,
    "How Do You Rate the Leadership in Your Department?": 8.7,
    "How Secure Do You Feel in Your Job?": 8.6
  },
  {
    "Timestamp": "February 2023",
    "Does Your Work Align with Company Goals?": 8.8,
    "Do You Feel Trusted to Do Your Job?": 8.7,
    "Do You Feel Recognized for Your Contributions?": 8.6,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.6,
    "How Would You Characterize Your Workload?": 8.8,
    "How Effectively Do You Communicate with Your Team?": 8.5,
    "Does Your Work Environment Support Your Well-Being?": 8.6,
    "How Do You Rate the Leadership in Your Department?": 8.7,
    "How Secure Do You Feel in Your Job?": 8.6
  },
  {
    "Timestamp": "March 2023",
    "Does Your Work Align with Company Goals?": 8.9,
    "Do You Feel Trusted to Do Your Job?": 8.6,
    "Do You Feel Recognized for Your Contributions?": 8.8,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.7,
    "How Would You Characterize Your Workload?": 8.9,
    "How Effectively Do You Communicate with Your Team?": 8.7,
    "Does Your Work Environment Support Your Well-Being?": 8.6,
    "How Do You Rate the Leadership in Your Department?": 8.8,
    "How Secure Do You Feel in Your Job?": 8.7
  },
  {
    "Timestamp": "April 2023",
    "Does Your Work Align with Company Goals?": 8.8,
    "Do You Feel Trusted to Do Your Job?": 8.9,
    "Do You Feel Recognized for Your Contributions?": 8.7,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.8,
    "How Would You Characterize Your Workload?": 8.6,
    "How Effectively Do You Communicate with Your Team?": 8.9,
    "Does Your Work Environment Support Your Well-Being?": 8.7,
    "How Do You Rate the Leadership in Your Department?": 8.9,
    "How Secure Do You Feel in Your Job?": 8.8
  },
  {
    "Timestamp": "May 2023",
    "Does Your Work Align with Company Goals?": 8.7,
    "Do You Feel Trusted to Do Your Job?": 8.8,
    "Do You Feel Recognized for Your Contributions?": 8.9,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.7,
    "How Would You Characterize Your Workload?": 8.6,
    "How Effectively Do You Communicate with Your Team?": 8.7,
    "Does Your Work Environment Support Your Well-Being?": 8.8,
    "How Do You Rate the Leadership in Your Department?": 8.8,
    "How Secure Do You Feel in Your Job?": 8.9
  },
  {
    "Timestamp": "June 2023",
    "Does Your Work Align with Company Goals?": 8.9,
    "Do You Feel Trusted to Do Your Job?": 8.7,
    "Do You Feel Recognized for Your Contributions?": 8.6,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.7,
    "How Would You Characterize Your Workload?": 8.8,
    "How Effectively Do You Communicate with Your Team?": 8.7,
    "Does Your Work Environment Support Your Well-Being?": 8.9,
    "How Do You Rate the Leadership in Your Department?": 8.8,
    "How Secure Do You Feel in Your Job?": 8.8
  },
  {
    "Timestamp": "July 2023",
    "Does Your Work Align with Company Goals?": 8.8,
    "Do You Feel Trusted to Do Your Job?": 8.9,
    "Do You Feel Recognized for Your Contributions?": 8.7,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.6,
    "How Would You Characterize Your Workload?": 8.7,
    "How Effectively Do You Communicate with Your Team?": 8.8,
    "Does Your Work Environment Support Your Well-Being?": 8.7,
    "How Do You Rate the Leadership in Your Department?": 8.9,
    "How Secure Do You Feel in Your Job?": 8.7
  },
  {
    "Timestamp": "August 2023",
    "Does Your Work Align with Company Goals?": 8.9,
    "Do You Feel Trusted to Do Your Job?": 8.7,
    "Do You Feel Recognized for Your Contributions?": 8.8,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.8,
    "How Would You Characterize Your Workload?": 8.6,
    "How Effectively Do You Communicate with Your Team?": 8.9,
    "Does Your Work Environment Support Your Well-Being?": 8.7,
    "How Do You Rate the Leadership in Your Department?": 8.8,
    "How Secure Do You Feel in Your Job?": 8.9
  },
  {
    "Timestamp": "September 2023",
    "Does Your Work Align with Company Goals?": 8.8,
    "Do You Feel Trusted to Do Your Job?": 8.9,
    "Do You Feel Recognized for Your Contributions?": 8.6,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.7,
    "How Would You Characterize Your Workload?": 8.8,
    "How Effectively Do You Communicate with Your Team?": 8.7,
    "Does Your Work Environment Support Your Well-Being?": 8.9,
    "How Do You Rate the Leadership in Your Department?": 8.8,
    "How Secure Do You Feel in Your Job?": 8.7
  },
  {
    "Timestamp": "October 2023",
    "Does Your Work Align with Company Goals?": 8.7,
    "Do You Feel Trusted to Do Your Job?": 8.8,
    "Do You Feel Recognized for Your Contributions?": 8.7,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.6,
    "How Would You Characterize Your Workload?": 8.7,
    "How Effectively Do You Communicate with Your Team?": 8.8,
    "Does Your Work Environment Support Your Well-Being?": 8.7,
    "How Do You Rate the Leadership in Your Department?": 8.9,
    "How Secure Do You Feel in Your Job?": 8.8
  },
  {
    "Timestamp": "November 2023",
    "Does Your Work Align with Company Goals?": 8.9,
    "Do You Feel Trusted to Do Your Job?": 8.7,
    "Do You Feel Recognized for Your Contributions?": 8.8,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.8,
    "How Would You Characterize Your Workload?": 8.6,
    "How Effectively Do You Communicate with Your Team?": 8.9,
    "Does Your Work Environment Support Your Well-Being?": 8.7,
    "How Do You Rate the Leadership in Your Department?": 8.8,
    "How Secure Do You Feel in Your Job?": 8.9
  },
  {
    "Timestamp": "December 2023",
    "Does Your Work Align with Company Goals?": 8.8,
    "Do You Feel Trusted to Do Your Job?": 8.9,
    "Do You Feel Recognized for Your Contributions?": 8.7,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.7,
    "How Would You Characterize Your Workload?": 8.8,
    "How Effectively Do You Communicate with Your Team?": 8.7,
    "Does Your Work Environment Support Your Well-Being?": 8.8,
    "How Do You Rate the Leadership in Your Department?": 8.9,
    "How Secure Do You Feel in Your Job?": 8.7
  },
  {
    "Timestamp": "January 2024",
    "Does Your Work Align with Company Goals?": 8.9,
    "Do You Feel Trusted to Do Your Job?": 8.7,
    "Do You Feel Recognized for Your Contributions?": 8.8,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.8,
    "How Would You Characterize Your Workload?": 8.6,
    "How Effectively Do You Communicate with Your Team?": 8.9,
    "Does Your Work Environment Support Your Well-Being?": 8.7,
    "How Do You Rate the Leadership in Your Department?": 8.8,
    "How Secure Do You Feel in Your Job?": 8.9
  },
  {
    "Timestamp": "February 2024",
    "Does Your Work Align with Company Goals?": 8.8,
    "Do You Feel Trusted to Do Your Job?": 8.9,
    "Do You Feel Recognized for Your Contributions?": 8.7,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.7,
    "How Would You Characterize Your Workload?": 8.8,
    "How Effectively Do You Communicate with Your Team?": 8.7,
    "Does Your Work Environment Support Your Well-Being?": 8.9,
    "How Do You Rate the Leadership in Your Department?": 8.8,
    "How Secure Do You Feel in Your Job?": 8.7
  },
  {
    "Timestamp": "March 2024",
    "Does Your Work Align with Company Goals?": 8.9,
    "Do You Feel Trusted to Do Your Job?": 8.7,
    "Do You Feel Recognized for Your Contributions?": 8.8,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.8,
    "How Would You Characterize Your Workload?": 8.6,
    "How Effectively Do You Communicate with Your Team?": 8.9,
    "Does Your Work Environment Support Your Well-Being?": 8.7,
    "How Do You Rate the Leadership in Your Department?": 8.8,
    "How Secure Do You Feel in Your Job?": 8.9
  },
  {
    "Timestamp": "April 2024",
    "Does Your Work Align with Company Goals?": 8.8,
    "Do You Feel Trusted to Do Your Job?": 8.9,
    "Do You Feel Recognized for Your Contributions?": 8.7,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.7,
    "How Would You Characterize Your Workload?": 8.8,
    "How Effectively Do You Communicate with Your Team?": 8.7,
    "Does Your Work Environment Support Your Well-Being?": 8.8,
    "How Do You Rate the Leadership in Your Department?": 8.9,
    "How Secure Do You Feel in Your Job?": 8.7
  },
  {
    "Timestamp": "May 2024",
    "Does Your Work Align with Company Goals?": 8.7,
    "Do You Feel Trusted to Do Your Job?": 8.8,
    "Do You Feel Recognized for Your Contributions?": 8.7,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.6,
    "How Would You Characterize Your Workload?": 8.7,
    "How Effectively Do You Communicate with Your Team?": 8.8,
    "Does Your Work Environment Support Your Well-Being?": 8.7,
    "How Do You Rate the Leadership in Your Department?": 8.9,
    "How Secure Do You Feel in Your Job?": 8.8
  },
  {
    "Timestamp": "June 2024",
    "Does Your Work Align with Company Goals?": 8.9,
    "Do You Feel Trusted to Do Your Job?": 8.7,
    "Do You Feel Recognized for Your Contributions?": 8.8,
    "Rate How Satisfied You Are with Your Work-Life Balance": 8.8,
    "How Would You Characterize Your Workload?": 8.6,
    "How Effectively Do You Communicate with Your Team?": 8.9,
    "Does Your Work Environment Support Your Well-Being?": 8.7,
    "How Do You Rate the Leadership in Your Department?": 8.8,
    "How Secure Do You Feel in Your Job?": 8.9
  }
]









export default function TickPlacementBars() {
  const [tickPlacement, setTickPlacement] = React.useState<
    'start' | 'end' | 'middle' | 'extremities'
  >('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState<
    'middle' | 'tick'
  >('middle');


  const totalBookings1 = 3153909;
  const year1 = 2024;
  const changePercentage1 = 156.37;
  const previousYear1 = 1229472;


  const totalBookings2 = 188710;
  const year2 = 2024;
  const changePercentage2 = 7.07;
  const previousYear2 = 176254;

  const totalBookings3 = 3102517;
  const year3 = 2024;
  const changePercentage3 = 10.46;
  const previousYear3 = 2808629;

  const totalBookings4 = 30196;
  const year4 = 2024;
  const changePercentage4 = 1.79;
  const previousYear4 = 29665;




  const currentAmount = 68939;
  const goalAmount = 100000;


  return (
    <div className="flex justify-center items-center py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-700 mb-8">Growth</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className=" font-semi-bold mb-2 text-gray-600">Monthly Bookings</h3>
            <BarCharts data={data1} dataKey="CreatedAt" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className=" font-semi-bold mb-2 text-gray-600">Monthly Active Users</h3>
            <BarCharts data={data2} dataKey="Month" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className=" font-semi-bold mb-2 text-gray-600">Monthly Attendees</h3>
            <BarCharts data={data3} dataKey="BookingId → CreatedAt" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className=" font-semi-bold mb-2 text-gray-600">Cal.com: Weekly New Customers</h3>
            <BarCharts data={data4} dataKey="Created" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className=" font-semi-bold mb-2 text-gray-600">GitHub: Monthly new stars</h3>
            <BarCharts data={data5} dataKey="Starred At" />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semi-bold mb-2 text-gray-600">GitHub: Total Stars (cumulative)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data6} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorStarred" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ffc658" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Starred At" stroke="#ffc658" fillOpacity={1} fill="url(#colorStarred)" />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-center text-gray-500 mt-2">Merged At</p>
          </div>




          <div>
            <h2 className="text-3xl font-semibold text-gray-700 mb-8 align-center">Output</h2>
            <DonutChart></DonutChart>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg mt-16">
            <h3 className="text-lg font-semibold mb-4">GitHub: Issues over time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data7} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorClosed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8BC34A" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8BC34A" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorOpen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4A90E2" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#4A90E2" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" align="right" iconType="circle" />
                <Area type="monotone" dataKey="closed" stroke="#8BC34A" fillOpacity={1} fill="url(#colorClosed)" />
                <Area type="monotone" dataKey="open" stroke="#4A90E2" fillOpacity={1} fill="url(#colorOpen)" />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-center text-gray-500 mt-2">closed / open issues</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mt-16">
            <h3 className=" font-semi-bold mb-2 text-gray-600">GitHub: Weekly Merged Pull Requests</h3>
            <BarCharts data={data8} dataKey="Merged At" />
          </div>



          <div>
            <h2 className="text-3xl font-semibold text-gray-700 mb-8">Miscellaneous</h2>
            <PieChart></PieChart>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mt-16">
            <h3 className=" font-semi-bold mb-2 text-gray-600">Google: Daily Search Impressions</h3>
            <BarCharts data={data9} dataKey="date" />
          </div>

          <div className="bg-white p-4 rounded-lg shadow-lg mt-16">
            <h3 className="text-lg font-semibold mb-4">Total Apps in App Store for Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data7} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorClosed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8BC34A" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8BC34A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" align="right" iconType="circle" />
                <Area type="monotone" dataKey="closed" stroke="#8BC34A" fillOpacity={1} fill="url(#colorClosed)" />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-center text-gray-500 mt-2">Created At</p>
          </div>

          <div>
            <PieChart2></PieChart2>

          </div>
          <div>
            <PieChart3></PieChart3>

          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Total Funding Raised</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data11} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <defs>
                  <linearGradient id="colorFunding" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8BC34A" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8BC34A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Area type="monotone" dataKey="funding" stroke="#8BC34A" fillOpacity={1} fill="url(#colorFunding)" />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-center text-gray-500 mt-2">Total Funding</p>
          </div>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          <TotalBookingsCard
            totalBookings={totalBookings1}
            year={year1}
            changePercentage={changePercentage1}
            previousYear={previousYear1}
          />
          <TotalBookingsCard
            totalBookings={totalBookings2}
            year={year2}
            changePercentage={changePercentage2}
            previousYear={previousYear2}
          />
          <TotalBookingsCard
            totalBookings={totalBookings3}
            year={year3}
            changePercentage={changePercentage3}
            previousYear={previousYear3}
          />
          <TotalBookingsCard
            totalBookings={totalBookings4}
            year={year4}
            changePercentage={changePercentage4}
            previousYear={previousYear4}
          />
        </div>

        <div className="container mx-auto p-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-8">Areas of Expertise: Core Contributors/Owners</h2>
          <div className="overflow-x-auto min-w-full border-collapse border border-gray-300">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-100 ">
                <tr>
                  <th className="border px-4 py-2 ">Area</th>
                  <th className="p-4 border border-gray-300 flex justify-center items-center"><img src="images/Table/Gold-Medal.jpg" alt="Gold Medal" className='w-5 h-5' /></th>
                  <th className="p-4 border border-gray-300  justify-center items-center"><img src="images/Table/Silver-Medal.jpg" alt="Gold Medal" className='w-5 h-5' /></th>
                  <th className="border px-4 py-2 text-left">Includes</th>
                  <th className="border px-4 py-2">Alex</th>
                  <th className="border px-4 py-2">Ali</th>
                  <th className="border px-4 py-2">Zomars</th>
                  <th className="border px-4 py-2">Joe</th>
                  <th className="border px-4 py-2">Hariom</th>
                  <th className="border px-4 py-2">Sean</th>
                  <th className="border px-4 py-2">Carina</th>
                  <th className="border px-4 py-2">Udit</th>
                  <th className="border px-4 py-2">Keith</th>
                  <th className="border px-4 py-2">Morgan</th>
                  <th className="border px-4 py-2">Lauris</th>
                  <th className="border px-4 py-2">Erik</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">API</td>
                  <td className="border px-4 py-2">Morgan</td>
                  <td className="border px-4 py-2">Zomars</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">App Store</td>
                  <td className="border px-4 py-2">Hariom</td>
                  <td className="border px-4 py-2 text-center">Erik</td>
                  <td className="border px-4 py-2 text-center">App Store CLI</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Authentication</td>
                  <td className="border px-4 py-2">Zomars</td>
                  <td className="border px-4 py-2 text-center">Alex</td>
                  <td className="border px-4 py-2 text-center">Session timeouts, SSO/SAML, Backend Signup, 2FA</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Automated Tests</td>
                  <td className="border px-4 py-2">Hariom</td>
                  <td className="border px-4 py-2">Keith</td>
                  <td className="border px-4 py-2 text-left">E2E, Integration, Unit</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Billing</td>
                  <td className="border px-4 py-2">Zomars</td>
                  <td className="border px-4 py-2">Morgan</td>
                  <td className="border px-4 py-2">Stripe, PayPal</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Bookings</td>
                  <td className="border px-4 py-2">Alex</td>
                  <td className="border px-4 py-2">Zomars</td>
                  <td className="border px-4 py-2">Availability, Timezones</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Cal.ai</td>
                  <td className="border px-4 py-2">Erik</td>
                  <td className="border px-4 py-2">Lauris</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Calendar Apps</td>
                  <td className="border px-4 py-2">Alex</td>
                  <td className="border px-4 py-2">Morgan</td>
                  <td className="border px-4 py-2">Google, Outlook, CalDAV</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Cal Video</td>
                  <td className="border px-4 py-2">Udit</td>
                  <td className="border px-4 py-2">Peer</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CI</td>
                  <td className="border px-4 py-2">Keith</td>
                  <td className="border px-4 py-2">Zomars</td>
                  <td className="border px-4 py-2">Turbo Repo, GitHub Actions, Logging</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Console</td>
                  <td className="border px-4 py-2">Zomars</td>
                  <td className="border px-4 py-2">Alex</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CRM Apps</td>
                  <td className="border px-4 py-2">Joe</td>
                  <td className="border px-4 py-2">Lauris</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Docs</td>
                  <td className="border px-4 py-2">Ali</td>
                  <td className="border px-4 py-2">Lauris</td>
                  <td className="border px-4 py-2">API docs</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Emails</td>
                  <td className="border px-4 py-2">Carina</td>
                  <td className="border px-4 py-2">Erik</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Embeds</td>
                  <td className="border px-4 py-2">Hariom</td>
                  <td className="border px-4 py-2">Sean</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Event Types</td>
                  <td className="border px-4 py-2">Joe</td>
                  <td className="border px-4 py-2">Ali</td>
                  <td className="border px-4 py-2">Managed event types, Recurring events</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Infra</td>
                  <td className="border px-4 py-2">Zomars</td>
                  <td className="border px-4 py-2">Alex</td>
                  <td className="border px-4 py-2">PGbouncer, EC2, RDS</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">i18n</td>
                  <td className="border px-4 py-2">Sean</td>
                  <td className="border px-4 py-2">Lauris</td>
                  <td className="border px-4 py-2">Performance of i18n, Crowdin, Toolings</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Impersonation</td>
                  <td className="border px-4 py-2">Sean</td>
                  <td className="border px-4 py-2">Lauris</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Insights</td>
                  <td className="border px-4 py-2">Erik</td>
                  <td className="border px-4 py-2">Carina</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Organizations</td>
                  <td className="border px-4 py-2">Hariom</td>
                  <td className="border px-4 py-2">Sean</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Performance</td>
                  <td className="border px-4 py-2">Keith</td>
                  <td className="border px-4 py-2">Morgan</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Routing Forms</td>
                  <td className="border px-4 py-2">Hariom</td>
                  <td className="border px-4 py-2">Carina</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Seats</td>
                  <td className="border px-4 py-2">Joe</td>
                  <td className="border px-4 py-2">Udit</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Teams</td>
                  <td className="border px-4 py-2">Hariom</td>
                  <td className="border px-4 py-2">Carina</td>
                  <td className="border px-4 py-2">Round Robin, Collective, Teams management</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">UI</td>
                  <td className="border px-4 py-2">Sean</td>
                  <td className="border px-4 py-2">Udit</td>
                  <td className="border px-4 py-2">Frontend signup, Storybook, components, visual work</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Webhooks</td>
                  <td className="border px-4 py-2">Ali</td>
                  <td className="border px-4 py-2">Carina</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Workflows</td>
                  <td className="border px-4 py-2">Carina</td>
                  <td className="border px-4 py-2">Udit</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Zapier</td>
                  <td className="border px-4 py-2">Carina</td>
                  <td className="border px-4 py-2">Udit</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">👀</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center">✅</td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                  <td className="border px-4 py-2 text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <DonationProgress currentAmount={currentAmount} goalAmount={goalAmount} />
        



      </div>
    </div >

  );

}