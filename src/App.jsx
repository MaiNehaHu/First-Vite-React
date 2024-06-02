import React, { useEffect, useState } from "react";
import "./App.css";
import list from "./data/eve.json";
import Dashboard from "./pages/Dashboard";

function App() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(list);
  }, []);

  return (
    <Dashboard list={chartData} />
  );
}

export default App;
