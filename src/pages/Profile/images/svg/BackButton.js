import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const BackButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={29}
    fill="none"
    {...props}
  >
    <Rect
      width={27}
      height={27.109}
      x={0.5}
      y={0.5}
      fill="#fff"
      stroke="#020066"
      rx={13.5}
    />
    <Path
      stroke="#020066"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.199 13.702a.5.5 0 0 0 0 .705l3.618 3.642-.516.519-4.495-4.514 4.495-4.513.516.52-3.618 3.641Z"
    />
  </Svg>
);
export default BackButton;
