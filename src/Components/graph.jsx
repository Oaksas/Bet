import React, { PureComponent } from "react";
import { SummaryData } from "./Data/summaryData";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TransactionSummary() {
  return (
    <ResponsiveContainer width="100%" aspect={3} className="mainColor">
      <AreaChart
        width={500}
        height={400}
        data={SummaryData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Transactions"
          stackId="1"
          stroke="#8884d8"
          fill="#ff9f00"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
