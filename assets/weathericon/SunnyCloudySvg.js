import * as React from "react";
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SunnyCloudySvg = ({ type }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    // width={200}
    // height={200}
    fill="none"
    // transform={{ scale: 6 }}
    // {...props}
    width={type ? 57 : 200}
    height={type ? 40 : 200}
    transform={{ scale: type ? 2 : 6 }}
  >
    <G filter="url(#a)">
      <Circle cx={14} cy={10} r={7} fill="#FBCA1C" />
      <Circle cx={14} cy={10} r={7} fill="url(#b)" fillOpacity={0.2} />
    </G>
    <G filter="url(#c)">
      <Path
        fill="#fff"
        d="M27.657 14.333A5.667 5.667 0 0 0 18.11 9.88a6.175 6.175 0 0 0-1.61-.212 6.157 6.157 0 0 0-4.93 2.461A4.5 4.5 0 0 0 6 16.559 5.44 5.44 0 0 0 11.44 22H20a7.667 7.667 0 0 0 7.667-7.667h-.01Z"
      />
      <Path
        fill="url(#d)"
        fillOpacity={0.2}
        d="M27.657 14.333A5.667 5.667 0 0 0 18.11 9.88a6.175 6.175 0 0 0-1.61-.212 6.157 6.157 0 0 0-4.93 2.461A4.5 4.5 0 0 0 6 16.559 5.44 5.44 0 0 0 11.44 22H20a7.667 7.667 0 0 0 7.667-7.667h-.01Z"
      />
    </G>
    <Defs>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(6 7.33332 -5.12302 4.19156 12.333 7.333)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBCA1C" />
        <Stop offset={1} stopColor="#E4750E" />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-8.99986 14.50003 -22.9879 -14.2681 21.167 9.667)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopOpacity={0} />
        <Stop offset={1} stopColor="#4D5E6F" />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SunnyCloudySvg;
