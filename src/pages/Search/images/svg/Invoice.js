import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function Invoice(props) {
  return (
    <Svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_162_256)" fill="#020066">
        <Path d="M11.333 0H4.667A4.172 4.172 0 00.5 4.167v15a.834.834 0 001.303.687l1.755-1.199 1.755 1.2a.834.834 0 00.942 0l1.75-1.2 1.75 1.2a.833.833 0 00.942 0l1.75-1.2 1.75 1.198a.832.832 0 001.303-.686v-15A4.172 4.172 0 0011.333 0zm2.5 17.583l-.916-.626a.834.834 0 00-.944 0l-1.75 1.199-1.75-1.2a.833.833 0 00-.942 0l-1.75 1.2-1.75-1.2a.833.833 0 00-.941 0l-.923.627V4.167a2.5 2.5 0 012.5-2.5h6.666a2.5 2.5 0 012.5 2.5v13.416z" />
        <Path d="M11.334 6.667H4.667a.833.833 0 100 1.666h6.667a.833.833 0 000-1.666zM9.667 10h-5a.833.833 0 100 1.667h5a.833.833 0 100-1.667z" />
      </G>
      <Defs>
        <ClipPath id="clip0_162_256">
          <Path fill="#fff" transform="translate(.5)" d="M0 0H15V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default Invoice;
