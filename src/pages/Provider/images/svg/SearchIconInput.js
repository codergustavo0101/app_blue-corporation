import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchIconInput(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.166 1.667c4.14 0 7.5 3.36 7.5 7.5 0 4.14-3.36 7.5-7.5 7.5-4.14 0-7.5-3.36-7.5-7.5 0-4.14 3.36-7.5 7.5-7.5zm0 13.333A5.832 5.832 0 0015 9.167a5.832 5.832 0 00-5.834-5.834 5.831 5.831 0 00-5.833 5.834A5.832 5.832 0 009.166 15zm7.071.06l2.358 2.356-1.18 1.179-2.356-2.357 1.178-1.179z"
        fill="#020066"
      />
    </Svg>
  )
}

export default SearchIconInput
