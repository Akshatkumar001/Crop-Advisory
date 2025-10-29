import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import "./Mrkt.css";

const MarketPrices = () => {
  const [crop, setCrop] = useState("Paddy/Rice");

  const mandiData = [
    { mandi: "Bahadurpur Mandi", minMax: "₹ 1800-2200", modal: "₹ 2000" },
    { mandi: "Rajpur Mandi", minMax: "₹ 1750-2100", modal: "₹ 1900" },
    { mandi: "Chandpur Mandi", minMax: "₹ 1850-2250", modal: "₹ 2100" },
  ];

  const trendData = [
    { day: "Mon", price: 200 },
    { day: "Tue", price: 180 },
    { day: "Wed", price: 185 },
    { day: "Thu", price: 182 },
    { day: "Fri", price: 195 },
    { day: "Sat", price: 205 },
    { day: "Sun", price: 215 },
  ];

  return (
    <div className="market-container">
      <h2 className="title">Market Prices</h2>

      <select className="dropdown" value={crop} onChange={(e) => setCrop(e.target.value)}>
        <option value="Paddy/Rice">Paddy/Rice</option>
        <option value="Wheat">Wheat</option>
        <option value="Maize">Maize</option>
      </select>

      <div className="mandi-table">
        <div className="table-header">
          <span>MANDI</span>
          <span>MIN-MAX PRICE</span>
          <span>MODAL PRICE</span>
        </div>
        {mandiData.map((row, idx) => (
          <div key={idx} className="table-row">
            <span>{row.mandi}</span>
            <span>{row.minMax}</span>
            <span>{row.modal}</span>
          </div>
        ))}
      </div>

      <h4 className="trend-title">7-Day Trend</h4>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[180, 220]} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#2e7d32" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketPrices;