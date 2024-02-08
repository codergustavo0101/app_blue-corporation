import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import BackButton from "../images/svg/BackButton";

import { theme } from "../../../global/theme";

const PageHeader = ({ title, onBackPress }) => {
  const styles = ScaledSheet.create({
    container: {
      width: "100%",
      height: "70@vs",
      backgroundColor: theme.colors.background,

      position: "absolute",
      left: 0,

      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      
      borderBottomWidth: "1@msr",
      borderBottomColor: theme.colors.border,
    },
    button: {
      width: "32@msr",
      height: "32@msr",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-start",

      position: "absolute",
      top: "19@vs",
      left: 18,
    },
    text: {
      fontFamily: theme.fonts.fontPoppinsTitleBold,
      fontSize: "18@msr",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onBackPress}>
        <BackButton />
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default PageHeader;
