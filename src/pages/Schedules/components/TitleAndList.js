import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { theme } from "../../../global/theme";

const TitleAndList = ({ title, list, selected, setSelected, style }) => {
  const styles = ScaledSheet.create({
    container: {
      width: "100%",
      backgroundColor: theme.colors.background,
    },
    title: {
      fontFamily: theme.fonts.fontPoppinsTitleBold,
      fontSize: "25@msr",
      lineHeight: "24@vs",
      color: theme.colors.colorPrimary,
      marginBottom: "29@vs",
      paddingHorizontal: "22@msr",
    },
    list: {
      paddingHorizontal: "5@s",
    },
    item: {
      height: "41@vs",
      backgroundColor: theme.colors.background,

      borderWidth: 1,
      borderColor: theme.colors.secondaryBorder,
      borderRadius: "60@msr",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: "5@s",

      paddingHorizontal: "20@s",
    },
    itemText: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "14@msr",
      lineHeight: "21@vs",
    },
  });
  
  const Item = (props) => {
    const onPress = () => {
      setSelected(props.index);
      props?.onPress();
    };

    return (
      <TouchableOpacity
        style={{
          ...styles.item,
          backgroundColor: props.isSelected
            ? theme.colors.colorPrimary
            : theme.colors.background,
          borderWidth: props.isSelected ? 0 : 1,
        }}
        {...props}
        onPress={onPress}
      >
        <Text
          style={{
            ...styles.itemText,
            color: props.isSelected ? theme.colors.white : theme.colors.black,
          }}
        >
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ ...styles.container, ...style }}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        style={styles.list}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {list.map((item, _i) => (
          <Item
            key={_i}
            index={_i}
            text={item.text}
            onPress={item.onPress}
            isSelected={selected === _i}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TitleAndList;
