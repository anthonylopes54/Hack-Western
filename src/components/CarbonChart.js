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
  let isSubscribed = useSelector((state) => state.isSubscribed);
  const dispatch = useDispatch();
  
  const [pusher] = useState(
    new Pusher("5c419448d2783aa73354", {
      cluster: 'us3'
    })
  );
  const [channel] = useState(pusher.subscribe('my-channel'));
  
  useEffect(() => {
    channel.bind('my-event', (data) => {
      data = JSON.parse(data);
      let transactions = [];
      for (let i = 0; i < data.length; i++) {
        if (isSubscribed)
          dispatch(addOffset(data[i][0]))
      
        dispatch(addEmmisions(data[i][0]));

       const transaction = {
          date: "2020/11/22",
          item: data[i][1],
          carbonValue: data[i][2],
          dollarValue: data[i][3]
        }
        transactions.push(transaction);
      }
      addTransaction(transactions);
    }
  )});
  

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
