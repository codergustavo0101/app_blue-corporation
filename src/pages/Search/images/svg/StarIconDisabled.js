import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarIconDisabled(props) {
  return (
    <Svg
      width={16}
      height={15}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.708.845L9.47 5.08l.076.183.198.016 4.572.366-3.483 2.984-.151.129.046.192 1.064 4.461-3.914-2.39-.169-.104-.17.104-3.913 2.39 1.064-4.46.046-.193-.15-.13-3.483-2.983 4.571-.366.198-.016.076-.183L7.708.845z"
        stroke="#848484"
        strokeWidth={0.649306}
      />
    </Svg>
  )
}

export default StarIconDisabled
