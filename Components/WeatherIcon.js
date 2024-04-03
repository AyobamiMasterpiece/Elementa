import LottieView from "lottie-react-native";
import React from "react";

export default function WeatherIcon({ text }) {
  return (
    <LottieView
      source={require("../assets/SunCloudRain.json")}
      style={{ width: "50%", height: "100%" }}
      autoPlay
      loop
    ></LottieView>
  );
}
