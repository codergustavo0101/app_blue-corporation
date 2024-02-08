import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { theme } from "../../../global/theme";

const CheckBox = ({ text, isChecked, setIsChecked, disabled }) => {
  return (
    <BouncyCheckbox
      size={19}
      fillColor={theme.colors.colorPrimary}
      unfillColor="#FFFFFF"
      text={text}
      iconStyle={{ borderColor: theme.colors.colorPrimary, borderRadius: 5 }}
      innerIconStyle={{ borderWidth: 1, borderRadius: 5 }}
      textStyle={{
        fontFamily: theme.fonts.fontPoppinsContent,
        textDecorationLine: "none",
      }}
      isChecked={isChecked}
      onPress={(isChecked) => {
        setIsChecked(isChecked);
      }}
      disabled={disabled}
    />
  );
};

export default CheckBox;
