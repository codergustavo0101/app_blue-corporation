import React, { useRef } from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { theme } from "../../../global/theme";

const SelectTime = ({
  servicesHoursProvider,
  sectionHours,
  setSectionHours,
  sectionHoursEnd,
  setSectionHoursEnd,
}) => {
  let currentChoice = useRef(0);

  const styles = ScaledSheet.create({
    boxCardHours: {
      backgroundColor: "#E9F4FF",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "20@s",
      borderWidth: 1,
      borderColor: theme.colors.colorPrimary,
      width: "60@s",
      height: "30@s",
      marginRight: "10@s",
      marginBottom: "12@s",
    },
    boxCardHoursDisabled: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "20@s",
      borderWidth: 1,
      borderColor: theme.colors.grey0,
      width: "60@s",
      height: "30@s",
      marginRight: "10@s",
      marginBottom: "12@s",
    },
    textTitleDate: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "13@s",
    },
    textDateCardDay: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "14@s",
    },
    textDateCard: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "11@s",
    },
  });

  return (
    <ScrollView
      horizontal={true}
      style={styles.boxCardsCategories}
      showsHorizontalScrollIndicator={false}
    >
      {servicesHoursProvider.hoursAvailable.map((elem, _i) => {
        return (
          <TouchableOpacity
            key={_i}
            onPress={() => {
              if (currentChoice.current === 0) {
                setSectionHours(elem);
                currentChoice.current = 1;
              } else if (currentChoice.current === 1) {
                setSectionHoursEnd(elem);
                currentChoice.current = 0;
              }
            }}
            style={
              sectionHours === elem || sectionHoursEnd === elem
                ? styles.boxCardHours
                : styles.boxCardHoursDisabled
            }
          >
            <Text style={styles.textDateCard}>{elem}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default SelectTime;
