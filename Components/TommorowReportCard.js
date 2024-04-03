import React from "react";
import Card from "../UI/Card";
import { View, Text, ScrollView } from "react-native";
import SunnySvg from "../assets/weathericon/SunnySvg";
import IconReport from "./IconReport";
import DayReportCard from "./DayReportCard";

export default function TommorowReportCard() {
  return (
    <Card
      style={{
        marginVertical: 40,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text>Tommorow</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>22°</Text>

          <SunnySvg type={"small"}></SunnySvg>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <IconReport></IconReport>
        <IconReport></IconReport>
        <IconReport></IconReport>
      </View>
    </Card>
  );
}
