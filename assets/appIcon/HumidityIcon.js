import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const HumidityIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={40}
    transform={{ scale: 2 }}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#379ADC"
        d="M8.528 14.296a4.661 4.661 0 0 1 0-6.592L11 5.232l2.472 2.472a4.661 4.661 0 0 1 0 6.592 3.496 3.496 0 0 1-4.944 0Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default HumidityIcon;
