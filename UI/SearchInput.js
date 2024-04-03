import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import IconBtn from "./Iconbtn";

export default function SearchInput({
  show,
  onPress,
  location,
  changeLocationSearch,
}) {
  return (
    <View
      style={[
        styles.root,
        {
          backgroundColor: show ? "rgba(255, 255, 255, 0.5)" : "transparent",
        },
      ]}
    >
      {show ? (
        <TextInput
          style={[styles.input]}
          autoFocus={true}
          value={location}
          onChangeText={(text) => {
            changeLocationSearch(text);
          }}
        ></TextInput>
      ) : null}
      <IconBtn name={"search"} size={25} onPress={onPress}></IconBtn>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    // backgroundColor: "red",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    // flex: 1,
    justifyContent: "flex-end",
    borderRadius: 20,
    // alignSelf: "flex-start",
    marginVertical: 30,

    flexDirection: "row",
  },
  input: {
    flex: 1,
    // backgroundColor: "pink",
    marginHorizontal: 10,
  },
});
