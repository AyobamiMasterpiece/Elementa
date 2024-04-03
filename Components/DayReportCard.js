import React from "react";
import Card from "../UI/Card";
import { Text, View } from "react-native";
import SunnySvg from "../assets/weathericon/SunnySvg";

export default function DayReportCard() {
  return (
    <Card
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text>Thursday</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text>22°</Text>

        <SunnySvg type={"small"}></SunnySvg>
      </View>
    </Card>
  );
}
