import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import BackButton from "../images/svg/BackButton";

import { theme } from "../../../global/theme";

const PageHeader = ({ title, onBackPress }) => {
  const styles = ScaledSheet.create({
    container: {
      width: "100%",
      height: "90@s",
      backgroundColor: theme.colors.background,

      position: "absolute",
      left: 0,
      paddingTop:"20@s",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomColor: "black",
    },
    button: {
      width: "32@msr",
      height: "32@msr",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-start",

      position: "absolute",
      top: "37@vs",
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
