import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../UI/Card";
import SunnySvg from "../assets/weathericon/SunnySvg";
import CelsiusIcon from "../UI/CelsiusIcon";
import TommorowReportCard from "../Components/TommorowReportCard";
import IconReport from "../Components/IconReport";
import DayReportCard from "../Components/DayReportCard";
import { useGetForecast } from "../api/weather";
import { useLocation } from "../Context/LocationContext";

export default function SevenDays() {
  const { longitude, latitude } = useLocation();
  const {
    data: {
      forecast: { forecastday },
    },
    isLoading,
    isError,
  } = useGetForecast(longitude, latitude);
  const [today, tommorow] = forecastday;
  const remainingDays = forecastday.slice(2);
  console.log(remainingDays.length, "p");

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#FEB054", "#FEE3BC"]}
        style={styles.linearGradientContainer}
      >
        <TommorowReportCard tommorow={tommorow}></TommorowReportCard>
        <ScrollView showsVerticalScrollIndicator={false}>
          {remainingDays.map((dayObj) => {
            const { date } = dayObj;
            return <DayReportCard key={date} dayObj={dayObj}></DayReportCard>;
          })}
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "red",
  },
  linearGradientContainer: {
    flex: 1,
    padding: 10,
  },
});
