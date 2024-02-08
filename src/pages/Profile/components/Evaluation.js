import React from "react";
import { View, Text, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import sampleUserImage from "../images/png/sampleUserImage.png";

import StarIcon from "../images/svg/StarIcon";
import StarIconDisabled from "../images/svg/StarIconDisabled";

import { theme } from "../../../global/theme";

const Evaluation = ({ provider, description, rating }) => {
  const styles = ScaledSheet.create({
    container: {
      width: "180@s",
      height: "156@vs",
      backgroundColor: "#E9F4FF",

      paddingVertical: "12@vs",
      paddingHorizontal: "16@s",
      marginRight: "20@s",

      borderRadius: "8@msr",

      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    provider: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    image: {
      width: "34@msr",
      height: "34@msr",
      borderRadius: "17@msr",
      marginRight: "8@s",
    },
    name: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "14@msr",
      lineHeight: "21@vs",
    },
    description: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "11@msr",
      lineHeight: "16@vs",
    },
    rating: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
  });

  const Photo = () => {
    if (provider.image_url) {
      return (
        <Image style={styles.image} source={{ uri: provider.image_url }} />
      );
    }

    return <Image style={styles.image} source={sampleUserImage} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.provider}>
        <Photo />
        <Text style={styles.name}>{provider.name}</Text>
      </View>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.rating}>
        {Array(rating)
          .fill(null)
          .map((_, i) => {
            return <StarIcon key={i} style={{ marginHorizontal: 2.5 }} />;
          })}
        {Array(5 - rating)
          .fill(null)
          .map((_, i) => {
            return (
              <StarIconDisabled key={i} style={{ marginHorizontal: 2.5 }} />
            );
          })}
      </View>
    </View>
  );
};

export default Evaluation;
