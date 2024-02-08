import React from "react";
import { View } from "react-native";

import { theme } from "../../../global/theme";

const Spacer = ({ marginVertical, vertical }) => {
  return (
    <View
      style={{
        width: vertical ? 1 : "100%",
        height: vertical ? "100%" : 1,
        marginVertical,
      }}
    />
  );
};

export default Spacer;
