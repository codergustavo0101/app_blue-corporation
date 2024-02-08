import * as React from "react";
import Svg, { Path } from "react-native-svg";

function MoreIcon(props) {
  return (
    <Svg
      width={10}
      height={9}
      viewBox="0 0 10 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.44 8.633V5.087H.894V3.953H4.44V.407h1.134v3.546h3.537v1.134H5.574v3.546H4.44z"
        fill="#878888"
      />
    </Svg>
  );
}

export default MoreIcon;
