import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FavoritesIcon({color, ...props}) {
  return (
    <Svg
      width={24}
      height={21}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.193 0a6.286 6.286 0 00-5.402 3.241A6.287 6.287 0 006.389 0 6.679 6.679 0 00.005 6.924c0 4.466 4.7 9.344 8.643 12.65a4.885 4.885 0 006.286 0c3.942-3.306 8.643-8.184 8.643-12.65A6.68 6.68 0 0017.193 0zm-3.521 18.072a2.92 2.92 0 01-3.762 0C4.864 13.838 1.97 9.776 1.97 6.924a4.714 4.714 0 014.419-4.96 4.714 4.714 0 014.42 4.96.982.982 0 001.964 0 4.715 4.715 0 014.42-4.96 4.714 4.714 0 014.42 4.96c0 2.852-2.895 6.914-7.941 11.144v.004z"
        fill={color}
      />
    </Svg>
  )
}

export default FavoritesIcon
