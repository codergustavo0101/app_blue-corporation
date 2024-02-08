import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { theme } from "../../../global/theme";

const SelectDate = ({ dateList, setSectionService, sectionService }) => {
  const styles = ScaledSheet.create({
    boxCardShedules: {
      backgroundColor: "#E9F4FF",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "6@s",
      borderWidth: 1,
      borderColor: theme.colors.colorPrimary,
      width: "59@s",
      height: "68@s",
      marginRight: "10@s",
      marginBottom: "12@s",
    },
    boxCardShedulesDisabled: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "6@s",
      borderWidth: 1,
      borderColor: theme.colors.grey0,
      width: "59@s",
      height: "68@s",
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
      {dateList.map((elem, _i) => {
        return (
          <TouchableOpacity
            key={_i}
            onPress={() => setSectionService(elem)}
            style={
              sectionService.day == elem.day &&
              sectionService.month == elem.month
                ? styles.boxCardShedules
                : styles.boxCardShedulesDisabled
            }
          >
            <Text style={styles.textDateCardDay}>{elem.day}</Text>
            <Text style={styles.textDateCard}>{elem.month}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default SelectDate;
