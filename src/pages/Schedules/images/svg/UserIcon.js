import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function UserIcon({color, ...props}) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_20_1361)" fill={color}>
        <Path d="M12 12a6 6 0 100-12 6 6 0 000 12zm0-10a4 4 0 110 8 4 4 0 010-8zM12 14a9.01 9.01 0 00-9 9 1 1 0 102 0 7 7 0 1114 0 1 1 0 002 0 9.01 9.01 0 00-9-9z" />
      </G>
      <Defs>
        <ClipPath id="clip0_20_1361">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default UserIcon
