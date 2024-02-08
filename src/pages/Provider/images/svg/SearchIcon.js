import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SearchIcon(props) {
  return (
    <Svg
      width={39}
      height={39}
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.5} y={0.5} width={38} height={38} rx={11.5} fill="#fff" />
      <Path
        d="M19 10c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"
        fill="#020066"
      />
      <Rect x={0.5} y={0.5} width={38} height={38} rx={11.5} stroke="#E8E8E8" />
    </Svg>
  )
}

export default SearchIcon
