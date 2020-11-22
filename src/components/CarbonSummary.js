import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

export default function CarbonSummary() {
  const carbonTotal = useSelector((state) => state.carbonValues.emission);
  const numTrees = (carbonTotal / 27.7724).toFixed(2);

  return (
    <div>
      <Typography
        variant="h5"
        style={{ fontFamily: "Bebas Neue", marginLeft: 20, marginRight: 20 }}
      >
        Your Total Emissions: {carbonTotal} kg of CO2
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontFamily: "Bebas Neue",
          marginLeft: 20,
          marginRight: 20,
        }}
      >
        That's the equivalent of {numTrees} trees
      </Typography>
    </div>
  );
}
