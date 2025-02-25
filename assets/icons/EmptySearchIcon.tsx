import { IconProps } from "@/types/Icons";
import * as React from "react";
import { Svg, Path } from "react-native-svg";

const EmptySearchIcon = ({
  width = 62,
  height = 62,
  color = "#647184",
  ...rest
}: IconProps) => (
  <Svg width={width} height={height} fill="none" {...rest}>
    <Path
      fill={color}
      d="m33.383 35.578-8.987-8.986a1.92 1.92 0 0 1 0-2.696 1.92 1.92 0 0 1 2.696 0l8.986 8.986a1.92 1.92 0 0 1 0 2.696 1.92 1.92 0 0 1-2.695 0Z"
    />
    <Path
      fill={color}
      d="M24.396 35.578a1.92 1.92 0 0 1 0-2.696l8.986-8.986a1.92 1.92 0 0 1 2.696 0 1.92 1.92 0 0 1 0 2.696l-8.986 8.986a1.92 1.92 0 0 1-2.696 0Z"
    />
    <Path
      fill={color}
      d="M29.73 55.281c-14.361 0-26.053-11.691-26.053-26.052 0-14.36 11.692-26.052 26.052-26.052S55.781 14.87 55.781 29.23 44.09 55.281 29.73 55.281Zm0-48.291c-12.277 0-22.24 9.988-22.24 22.24 0 12.25 9.963 22.239 22.24 22.239 12.275 0 22.239-9.989 22.239-22.24 0-12.25-9.964-22.24-22.24-22.24ZM56.417 57.824c-.483 0-.966-.178-1.348-.56l-5.083-5.083a1.918 1.918 0 0 1 0-2.694 1.918 1.918 0 0 1 2.694 0l5.084 5.084a1.918 1.918 0 0 1 0 2.694c-.382.381-.864.559-1.347.559Z"
    />
  </Svg>
);
export default EmptySearchIcon;
