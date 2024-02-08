import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function TimeIcon(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_64_300)">
        <Path
          d="M10.833 1.705V.833a.833.833 0 10-1.666 0v.872C4.5 2.127.833 6.06.833 10.833c0 2.282.839 4.372 2.223 5.978-.705.374-1.39 1.097-1.39 2.356a.833.833 0 101.667 0c0-.834.715-.995.925-1.025a.854.854 0 00.169-.036A9.123 9.123 0 009.999 20c2.094 0 4.03-.707 5.575-1.896.05.017.103.03.157.037.22.03.935.192.935 1.025a.833.833 0 101.666 0c0-1.259-.684-1.982-1.389-2.356a9.128 9.128 0 002.223-5.977c0-4.774-3.668-8.706-8.334-9.129l.001.001zM2.5 10.833c0-4.136 3.364-7.5 7.5-7.5s7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5-7.5-3.364-7.5-7.5zM20 3.75a.833.833 0 11-1.667 0c0-1.01-.814-2.083-2.32-2.083a.833.833 0 110-1.667C18.248 0 20 1.647 20 3.75zM.833 4.583A.833.833 0 010 3.75C0 1.647 1.752 0 3.987 0a.833.833 0 110 1.667c-1.507 0-2.32 1.073-2.32 2.083 0 .46-.373.833-.834.833zm10 1.25v5.834a.833.833 0 11-1.666 0V5.833a.833.833 0 111.666 0zm.417 9.584a1.25 1.25 0 11-2.5-.001 1.25 1.25 0 012.5 0z"
          fill="#020066"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_64_300">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default TimeIcon