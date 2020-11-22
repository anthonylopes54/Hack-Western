import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

export default function CarbonSummary() {
  const emission = useSelector((state) => state.carbonValues.emission); // dollar value of debt to pay
  const amountPaid = useSelector((state) => state.carbonValues.offset); // dollar value of offsets paid
  const amountRemaining = emission - amountPaid;

  const numTrees = (amountRemaining / 27.7724).toFixed(2);   // 1 tree can absorb ~ 21.7724kg of carbon a year

  return (
    <div>
      <Typography
        variant="h5"
        style={{
          fontFamily: "Bebas Neue",
          marginLeft: 20,
          marginRight: 20,
          color: "#565656",
        }}
      >
        Net Emissions: {amountRemaining * 0.03} kg of CO2
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontFamily: "Bebas Neue",
          marginLeft: 20,
          marginRight: 20,
          color: "#565656",
        }}
      >
        That's the equivalent of {numTrees} trees
      </Typography>
    </div>
  );
}
