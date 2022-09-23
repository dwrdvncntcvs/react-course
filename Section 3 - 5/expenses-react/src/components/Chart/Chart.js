import React from "react";
import "./chart.css";
import ChartBar from "./ChartBar";

export default function Chart({ dataPoints }) {
  const valueArr = dataPoints.map(({ value }) => value);
  const totalMaximum = Math.max(...valueArr);

  return (
    <div className="chart">
      {dataPoints.map((data) => (
        <ChartBar
          value={data.value}
          maxValue={totalMaximum}
          label={data.label}
          key={data.label}
        />
      ))}
    </div>
  );
}
