import React from "react";
import { View, Text, TouchableOpacity, LogBox } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import * as ImagePicker from "expo-image-picker";

import Cloud from "../images/svg/Cloud";
import Check from "../images/svg/Check";
import Pending from "../images/svg/Pending";

import { theme } from "../../../global/theme";

const SendFile = ({ text, subtext, setFile, not,onPress }) => {

  const styles = ScaledSheet.create({
    container: {
      width: "100%",
      height: "80@s",

      borderRadius: "10@msr",
      borderWidth: "1@msr",
      borderStyle: "dashed",
      borderColor: theme.colors.secondaryBorder,

      padding: "16@msr",
      marginVertical: "10@vs",

      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    left: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      flex: 1,
      height: "100%",
    },
    texts: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      height: "100%",
      marginLeft: "17@s",
      flex: 1,
      marginRight: "27@s",
    },
    text: {
      fontFamily: theme.fonts.fontPoppinsTitleBold,
      fontSize: "12@msr",
      lineHeight: "18@vs",
    },
    subtext: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "9@msr",
      lineHeight: "14@vs",
      marginTop: "3@vs",
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <Cloud />
        <View style={styles.texts}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.subtext}>{subtext}</Text>
        </View>
      </View>
      {not == true ? <Pending /> : <Check style={{ flex: 1 }}  />}
    </TouchableOpacity>
  );
};

export default SendFile;
