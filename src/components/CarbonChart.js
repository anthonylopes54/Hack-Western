import React, { useEffect, useState } from "react";
import * as Pusher from "pusher";
import { PieChart, Pie } from "recharts";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addEmmisions, addOffset, addTransaction } from "../actions";

export default function CarbonChart() {
  const emission = useSelector((state) => state.carbonValues.emission); // dollar value of debt to pay
  const amountPaid = useSelector((state) => state.carbonValues.offset); // dollar value of offsets paid
  const amountRemaining = emission - amountPaid;
  console.log('emission: ' + emission);
  console.log('amountPaid: ' + amountPaid);
  console.log('amountRemaining: ' + amountRemaining);
  

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
      <PieChart className="recharts-pie-sector" width={500} height={250}>
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
