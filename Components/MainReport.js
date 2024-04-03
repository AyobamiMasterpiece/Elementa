import React, { useState } from "react";
import SunnySvg from "../assets/weathericon/SunnySvg";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import CloudyRainySvg from "../assets/weathericon/CloudyRainySvg";
import CelsiusIcon from "../UI/CelsiusIcon";
import SunnyCloudySvg from "../assets/weathericon/SunnyCloudySvg";
import LottieView from "lottie-react-native";
import WeatherIcon from "./WeatherIcon";

export default function MainReport({
  temperatureCelsius,
  text,
  icon,
  temperatureFahrenheit,
}) {
  const [iscelsius, setIsCelsius] = useState(true);
  const temperature = iscelsius ? temperatureCelsius : temperatureFahrenheit;

  return (
    <View style={styles.root}>
      {/* <SunnyCloudySvg></SunnyCloudySvg> */}
      <WeatherIcon></WeatherIcon>

      <View>
        <View style={styles.tempeartureContainer}>
          <Pressable
            onPress={() => setIsCelsius(!iscelsius)}
            android_ripple={{
              color: "white",
              borderless: true,
              radius: 50,
            }}
          >
            <Text style={styles.tempearture}>{temperature.toFixed(1)}</Text>
            <View style={styles.degreecontainer}>
              <CelsiusIcon iscelsius={iscelsius}></CelsiusIcon>
            </View>
          </Pressable>
        </View>

        <Text style={styles.weatherText}>{text}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 10,

    // backgroundColor: "pink",
  },
  tempearture: {
    fontSize: 50,
    lineHeight: 90,
    margin: 0,
    padding: 0,
  },
  tempeartureContainer: {
    position: "relative",
    // backgroundColor: "orange",
  },
  degreecontainer: {
    position: "absolute",
    // top: -20,
    right: -10,
  },
  weatherText: {
    fontSize: 16,
    margin: 0,
    padding: 0,
    // lineHeight: 29,
  },
});
