import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarIcon(props) {
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
        d="M8 .71l2.06 4.954 5.349.429-4.075 3.49 1.245 5.22L8 12.004l-4.579 2.797 1.245-5.219-4.075-3.49 5.348-.429L8 .71z"
        fill="#020066"
      />
    </Svg>
  )
}

export default StarIcon
