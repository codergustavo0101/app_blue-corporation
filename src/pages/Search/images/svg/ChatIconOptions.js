import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function ChatIconOptions(props) {
  return (
    <Svg
      width={54}
      height={54}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={54} height={54} rx={27} fill="#E9F4FF" />
      <Path
        d="M26.678 38.015c-.463 0-.928-.163-1.3-.493l-3.645-3.07H18.89a3.894 3.894 0 01-3.89-3.89V18.89A3.893 3.893 0 0118.89 15h15.56a3.894 3.894 0 013.89 3.89v11.67a3.894 3.894 0 01-3.89 3.89h-2.774l-3.741 3.093c-.352.314-.803.471-1.258.471l.001.001zm-7.789-21.07a1.947 1.947 0 00-1.945 1.945v11.67c0 1.073.873 1.946 1.945 1.946h3.199c.23 0 .451.08.627.228l3.936 3.317 4.055-3.323a.977.977 0 01.621-.222h3.124a1.947 1.947 0 001.945-1.945V18.89a1.947 1.947 0 00-1.945-1.946H18.889z"
        fill="#020066"
      />
    </Svg>
  );
}

export default ChatIconOptions;
