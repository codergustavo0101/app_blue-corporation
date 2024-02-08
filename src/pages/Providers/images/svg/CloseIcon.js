import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CloseIcon(props) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.073 6.869l5.396-5.403A.86.86 0 0012.256.252L6.86 5.655 1.465.252a.857.857 0 00-1.213 0 .86.86 0 000 1.214L5.648 6.87.252 12.27a.86.86 0 001.213 1.214L6.86 8.082l5.396 5.403a.86.86 0 001.213-1.215L8.073 6.87z"
        fill="#000"
      />
    </Svg>
  );
}

export default CloseIcon;