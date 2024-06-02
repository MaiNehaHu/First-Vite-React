import { useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const CustomBarChart = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const is500px = useMediaQuery("(min-width: 500px)")
  const colors = ['#a46bff', '#6ba9ff', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

  useEffect(() => {
    processChartData();
  }, []);

  const processChartData = () => {

    const protocolCounts = {};
    data.forEach((item) => {
      const { proto } = item;
      protocolCounts[proto] = protocolCounts[proto]
        ? protocolCounts[proto] + 1
        : 1;
    })

    const formattedData = Object.keys(protocolCounts).map((proto, index) => ({
      protocol: proto,
      count: protocolCounts[proto],
      color: colors[index % colors.length],
    }));

    setChartData(formattedData);
  };

  return (
    <div>
      <ResponsiveContainer className="p-2" width="100%" height={is500px ? 400 : 300}>
        <BarChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="protocol" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" name="Proto count">
            {
              chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))
            }
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <h1 className="text-center text-lg font-semibold bg-blue-600">Bar Graph</h1>
    </div>
  );
};

export default CustomBarChart;