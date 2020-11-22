import React from "react";
import { PieChart, Pie } from "recharts";
import { useSelector } from "react-redux";

export default function CarbonChart() {
  const emission = useSelector((state) => state.carbonValues.emission);
  const offset = useSelector((state) => state.carbonValues.offset);
  const total = emission + offset;

  const percentEmission = (emission / total).toFixed(2) * 100;
  const percentOffset = (offset / total).toFixed(2) * 100;

  const data = [
    {
      name: "Emissions",
      value: percentEmission,
    },
    {
      name: "Offset",
      value: percentOffset,
    },
  ];

  return (
    <div className="chart-container">
      <PieChart
        className="recharts-pie-sector"
        width={500}
        height={250}
        margin={1}
      >
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill=""
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value,
            index,
          }) => {
            const RADIAN = Math.PI / 180;
            // eslint-disable-next-line
            const radius = 50 + innerRadius + (outerRadius - innerRadius);
            // eslint-disable-next-line
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // eslint-disable-next-line
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            return (
              <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                fontStyle="bold"
                fontWeight={700}
                fontSize={22}
              >
                {data[index].name} ({value}%)
              </text>
            );
          }}
        />
      </PieChart>
    </div>
  );
}
