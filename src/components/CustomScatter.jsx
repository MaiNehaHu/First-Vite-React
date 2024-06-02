import { useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomScatterGraph = ({ data }) => {
    const [chartData, setChartData] = useState([]);
    const is500px = useMediaQuery("(min-width: 500px)")

    useEffect(() => {
        processChartData();
    }, []);

    const processChartData = () => {
        // Format data for scatter graph
        const formattedData = data.map((item, index) => ({
            src_ip: item.src_ip,
            src_port: item.src_port,
        }));

        setChartData(formattedData);
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            const srcIp = payload[0] ? payload[0].payload.src_ip : null;
            const srcPort = payload[0] ? payload[0].payload.src_port : null;

            return (
                <div className="custom-tooltip bg-slate-600 rounded-lg p-4">
                    <p className="text-white">{`Source IP: ${srcIp}`}</p>
                    <p className="text-[#ffee00]">{`Source Port: ${srcPort}`}</p>
                </div>
            );
        }
        return null;
    };


    return (
        <div>
            <ResponsiveContainer className="p-2" width="100%" height={is500px ? 400 : 300}>
                <ScatterChart margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="src_ip" type="category" name="Source IP" />
                    <YAxis dataKey="src_port" type="number" name="Source Port" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Scatter name="SRC IP and SRC PORT" data={chartData} fill="#ffee00" />
                </ScatterChart>
            </ResponsiveContainer>
            <h1 className="text-center text-lg font-semibold bg-blue-600">Scatter Graph</h1>
        </div>
    );
};

export default CustomScatterGraph;
