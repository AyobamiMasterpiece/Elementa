import React from "react";
import Card from "../UI/Card";
import { Text, View } from "react-native";
import SunnySvg from "../assets/weathericon/SunnySvg";
import dayjs from "dayjs";

export default function DayReportCard({ dayObj }) {
  const {
    date,
    day: {
      avgtemp_c: celsius,
      avgtemp_f: farahneit,
      totalprecip_mm: rain,
      avghumidity: humidity,
      maxwind_kph: wind,
    },
  } = dayObj;
  const DAY_ = dayjs(date).format("dddd");
  return (
    <Card
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text>{DAY_}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            minWidth: "15%",
            // alignItems: "flex-end",
          }}
        >
          {celsius}°
        </Text>

        <SunnySvg type={"small"}></SunnySvg>
      </View>
    </Card>
  );
}
