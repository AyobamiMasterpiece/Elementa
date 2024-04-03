import * as React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const RainIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={40}
    transform={{ scale: 2 }}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <G filter="url(#b)">
        <Path stroke="#C9C9C9" d="m12.166 9.613-2.5 7.5c-.5 2-2.5 1.5-2-.5" />
      </G>
      <G filter="url(#c)">
        <Path
          fill="#379ADC"
          d="M17.166 8.566c0-.526.427-.953.953-.953h.715v.715a.953.953 0 0 1-.953.953.715.715 0 0 1-.715-.715Z"
        />
      </G>
      <G filter="url(#d)">
        <Path
          fill="#379ADC"
          d="M16.166 5.566c0-.526.427-.953.953-.953h.715v.715a.953.953 0 0 1-.953.953.715.715 0 0 1-.715-.715Z"
        />
      </G>
      <G filter="url(#e)">
        <Path
          fill="#fff"
          d="M8.146 12.739c2-.4 4.167.833 5 1.5 1-4 .5-6.834 0-7.5-3 1.5-4.666 5-5 6Z"
        />
        <Path
          fill="url(#f)"
          fillOpacity={0.2}
          d="M8.146 12.739c2-.4 4.167.833 5 1.5 1-4 .5-6.834 0-7.5-3 1.5-4.666 5-5 6Z"
        />
        <G filter="url(#g)">
          <Path
            fill="#1E9B26"
            d="M13.146 14.239c2.4-.8 4 1 4.5 2 1.2-6-2.5-8.834-4.5-9.5.8 2.4.334 6 0 7.5Z"
          />
        </G>
        <G filter="url(#h)">
          <Path
            fill="#1E9B26"
            d="M8.146 12.739c-1.457-2.068-3.815-1.722-4.811-1.214 2.594-5.542 7.806-5.436 9.811-4.786-2.068 1.457-4.378 4.595-5 6Z"
          />
        </G>
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="f"
        x1={10.935}
        x2={10.935}
        y1={6.739}
        y2={14.239}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default RainIcon;
