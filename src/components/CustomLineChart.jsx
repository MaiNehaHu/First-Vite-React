import { useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomLineChart = ({ data }) => {
  const [chartData, setChartData] = useState([]);
  const is500px = useMediaQuery("(min-width: 500px)");

  useEffect(() => {
    processChartData();
  }, []);

  const processChartData = () => {
    // Assuming data is an array of event objects
    const formattedData = data.map((item) => ({
      dest_ip: item.dest_ip,
      dest_port: item.dest_port,
    }));

    setChartData(formattedData);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip bg-white rounded-lg p-4">
          <p className="text-black">{`Dest IP: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={`value-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <ResponsiveContainer className="p-2" width="100%" height={is500px ? 400 : 300}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dest_ip" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            type="monotone"
            dataKey="dest_port"
            name="Dest Port"
            stroke="#00aaff"
          />
        </LineChart>
      </ResponsiveContainer>
      <h1 className="text-center text-lg font-semibold bg-blue-600">Line Graph</h1>
    </div>
  );
};

export default CustomLineChart;
