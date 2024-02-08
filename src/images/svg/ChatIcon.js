import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChatIcon({color, ...props}) {
  return (
    <Svg
      width={24}
      height={23}
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.663 22.986c-.462 0-.927-.164-1.298-.493l-3.64-3.066h-2.84A3.89 3.89 0 010 15.542V3.885A3.888 3.888 0 013.884 0h15.54a3.89 3.89 0 013.886 3.885v11.656a3.89 3.89 0 01-3.885 3.885h-2.77l-3.737 3.089c-.351.312-.801.47-1.256.47h.001zM3.884 1.943a1.945 1.945 0 00-1.942 1.942v11.656c0 1.071.87 1.942 1.942 1.942H7.08c.229 0 .45.08.626.229l3.931 3.312 4.05-3.318a.975.975 0 01.62-.223h3.12a1.945 1.945 0 001.942-1.942V3.885a1.945 1.945 0 00-1.942-1.942H3.884z"
        fill={color}
      />
    </Svg>
  )
}

export default ChatIcon