import React from "react";
import { Text } from "react-native";

const CelsiusIcon = ({ iscelsius }) => {
  return (
    <Text
      style={{
        fontSize: 20,
      }}
    >
      {iscelsius ? "°C" : "°F"}
    </Text>
  );
};

export default CelsiusIcon;
