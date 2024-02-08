import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Menu(props) {
  return (
    <Svg
      width={28}
      height={23}
      viewBox="0 0 28 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M2.688 3.879h23.625c.931 0 1.687-.869 1.687-1.94C28 .87 27.244 0 26.312 0H2.688C1.756 0 1 .868 1 1.94c0 1.07.756 1.939 1.688 1.939zM26.313 8.879H2.688c-.932 0-1.688.868-1.688 1.94 0 1.07.756 1.938 1.688 1.938h23.625c.931 0 1.687-.868 1.687-1.939 0-1.071-.756-1.94-1.688-1.94z"
        fill="#020066"
      />
      <Path
        stroke="#020066"
        strokeWidth={3.88}
        strokeLinecap="round"
        d="M2.93561 20.31L14.0639 20.31"
      />
    </Svg>
  );
}

export default Menu;
