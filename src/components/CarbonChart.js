import React from "react";
import { PieChart, Pie } from "recharts";
import { useSelector } from "react-redux";

export default function CarbonChart() {
  const emission = useSelector((state) => state.carbonValues.emission); // dollar value of debt to pay
  const amountPaid = useSelector((state) => state.carbonValues.offset); // dollar value of offsets paid
  const amountRemaining = emission - amountPaid;

  const data = [
    {
      name: "Remaining",
      value: amountRemaining,
    },
    {
      name: "Offset",
      value: amountPaid,
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
          outerRadius={93}
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
                fill={data[index].name === "Remaining" ? "#fccf19" : "#25acf5"}
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="middle"
                // fontStyle="bold"
                fontFamily="Bebas Neue"
                // fontWeight={700}
                fontSize={20}
              >
                {data[index].name} (${value})
              </text>
            );
          }}
        />
      </PieChart>
    </div>
  );
}
