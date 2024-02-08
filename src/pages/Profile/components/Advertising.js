import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import AdvertisingImage from "../images/svg/AdvertisingImage";

import { theme } from "../../../global/theme";

const Advertising = () => {
  const styles = ScaledSheet.create({
    container: {
      width: "100%",
      height: "155@vs",
      borderRadius: "13@msr",
      backgroundColor: theme.colors.blue0,
      marginVertical: "20@vs",

      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-around",

      padding: "16@msr",
    },
    text: {
      fontFamily: theme.fonts.fontPoppinsTitleBold,
      fontSize: "17@msr",
      lineHeight: "24@vs",
      width: "75%",
    },
    button: {
      width: "160@s",
      height: "35@vs",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      backgroundColor: theme.colors.colorPrimary,
      borderRadius: "20@msr",
    },
    buttonText: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "14@msr",
      lineHeight: "24@vs",
      color: theme.colors.white,
    },
    image: {
      position: "absolute",
      right: 0,
      bottom: 0,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Deseja se tornar um prestador da IZI.Jobs?
      </Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.75}>
        <Text style={styles.buttonText}>Clique aqui</Text>
      </TouchableOpacity>
      <AdvertisingImage style={styles.image} />
    </View>
  );
};

export default Advertising;
