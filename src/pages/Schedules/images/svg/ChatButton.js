import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const ChatButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={41}
    height={41}
    fill="none"
    {...props}
  >
    <Rect width={41} height={41} fill="#E9F4FF" rx={20.5} />
    <Path
      fill="#020066"
      d="M20.58 30.36c-.35 0-.704-.124-.987-.374l-2.767-2.331h-2.159a2.957 2.957 0 0 1-2.953-2.954v-8.862a2.955 2.955 0 0 1 2.953-2.953H26.48a2.957 2.957 0 0 1 2.954 2.953V24.7a2.957 2.957 0 0 1-2.954 2.954h-2.106l-2.84 2.348c-.268.238-.61.358-.955.358Zm-5.913-15.997c-.815 0-1.477.662-1.477 1.476V24.7c0 .815.662 1.477 1.477 1.477h2.428a.74.74 0 0 1 .477.174l2.988 2.518 3.08-2.523c.132-.11.298-.169.47-.169h2.372c.815 0 1.477-.662 1.477-1.477v-8.86c0-.815-.662-1.477-1.477-1.477H14.667Z"
    />
  </Svg>
);
export default ChatButton;