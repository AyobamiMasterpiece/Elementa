import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const WindIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={30}
    transform={{ scale: 2 }}
    fill="none"
    {...props}
  >
    <G fill="#C01B3C" filter="url(#a)">
      <Path d="M4.438 8.313a.438.438 0 0 0 0 .874h10.296a1.75 1.75 0 1 0 1.516-.875H4.437ZM13.956 6.935c-.06.232.08.472.32.493a2.625 2.625 0 1 0-2.371-2.222c.036.237.285.362.512.287.228-.074.346-.32.33-.56a1.758 1.758 0 1 1 1.746 1.637c-.24-.001-.478.133-.537.365Z" />
      <Path d="M5.75 7c0-.242.196-.438.438-.438H14.5v.875H6.187A.437.437 0 0 1 5.75 7ZM6.625 10.5c0-.242.196-.438.438-.438h4.375a.438.438 0 0 1 0 .876H7.061a.438.438 0 0 1-.437-.438ZM9.688 5.688a1.312 1.312 0 1 0-1.238-.875H4.438a.438.438 0 0 0 0 .875h5.25Z" />
    </G>
    <Defs></Defs>
  </Svg>
);
export default WindIcon;
