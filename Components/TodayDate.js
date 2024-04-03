import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { getdateInShortFormat } from "../Util/dateFunctions";

export default function TodayDate() {
  return (
    <View>
      <Text style={styles.text}>{getdateInShortFormat()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "grey",
    fontSize: 17,
  },
});
