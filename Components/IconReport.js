import React from "react";
import { Text, View } from "react-native";
import RainIcon from "../assets/appIcon/RainIcon";
import WindIcon from "../assets/appIcon/WindIcon";
import HumidityIcon from "../assets/appIcon/HumidityIcon";

export default function IconReport({ value, type }) {
  let icon;
  if (type == "rain") {
    icon = <RainIcon></RainIcon>;
  } else if (type == "wind") {
    icon = <WindIcon></WindIcon>;
  } else {
    icon = <HumidityIcon></HumidityIcon>;
  }
  return (
    <View
      style={{
        // alignItems: "flex-start",
        alignItems: "center",
        marginHorizontal: 7,
        padding: 5,
      }}
    >
      {icon}
      <Text
        style={{
          fontSize: 13,
        }}
      >
        {value}
      </Text>
    </View>
  );
}
