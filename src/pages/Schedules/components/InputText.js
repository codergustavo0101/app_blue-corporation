import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";
import { ScaledSheet } from "react-native-size-matters";

import { theme } from "../../../global/theme";

const InputText = (props) => {
  const [isValid, setIsValid] = useState(true);

  const styles = ScaledSheet.create({
    input: {
      width: "100%",
      height: props.multiline ? undefined : "50@vs",
      minHeight: "50@vs",
      borderRadius: "10@msr",
      backgroundColor: theme.colors.white,

      borderWidth: "1@msr",
      borderColor: theme.colors.border,

      paddingLeft: "12@msr",

      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "14@msr",
      lineHeight: "20@vs",

      textAlignVertical: props.multiline ? "top" : "center",
      paddingTop: props.multiline ? "12@msr" : 0,

      color: isValid ? theme.colors.black : theme.colors.red0,
    },
  });

  useEffect(() => {
    props.validate && setIsValid(props.validate(props.value));
  }, [props.value]);

  return props.type ? (
    <TextInputMask
      value={props.value}
      onChangeText={(t) => props?.setValue(t)}
      {...props}
      style={{ ...styles.input, ...props.style }}
      type={props.type}
    />
  ) : (
    <TextInput
      value={props.value}
      onChangeText={(t) => props?.setValue(t)}
      {...props}
      style={{ ...styles.input, ...props.style }}
    />
  );
};

export default InputText;
