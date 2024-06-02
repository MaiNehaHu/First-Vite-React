import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";

const CustomPieChart = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const is500px = useMediaQuery("(min-width: 500px)")
  const is400px = useMediaQuery("(min-width: 400px)")
  const colors = [
    "#ff3838",
    "#fa8c25",
    "#faec25",
    "#82ca9d",
    "#a4de6c",
    "#d0ed57",
    "#ffc658",
  ];

  useEffect(() => {
    processChartData();
  }, []);

  const processChartData = () => {
    const alertCounts = {};

    data.forEach((item) => {
      const { alert } = item;
      if (alert) {
        const { category } = alert;
        if (category) {
          alertCounts[category] = alertCounts[category]
            ? alertCounts[category] + 1
            : 1;
        }
      }
    });

    const formattedData = Object.keys(alertCounts).map((category, index) => ({
      name: category,
      value: alertCounts[category],
      color: colors[index % colors.length],
    }));

    setChartData(formattedData);
  };

  return (
    <div>
      <ResponsiveContainer className="p-2" width="100%" height={is500px ? 400 : 300}>
        <PieChart >
          <Pie
            dataKey="value"
            data={chartData}
            cx="50%"
            cy="50%"
            outerRadius={is500px ? 100 : is400px ? 80 : 60}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

      </ResponsiveContainer>
      <h1 className="text-center text-lg font-semibold bg-blue-600">Pie Chart</h1>
    </div>
  );
};

export default CustomPieChart;
