import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function CheckUser({big, ...props}) {
  return (
    <Svg
      width={big ? 23 : 17}
      height={big ? 23 : 17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={8.5} cy={8.5} r={8.5} fill="#020066" />
      <Path
        d="M6.95 11.348a.893.893 0 01-.633-.263L4.404 9.174a.527.527 0 01.746-.746l1.8 1.8 4.76-4.761a.527.527 0 01.746.745l-4.874 4.873a.893.893 0 01-.633.262z"
        fill="#fff"
      />
    </Svg>
  )
}

export default CheckUser