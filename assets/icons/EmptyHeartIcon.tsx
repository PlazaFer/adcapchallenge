import { IconProps } from "@/types/Icons";
import * as React from "react";
import { Svg, Path } from "react-native-svg";

const EmptyHeartIcon = ({
  width = 23,
  height = 23,
  color = "#F94868",
  ...rest
}: IconProps) => (
  <Svg width={width} height={height} fill="none" {...rest}>
    <Path
      fill={color}
      d="m10.82 1.58-.82.822-.824-.824a5.375 5.375 0 0 0-7.6 7.602l7.894 7.895a.75.75 0 0 0 1.06 0l7.902-7.897A5.376 5.376 0 0 0 14.626.002a5.38 5.38 0 0 0-3.806 1.577v.001Zm6.548 6.54L10 15.485 2.635 8.12a3.875 3.875 0 1 1 5.48-5.48l1.358 1.357a.75.75 0 0 0 1.073-.012L11.88 2.64a3.88 3.88 0 0 1 5.487 5.48h.001Z"
    />
  </Svg>
);

export default EmptyHeartIcon;
