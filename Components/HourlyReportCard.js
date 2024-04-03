import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import CelsiusIcon from "../UI/CelsiusIcon";
import SunnySvg from "../assets/weathericon/SunnySvg";
import SunnyCloudySvg from "../assets/weathericon/SunnyCloudySvg";
import CloudySvg from "../assets/weathericon/CloudySvg";
import SunnyCloudyRainy from "../assets/weathericon/SunnyCloudyRainy";
import { extractTimeHHMM } from "../Util/dateFunctions";

export default function HourlyReportCard({ hourReport, isCloseToLeftEdge }) {
  let { time, icon, text, temp_c: celsius } = hourReport;
  // console.log(text);

  time = extractTimeHHMM(time);
  if (parseInt(time) == new Date().getHours()) {
    time = "Now";
  }
  // console.log(extractTimeHHMM(time));

  return (
    <View
      style={[styles.root, isCloseToLeftEdge && { height: "100%", opacity: 1 }]}
    >
      <Text>{time}</Text>
      <SunnySvg type={"small"}></SunnySvg>
      {/* <Image
        source={{ uri: `https:${icon}` }}
        // width={'60%'}
        style={{
          aspectRatio: 1,
          width: "20%",
        }}
      ></Image> */}
      <Text style={{ fontWeight: "bold" }}>{celsius.toFixed(2)}°</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    // width: "4%",
    // minWidth: "5%",
    opacity: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 50,
    justifyContent: "space-between",
  },
});
