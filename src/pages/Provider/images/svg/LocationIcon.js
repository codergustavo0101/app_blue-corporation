import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function LocationIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_162_240)" fill="#020066">
        <Path d="M10 5a3.333 3.333 0 100 6.667A3.333 3.333 0 0010 5zm0 5a1.667 1.667 0 110-3.333A1.667 1.667 0 0110 10z" />
        <Path d="M10 20a4.392 4.392 0 01-3.593-1.833c-3.176-4.381-4.786-7.675-4.786-9.79a8.38 8.38 0 1116.758 0c0 2.115-1.61 5.409-4.787 9.79A4.393 4.393 0 0110 20zm0-18.183A6.57 6.57 0 003.438 8.38c0 1.675 1.578 4.773 4.44 8.722a2.62 2.62 0 004.243 0c2.863-3.95 4.44-7.047 4.44-8.722A6.569 6.569 0 0010 1.818z" />
      </G>
      <Defs>
        <ClipPath id="clip0_162_240">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default LocationIcon;
