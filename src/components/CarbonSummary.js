import { Typography } from "@material-ui/core";
import React from "react";

export default function CarbonSummary() {
  const carbonTotal = 110;
  const numTrees = 5;

  return (
    <div>
      <Typography variant="h5" style={{ fontFamily: "Bebas Neue", margin: 10 }}>
        Your Total Emissions: {carbonTotal} kg of CO2
      </Typography>
      <Typography variant="h5" style={{ fontFamily: "Bebas Neue", margin: 10 }}>
        That's the equivalent of {numTrees} trees
      </Typography>
    </div>
  );
}
