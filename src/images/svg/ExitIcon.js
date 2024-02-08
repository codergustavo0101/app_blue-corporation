import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ExitIcon(props) {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.103 16.573H3.946a1.578 1.578 0 01-1.578-1.579V3.946a1.578 1.578 0 011.578-1.579h3.157M12.627 13.416l3.945-3.946-3.945-3.946M16.573 9.47h-9.47"
        stroke="#787486"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ExitIcon