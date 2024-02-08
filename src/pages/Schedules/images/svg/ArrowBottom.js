import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowBottom(props) {
  return (
    <Svg
      width={14}
      height={8}
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.905.322a.898.898 0 00-.287-.238.743.743 0 00-.68 0 .898.898 0 00-.288.238L7.6 5.31a.899.899 0 01-.287.238.743.743 0 01-.68 0 .899.899 0 01-.288-.238L2.295.322a.899.899 0 00-.287-.238.743.743 0 00-.68 0 .899.899 0 00-.288.238C.875.526.783.802.783 1.09c0 .287.092.563.257.767l4.058 4.998c.498.611 1.172.955 1.875.955.703 0 1.377-.344 1.874-.955l4.058-4.998a1.23 1.23 0 00.258-.767 1.23 1.23 0 00-.258-.768z"
        fill="#454545"
      />
    </Svg>
  )
}

export default ArrowBottom