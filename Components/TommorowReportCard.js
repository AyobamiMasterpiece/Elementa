import React from "react";
import Card from "../UI/Card";
import { View, Text, ScrollView } from "react-native";
import SunnySvg from "../assets/weathericon/SunnySvg";
import IconReport from "./IconReport";
import DayReportCard from "./DayReportCard";
import dayjs from "dayjs";

export default function TommorowReportCard({ tommorow }) {
  const {
    date,
    day: {
      avgtemp_c: celsius,
      avgtemp_f: farahneit,
      totalprecip_mm: rain,
      avghumidity: humidity,
      maxwind_kph: wind,
    },
  } = tommorow;
  // console.log(new Date(date).getDay());
  // console.log(dayjs().format("dddd"), "playing");
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
          <Text>{celsius.toFixed(2)}°</Text>

          <SunnySvg type={"small"}></SunnySvg>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconReport value={rain + "cm"} type="rain"></IconReport>
        <IconReport type="wind" value={wind + "km/h"}></IconReport>
        <IconReport value={humidity + "%"}></IconReport>
      </View>
    </Card>
  );
}
