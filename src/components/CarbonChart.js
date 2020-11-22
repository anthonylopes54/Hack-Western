import React from "react";
import { PieChart, Pie } from "recharts";


class CarbonChart extends React.Component {
  render() {
    const data = [
      {
        name: "Emissions",
        value: 75,
      },
      {
        name: "Offset",
        value: 25,
      },
    ];
    return (
      <div className="chart-container">
        <PieChart
          className="recharts-pie-sector"
          width={500}
          height={250}
          margin={2}
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
}

export default CarbonChart;
