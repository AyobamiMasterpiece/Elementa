import React from "react";
import { Text, View } from "react-native";
import RainIcon from "../assets/appIcon/RainIcon";

export default function IconReport() {
  return (
    <View
      style={{
        // alignItems: "flex-start",
        alignItems: "center",
        marginHorizontal: 7,
        padding: 5,
      }}
    >
      <RainIcon></RainIcon>
      <Text>{"1 cm"}</Text>
    </View>
  );
}
