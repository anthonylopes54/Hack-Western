import React from "react";
import Lottie from "react-lottie";
import sproutPlant from "../lotties/sprout-plant";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: sproutPlant,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function LottieSprout() {
  return (
    <div className="lottie-sprout">
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
}
