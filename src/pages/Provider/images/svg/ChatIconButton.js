import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ChatIconButton(props) {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.126 16.014a1.36 1.36 0 01-.905-.343l-2.536-2.136H2.707A2.71 2.71 0 010 10.828V2.707A2.708 2.708 0 012.706 0h10.827a2.71 2.71 0 012.707 2.707v8.12a2.71 2.71 0 01-2.707 2.707h-1.93L9 15.686a1.312 1.312 0 01-.875.327v.001zm-5.42-14.66c-.746 0-1.353.606-1.353 1.353v8.12c0 .746.607 1.354 1.353 1.354h2.226c.16 0 .314.056.436.159l2.739 2.307 2.822-2.312a.68.68 0 01.431-.155h2.174c.746 0 1.353-.607 1.353-1.353v-8.12c0-.747-.607-1.354-1.353-1.354H2.706z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ChatIconButton
