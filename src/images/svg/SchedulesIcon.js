import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SchedulesIcon({color, ...props}) {
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
        d="M17 10.039c-3.859 0-7 3.14-7 7C10 20.877 13.141 24 17 24s7-3.14 7-7c0-3.838-3.141-6.961-7-6.961zM17 22c-2.757 0-5-2.226-5-4.961 0-2.757 2.243-5 5-5s5 2.226 5 4.961c0 2.757-2.243 5-5 5zm1.707-4.707a.999.999 0 11-1.414 1.414l-1-1A1 1 0 0116 17v-2a1 1 0 112 0v1.586l.707.707zM24 7v2a1 1 0 11-2 0V7c0-1.654-1.346-3-3-3H5C3.346 4 2 5.346 2 7v1h9a1 1 0 010 2H2v9c0 1.654 1.346 3 3 3h4a1 1 0 010 2H5c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h1V1a1 1 0 012 0v1h8V1a1 1 0 112 0v1h1c2.757 0 5 2.243 5 5z"
        fill={color}
      />
    </Svg>
  )
}

export default SchedulesIcon