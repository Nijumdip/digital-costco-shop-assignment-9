import React, { useEffect, useState } from "react";
import {
    Bar,
    BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashBoard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
      <div className="container d-flex flex-row m-5">
          <div className="m-5 text-center">
                <h3>MONTH WISE SELL</h3>
                <LineChart width={550} height={300} data={data} >
                    <Line type="monotone" dataKey={'sell'}/>
                    {/* <Line type="monotone" dataKey="revenue" stroke="#82ca9d" /> */}
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey={'month'}/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend />
                </LineChart>
        </div>
        <div className="m-5 text-center">
            <h3>INVESTMENT VS REVENUE</h3>
            <BarChart width={530} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" />
                <Bar dataKey="investment" fill="#82ca9d" />
            </BarChart>
        </div>
      </div>
  );
};

export default DashBoard;
