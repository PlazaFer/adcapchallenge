import { IconProps } from "@/types/Icons";
import * as React from "react";
import { Svg, Path } from "react-native-svg";

const FillHeartIcon = ({
  width = 23,
  height = 23,
  color = "#F94868",
  ...rest
}: IconProps) => (
    <Svg
    width={width}
    height={height}
    fill="none"
    {...rest}
  >
    <Path
      fill={color}
      d="M11.356 16.483a2.05 2.05 0 0 1-2.687-.01l-.11-.095C3.316 11.808-.11 8.815.02 5.08A5.207 5.207 0 0 1 2.357.953C4.994-.779 8.25.03 10.007 2.012 11.767.029 15.023-.788 17.66.953a5.207 5.207 0 0 1 2.337 4.128c.14 3.734-3.296 6.726-8.54 11.316l-.1.087Z"
    />
  </Svg>
);

export default FillHeartIcon;
