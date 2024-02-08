import * as React from "react";
import Svg, { Path } from "react-native-svg";

function OpenEye(props) {
  return (
    <Svg
      width={26}
      height={23}
      viewBox="0 0 26 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.74 9.269l-5.48 4.644c-.705-.597-1.138-1.414-1.138-2.322 0-1.818 1.733-3.286 3.878-3.286 1.072 0 2.037.367 2.74.964z"
        stroke="#000"
        strokeOpacity={0.65}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.305 5.873C17.409 4.66 15.242 4 13 4 9.176 4 5.612 5.91 3.13 9.213c-.974 1.295-.974 3.47 0 4.764a14.034 14.034 0 002.936 2.91M9.122 18.502c1.235.44 2.545.679 3.878.679 3.824 0 7.388-1.91 9.87-5.213.974-1.294.974-3.47 0-4.764a15.235 15.235 0 00-1.15-1.349M16.803 12.233c-.282 1.294-1.528 2.35-3.055 2.588"
        stroke="#000"
        strokeOpacity={0.65}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default OpenEye;
