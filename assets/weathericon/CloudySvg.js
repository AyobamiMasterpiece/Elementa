import * as React from "react";
import Svg, { G, Path, Defs, RadialGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const CloudySvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    transform={{ scale: 6 }}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#fff"
        d="M27.657 11a5.667 5.667 0 0 0-9.547-4.454 6.175 6.175 0 0 0-1.61-.213 6.157 6.157 0 0 0-4.93 2.462A4.5 4.5 0 0 0 6 13.226a5.44 5.44 0 0 0 5.44 5.44H20A7.667 7.667 0 0 0 27.667 11h-.01Z"
      />
      <Path
        fill="url(#b)"
        fillOpacity={0.2}
        d="M27.657 11a5.667 5.667 0 0 0-9.547-4.454 6.175 6.175 0 0 0-1.61-.213 6.157 6.157 0 0 0-4.93 2.462A4.5 4.5 0 0 0 6 13.226a5.44 5.44 0 0 0 5.44 5.44H20A7.667 7.667 0 0 0 27.667 11h-.01Z"
      />
    </G>
    <Defs>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-8.99986 14.50003 -22.9879 -14.2681 21.167 6.333)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopOpacity={0} />
        <Stop offset={1} stopColor="#4D5E6F" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default CloudySvg;
