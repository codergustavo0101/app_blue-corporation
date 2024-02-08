import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
function IndicateFriends(props) {
  return (
    <Svg
      width={103}
      height={150}
      viewBox="0 0 103 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path fill="url(#pattern0)" d="M0 0H103.44V171.038H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_17_65" transform="scale(.00127 .00077)" />
        </Pattern>
        <Image
          id="image0_17_65"
          width={785}
          height={1298}
        />
      </Defs>
    </Svg>
  );
}
export default IndicateFriends;