import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AwaitUploadDocsIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm4 13h-4a1 1 0 01-1-1V6a1 1 0 112 0v5h3a1 1 0 110 2z"
        fill="#F4DC01"
      />
    </Svg>
  );
}

export default AwaitUploadDocsIcon;
