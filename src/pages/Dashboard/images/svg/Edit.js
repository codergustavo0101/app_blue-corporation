import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const Edit = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={19}
    fill="none"
    {...props}
  >
    <Circle cx={2.84} cy={2.437} r={2.173} fill="#000" />
    <Circle cx={2.844} cy={8.957} r={2.173} fill="#000" />
    <Circle cx={2.844} cy={16.563} r={2.173} fill="#000" />
  </Svg>
)
export default Edit
