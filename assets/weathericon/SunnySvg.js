import * as React from "react";
import Svg, { G, Circle, Defs, RadialGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SunnySvg = ({ type }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={type ? 40 : 200}
    height={type ? 40 : 200}
    transform={{ scale: type ? 2 : 9.5 }}
    fill="none"
  >
    <G filter="url(#a)">
      <Circle cx={10} cy={10} r={7} fill="#FBCA1C" />
      <Circle cx={10} cy={10} r={7} fill="url(#b)" fillOpacity={0.2} />
    </G>
    <Defs>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(6 7.33332 -5.12302 4.19156 8.333 7.333)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBCA1C" />
        <Stop offset={1} stopColor="#E4750E" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SunnySvg;
