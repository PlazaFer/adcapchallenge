import { IconProps } from "@/types/Icons";
import * as React from "react";
import { Svg, Path } from "react-native-svg";

const ArrowBackIcon = ({
  width = 12,
  height = 12,
  color = "#FFF",
  ...rest
}: IconProps) => (
  <Svg width={width} height={height} fill="none" {...rest}>
    <Path
      fill={color}
      fillRule="evenodd"
      d="M5.707.293a1 1 0 0 1 0 1.414L3.414 4H11a1 1 0 1 1 0 2H3.414l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ArrowBackIcon;
