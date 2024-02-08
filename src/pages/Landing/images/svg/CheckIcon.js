import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function CheckIcon(props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect
        x={0.50354}
        y={0.5}
        width={19}
        height={19}
        rx={4.5}
        stroke="#020066"
        fill={props.color}
      />
    </Svg>
  );
}

export default CheckIcon;
