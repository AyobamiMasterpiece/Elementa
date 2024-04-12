import React from "react";
import Card from "../UI/Card";
import RainIcon from "../assets/appIcon/RainIcon";
import { StyleSheet, Text, View } from "react-native";
import WindIcon from "../assets/appIcon/WindIcon";
import { Svg } from "react-native-svg";
import HumidityIcon from "../assets/appIcon/HumidityIcon";

export default function MainWeatherReportCard({ description, value, type }) {
  console.log(typeof value);
  let svg = undefined;
  if (type == "rain") {
    svg = <RainIcon></RainIcon>;
  } else if (type == "wind") {
    svg = <WindIcon></WindIcon>;
  } else {
    svg = <HumidityIcon></HumidityIcon>;
  }
  return (
    <Card
      style={{
        marginVertical: 10,
      }}
    >
      <View style={styles.root}>
        {svg}
        <View style={styles.textContainer}>
          <Text> {description}</Text>
          <Text> {value}</Text>
        </View>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",

    alignItems: "center",
    // backgroundColor: "blue",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "red",
    //width: "100%",
    flex: 1,
  },
});
