import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function CloudIcon(props) {
  return (
    <Svg
      width={34}
      height={33}
      viewBox="0 0 34 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_140_370)" fill="#020066">
        <Path d="M25.307 10.146a1.55 1.55 0 01-1.058-1.037A11 11 0 103.487 16.31a1.438 1.438 0 01-.424 1.702 7.562 7.562 0 00-2.978 7.15 7.73 7.73 0 007.736 6.463h7.31a1.375 1.375 0 000-2.75h-7.31a4.97 4.97 0 01-5.014-4.1A4.752 4.752 0 014.7 20.222a4.154 4.154 0 001.358-4.902 8.405 8.405 0 01-.1-5.674 8.19 8.19 0 016.72-5.452 8.4 8.4 0 011.062-.068 8.228 8.228 0 017.914 5.885 4.092 4.092 0 002.764 2.736 8.158 8.158 0 011.07 15.249 1.342 1.342 0 00-.73 1.22 1.358 1.358 0 001.908 1.259c5.684-2.732 8.773-9.92 3.96-16.863a9.537 9.537 0 00-5.318-3.465z" />
        <Path d="M25.73 22.972a1.375 1.375 0 000-1.944l-2.181-2.18a4.125 4.125 0 00-5.833 0l-2.18 2.18a1.375 1.375 0 001.944 1.944l1.777-1.778v10.431a1.375 1.375 0 002.75 0v-10.43l1.778 1.777a1.375 1.375 0 001.945 0z" />
      </G>
      <Defs>
        <ClipPath id="clip0_140_370">
          <Path fill="#fff" transform="translate(.007)" d="M0 0H33V33H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default CloudIcon;
