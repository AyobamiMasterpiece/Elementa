import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../UI/Card";
import SunnySvg from "../assets/weathericon/SunnySvg";
import CelsiusIcon from "../UI/CelsiusIcon";
import TommorowReportCard from "../Components/TommorowReportCard";
import IconReport from "../Components/IconReport";
import DayReportCard from "../Components/DayReportCard";

export default function SevenDays() {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#FEB054", "#FEE3BC"]}
        style={styles.linearGradientContainer}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <TommorowReportCard></TommorowReportCard>

          {[0, 1, 2, 3, 4, 5, 6].map(() => {
            return <DayReportCard></DayReportCard>;
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
