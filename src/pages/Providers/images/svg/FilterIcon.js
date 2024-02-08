import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function FilterIcon(props) {
  return (
    <Svg
      width={39}
      height={39}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={38} height={38} rx={11.5} fill="#fff" />
      <Path
        d="M21.638 28.643a.819.819 0 01-.491-.164l-3.274-2.455a.82.82 0 01-.328-.655v-4.6l-5.742-6.46A3.192 3.192 0 0114.19 9h11.622a3.192 3.192 0 012.384 5.31l-5.74 6.46v7.054a.818.818 0 01-.818.819zm-2.456-3.683l1.637 1.227v-5.729c0-.2.074-.393.207-.543l5.949-6.693a1.554 1.554 0 00-1.163-2.585H14.19a1.555 1.555 0 00-1.163 2.585l5.95 6.693c.132.15.206.343.205.543v4.502z"
        fill="#020066"
      />
      <Rect x={0.5} y={0.5} width={38} height={38} rx={11.5} stroke="#D7D7D7" />
    </Svg>
  );
}

export default FilterIcon;