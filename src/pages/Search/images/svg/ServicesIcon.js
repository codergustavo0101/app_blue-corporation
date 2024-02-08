import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ServicesIcon(props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.083 3.333h-.916A4.174 4.174 0 0011.083 0H9.417a4.174 4.174 0 00-4.084 3.333h-.916A4.172 4.172 0 00.25 7.5v8.333A4.172 4.172 0 004.417 20h11.666a4.172 4.172 0 004.167-4.167V7.5a4.172 4.172 0 00-4.167-4.167zM9.417 1.667h1.666a2.5 2.5 0 012.347 1.666H7.07a2.5 2.5 0 012.347-1.666zM4.417 5h11.666a2.5 2.5 0 012.5 2.5V10H1.917V7.5a2.5 2.5 0 012.5-2.5zm11.666 13.333H4.417a2.5 2.5 0 01-2.5-2.5v-4.166h7.5v.833a.833.833 0 001.666 0v-.833h7.5v4.166a2.5 2.5 0 01-2.5 2.5z"
        fill="#020066"
      />
    </Svg>
  )
}

export default ServicesIcon
