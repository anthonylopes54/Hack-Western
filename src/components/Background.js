import React from "react";
import Lottie from "react-lottie";
import greenwave from "../lotties/green-waves";

export default function Background() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: greenwave,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        className="background"
        style={{ zIndex: 1 }}
        options={defaultOptions}
        height={823}
        width={411}
      />
      <h1 style={{ zIndex: 2 }}>test</h1>
    </div>
  );
}
