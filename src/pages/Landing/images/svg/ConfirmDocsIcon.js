import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function ConfirmDocsIcon(props) {
  return (
    <Svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12.0035} cy={12} r={12} fill="#020066" />
      <Path
        d="M9.878 16.663c-.34 0-.667-.136-.908-.377l-2.745-2.744a.757.757 0 011.07-1.07l2.583 2.584 6.834-6.834a.757.757 0 011.07 1.07l-6.996 6.994c-.24.241-.567.377-.908.377z"
        fill="#fff"
      />
    </Svg>
  );
}

export default ConfirmDocsIcon;
