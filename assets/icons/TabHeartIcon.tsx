import { IconProps } from "@/types/Icons";
import * as React from "react";
import { Svg, Path } from "react-native-svg";

const TabHeartIcon = ({
  width = 20,
  height = 20,
  color = "#0D0D0D",
  ...rest
}: IconProps) => (
  <Svg width={width} height={height} fill="none" {...rest}>
    <Path
      fill={color}
      d="M10 1.528a6 6 0 0 0-8.243 8.715l6.829 6.828a2 2 0 0 0 2.828 0l6.829-6.828A6 6 0 0 0 10 1.528ZM8.828 3.172l.465.464a1 1 0 0 0 1.414 0l.465-.464a4 4 0 1 1 5.656 5.656L10 15.657 3.172 8.828a4 4 0 0 1 5.656-5.656Z"
    />
  </Svg>
);
export default TabHeartIcon;
