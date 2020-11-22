import React from "react";
import { Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import treeCity from "../lotties/little-sprout";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: treeCity,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Header() {
  return (
    <div className="header-container">
      <Lottie
        style={{ margin: 0 }}
        options={defaultOptions}
        height={50}
        width={50}
      />
      <Typography
        align="center"
        variant="h3"
        style={{ fontFamily: "Bebas Neue" }}
      >
        App Name
      </Typography>
      <Lottie
        style={{ margin: 0 }}
        options={defaultOptions}
        height={50}
        width={50}
      />
    </div>
  );
}
