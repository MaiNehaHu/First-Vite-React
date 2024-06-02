import React from "react";
import CustomBarChart from "../components/CustomBarChart";
import CustomPieChart from "../components/CustomPieChart";
import CustomLineChart from "../components/CustomLineChart";
import CustomAreaChart from "../components/CustomAreaChart";
import CustomScatter from "../components/CustomScatter";
import { useMediaQuery } from "@mui/material";

const Dashboard = ({ list }) => {
  const is500px = useMediaQuery("(min-width: 500px)")
  const listTemplateColumns = `repeat(auto-fill, minmax(${is500px ? 400 : 250}px, 1fr))`;
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: listTemplateColumns,
  };

  return (
    <React.Fragment>
      <nav className="py-4 px-10 bg-blue-600">
        <h1 className="text-2xl font-semibold">Wi Jungle</h1>
      </nav>
      
      {/* Check if list is an array and has items */}
      {Array.isArray(list) && list.length > 0 ? (
        <div className="Dashboard gap-10 py-4" style={containerStyle}>
          <CustomPieChart data={list} />
          <CustomBarChart data={list} />
          <CustomAreaChart data={list} />
          <CustomLineChart data={list} />
          <CustomScatter data={list} />
        </div>
      ) : (
        <p>No data available</p>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
