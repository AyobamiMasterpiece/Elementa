import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, View } from "react-native";

export default function IconBtn({ name, size, color, onPress }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={{
          backgroundColor: "white",
          borderRadius: 50,
          padding: 5,
        }}
        android_ripple={{
          color: "black",
          borderless: true, // Set to true for circular ripple
          radius: 20,
          // radius: 50,
          // foreground: true,
        }}
      >
        <Ionicons name={name} size={size} color={color}></Ionicons>
      </Pressable>
    </View>
  );
}
