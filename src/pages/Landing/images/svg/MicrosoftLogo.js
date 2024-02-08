import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

function MicrosoftLogo(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Path
        fill="url(#pattern0)"
        d="M0.0270996 0H24.576599599999998V25H0.0270996z"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_6_236"
            transform="matrix(.00199 0 0 .00195 -.01 0)"
          />
        </Pattern>
        <Image
          id="image0_6_236"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default MicrosoftLogo;
