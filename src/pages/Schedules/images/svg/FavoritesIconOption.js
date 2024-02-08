import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function FavoritesIconOption(props) {
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
        d="M32.363 17a5.983 5.983 0 00-5.141 3.085A5.983 5.983 0 0022.08 17a6.356 6.356 0 00-6.076 6.59c0 4.25 4.473 8.893 8.226 12.04a4.65 4.65 0 005.982 0c3.752-3.147 8.226-7.79 8.226-12.04A6.357 6.357 0 0032.363 17zm-3.351 17.2a2.779 2.779 0 01-3.58 0c-4.803-4.03-7.558-7.896-7.558-10.61a4.487 4.487 0 014.207-4.72 4.488 4.488 0 014.206 4.72.935.935 0 001.87 0 4.487 4.487 0 014.206-4.72 4.488 4.488 0 014.206 4.72c0 2.714-2.754 6.58-7.557 10.606v.004z"
        fill="#020066"
      />
    </Svg>
  )
}

export default FavoritesIconOption
