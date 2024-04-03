import React from "react";
import { StyleSheet, View } from "react-native";

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}
const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
});
