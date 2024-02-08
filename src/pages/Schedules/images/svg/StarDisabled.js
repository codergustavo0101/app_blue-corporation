import * as React from "react";
import Svg, { Path } from "react-native-svg";
const StarDisabled = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={31}
    fill="none"
    {...props}
  >
    <Path
      fill={props.fill ? props.fill : "#EBEBEB"}
      d="M17.105.602a1.08 1.08 0 0 0-1.936 0L10.767 9.52.924 10.95a1.08 1.08 0 0 0-.598 1.841l7.122 6.943-1.681 9.803a1.08 1.08 0 0 0 1.566 1.138l8.804-4.628 8.804 4.628a1.08 1.08 0 0 0 1.566-1.138l-1.681-9.803 7.122-6.943a1.08 1.08 0 0 0-.598-1.84L21.507 9.52 17.105.6Z"
    />
  </Svg>
);
export default StarDisabled;
