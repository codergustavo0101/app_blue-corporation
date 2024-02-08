import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ScaledSheet } from "react-native-size-matters";

import { theme } from "../../../global/theme";

const Select = ({ selectedValue, setSelectedValue, items, onChange }) => {
  const styles = ScaledSheet.create({
    container: {
      width: "100%",
      height: "50@vs",
      borderWidth: "1@msr",
      borderColor: theme.colors.border,
      borderRadius: "10@msr",
    },
  });

  React.useEffect(() => {
    setSelectedValue(-1);
  }, []);

  return (
    <View style={styles.container}>
      <Picker
        mode="dialog"
        selectedValue={selectedValue}
        onValueChange={(itemValue) => {
          setSelectedValue(itemValue);
          onChange && onChange(itemValue);
        }}
      >
        <Picker.Item
          style={{
            fontFamily: theme.fonts.fontPoppinsContent,
            fontSize: 14,
            lineHeight: 18,
          }}
          label="Selecione"
          value={-1}
        />
        {items?.map((item) => {
          return (
            <Picker.Item
              style={{
                fontFamily: theme.fonts.fontPoppinsContent,
                fontSize: 14,
                lineHeight: 18,
              }}
              key={item.value}
              label={item.label}
              value={item.value}
            />
          );
        })}
      </Picker>
    </View>
  );
};

export default Select;
