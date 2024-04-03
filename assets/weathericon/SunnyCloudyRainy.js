import * as React from "react";
import Svg, {
  G,
  Path,
  Circle,
  Defs,
  RadialGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SunnyCloudyRainy = ({ props, type }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    // width={143}
    // height={139}
    fill="none"
    width={type ? 100 : 143}
    height={type ? 60 : 139}
    transform={{ scale: type ? 1 : 9.5 }}
    {...props}
  >
    <G filter="url(#a)">
      <G filter="url(#b)">
        <Path
          fill="#379ADC"
          d="M83 85.857A2.857 2.857 0 0 1 85.857 83H88v2.143A2.857 2.857 0 0 1 85.143 88 2.143 2.143 0 0 1 83 85.857Z"
        />
      </G>
      <G filter="url(#c)">
        <Path
          fill="#379ADC"
          d="M73 97.857A2.857 2.857 0 0 1 75.857 95H78v2.143A2.857 2.857 0 0 1 75.143 100 2.143 2.143 0 0 1 73 97.857Z"
        />
      </G>
      <G filter="url(#d)">
        <Path
          fill="#379ADC"
          d="M64 85.857A2.857 2.857 0 0 1 66.857 83H69v2.143A2.857 2.857 0 0 1 66.143 88 2.143 2.143 0 0 1 64 85.857Z"
        />
      </G>
      <G filter="url(#e)">
        <Path
          fill="#379ADC"
          d="M54 97.857A2.857 2.857 0 0 1 56.857 95H59v2.143A2.857 2.857 0 0 1 56.143 100 2.143 2.143 0 0 1 54 97.857Z"
        />
      </G>
      <G filter="url(#f)">
        <Path
          fill="#379ADC"
          d="M45 85.857A2.857 2.857 0 0 1 47.857 83H50v2.143A2.857 2.857 0 0 1 47.143 88 2.143 2.143 0 0 1 45 85.857Z"
        />
      </G>
      <G filter="url(#g)">
        <Circle cx={60} cy={42} r={21} fill="#FBCA1C" />
        <Circle cx={60} cy={42} r={21} fill="url(#h)" fillOpacity={0.2} />
      </G>
      <G filter="url(#i)">
        <Path
          fill="#fff"
          d="M100.971 55c.019-.33.029-.664.029-1 0-9.389-7.611-17-17-17a16.941 16.941 0 0 0-11.669 4.637A18.52 18.52 0 0 0 67.5 41c-6.045 0-11.413 2.9-14.79 7.384A13.535 13.535 0 0 0 49.5 48C42.044 48 36 54.044 36 61.5a12.049 12.049 0 0 0 0 .177C36 70.692 43.308 78 52.323 78H78c12.703 0 23-10.297 23-23h-.029Z"
        />
        <Path
          fill="url(#j)"
          fillOpacity={0.2}
          d="M100.971 55c.019-.33.029-.664.029-1 0-9.389-7.611-17-17-17a16.941 16.941 0 0 0-11.669 4.637A18.52 18.52 0 0 0 67.5 41c-6.045 0-11.413 2.9-14.79 7.384A13.535 13.535 0 0 0 49.5 48C42.044 48 36 54.044 36 61.5a12.049 12.049 0 0 0 0 .177C36 70.692 43.308 78 52.323 78H78c12.703 0 23-10.297 23-23h-.029Z"
        />
      </G>
      <G filter="url(#k)">
        <Path
          fill="#fff"
          d="M84 59.5C84 51.492 90.492 45 98.5 45h2.5c6.627 0 12 5.373 12 12s-5.373 12-12 12h-9a8 8 0 0 1-8-8v-1.5Z"
        />
        <Path
          fill="url(#l)"
          fillOpacity={0.2}
          d="M84 59.5C84 51.492 90.492 45 98.5 45h2.5c6.627 0 12 5.373 12 12s-5.373 12-12 12h-9a8 8 0 0 1-8-8v-1.5Z"
        />
      </G>
      <G filter="url(#m)">
        <Path
          fill="#fff"
          d="M50 69c0-5.523-4.477-10-10-10h-1.5a8.5 8.5 0 0 0 0 17h5.833A5.667 5.667 0 0 0 50 70.333V69Z"
        />
        <Path
          fill="url(#n)"
          fillOpacity={0.2}
          d="M50 69c0-5.523-4.477-10-10-10h-1.5a8.5 8.5 0 0 0 0 17h5.833A5.667 5.667 0 0 0 50 70.333V69Z"
        />
      </G>
    </G>
    <Defs>
      <RadialGradient
        id="h"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(17.99997 21.99997 -15.3691 12.5747 55 34)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBCA1C" />
        <Stop offset={1} stopColor="#E4750E" />
      </RadialGradient>
      <RadialGradient
        id="j"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-26.99964 43.50017 -68.96376 -42.80435 81.5 41)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopOpacity={0} />
        <Stop offset={1} stopColor="#4D5E6F" />
      </RadialGradient>
      <RadialGradient
        id="l"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(28.99998 34 -22.9975 19.6155 80.5 35)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4D5E6F" stopOpacity={0} />
        <Stop offset={1} stopColor="#4D5E6F" stopOpacity={0.54} />
      </RadialGradient>
      <RadialGradient
        id="n"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 23 -27.0588 0 40 55)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#4D5E6F" stopOpacity={0} />
        <Stop offset={1} stopColor="#4D5E6F" stopOpacity={0.62} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default SunnyCloudyRainy;
