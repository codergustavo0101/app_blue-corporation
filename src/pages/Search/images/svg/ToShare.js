import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function ToShare(props) {
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
        d="M32.745 29.444a4.27 4.27 0 00-3.519 1.855l-5.966-2.693a4.193 4.193 0 00.005-3.198l5.958-2.707a4.27 4.27 0 10-.758-2.423c.004.242.028.483.073.72l-6.334 2.879a4.28 4.28 0 10-.014 6.258l6.35 2.867a4.344 4.344 0 00-.072.72 4.278 4.278 0 104.277-4.278zm0-11.61a2.444 2.444 0 11.002 4.888 2.444 2.444 0 01-.002-4.889zm-13.443 11.61a2.445 2.445 0 11-.001-4.889 2.445 2.445 0 01.001 4.89zm13.443 6.722a2.444 2.444 0 110-4.89 2.444 2.444 0 010 4.89z"
        fill="#020066"
      />
    </Svg>
  )
}

export default ToShare
