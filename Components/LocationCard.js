import React from "react";
import Card from "../UI/Card";
import { Keyboard, Pressable, Text } from "react-native";
import { useLocation } from "../Context/LocationContext";

export default function LocationCard({ location, lat, lon }) {
  const { updateLocationData } = useLocation();
  return (
    <Pressable
      android_ripple={{
        color: "white",
      }}
      style={{
        padding: 0,
        //  backgroundColor: "red",
      }}
      onPress={() => {
        updateLocationData(lon, lat);
        Keyboard.dismiss();
      }}
    >
      <Card
        style={{
          padding: 0,
          paddingHorizontal: 15,
          paddingVertical: 5,
          flex: 1,
          // backgroundColor: "red",
        }}
      >
        <Text>{location}</Text>
      </Card>
    </Pressable>
  );
}
