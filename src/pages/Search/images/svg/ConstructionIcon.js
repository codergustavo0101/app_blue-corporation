import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function ConstructionIcon(props) {
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
        d="M33.417 29.75H32.5a.916.916 0 110-1.833h.917a.916.916 0 110 1.833zm.916 2.75a.916.916 0 00-.916-.917H32.5a.916.916 0 100 1.834h.917c.507 0 .916-.41.916-.917zm-3.666-11a.916.916 0 00-.917-.917h-.917a.916.916 0 100 1.834h.917c.507 0 .917-.41.917-.917zm3.666 0a.916.916 0 00-.916-.917H32.5a.916.916 0 100 1.834h.917c.507 0 .916-.41.916-.917zm0 3.667a.916.916 0 00-.916-.917H32.5a.916.916 0 100 1.833h.917c.507 0 .916-.41.916-.916zM38 33.417V20.583A4.589 4.589 0 0033.417 16h-4.584a4.589 4.589 0 00-4.583 4.583.916.916 0 101.833 0 2.753 2.753 0 012.75-2.75h4.584a2.753 2.753 0 012.75 2.75v12.834a2.753 2.753 0 01-2.75 2.75H32.5a.916.916 0 100 1.833h.917A4.589 4.589 0 0038 33.417zm-7.333.458v-3.806c0-1.419-.641-2.733-1.76-3.61l-2.75-2.153a4.577 4.577 0 00-5.648 0l-2.75 2.152A4.556 4.556 0 0016 30.068v3.806A4.13 4.13 0 0020.125 38h6.417a4.13 4.13 0 004.125-4.124zm-5.639-8.124l2.75 2.152a2.738 2.738 0 011.055 2.166v3.806a2.294 2.294 0 01-2.291 2.292h-6.417a2.294 2.294 0 01-2.292-2.292v-3.806c0-.852.385-1.64 1.055-2.166l2.75-2.151a2.744 2.744 0 013.39-.001zm.139 6.749v-1.833a.917.917 0 00-.917-.917h-1.833a.917.917 0 00-.917.917V32.5c0 .506.41.917.917.917h1.833c.506 0 .917-.411.917-.917z"
        fill="#020066"
      />
    </Svg>
  )
}

export default ConstructionIcon