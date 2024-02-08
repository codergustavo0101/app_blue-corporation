import React from "react";
import { View, Text } from 'react-native'
import { TextInput } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import { ScaledSheet } from 'react-native-size-matters'
import { theme } from "../../../global/theme";

const Input = ({
  name,
  control,
  placeholder,
  secureTextEntry,
  styleInput,
  type,
  onChangeText,
  mask,
  typeMask,
  styleErr,
  err
}) => {



  return (
    <View>
      {
        mask == true
          ?

          <>
            <Text style={styles.label}>{name}</Text>
            <TextInputMask
              keyboardType={type}
              type={typeMask}
              onChangeText={onChangeText}
        
              style={err == true ? styleErr : styleInput}
              placeholder={placeholder}
            />
          </>

          :

          <>
            <Text style={styles.label}>{name}</Text>
            <TextInput
              keyboardType={type}
              onChangeText={onChangeText}
              style={err == true ? styleErr : styleInput}
              secureTextEntry={secureTextEntry}
              placeholder={placeholder}
            />
          </>
      }
    </View>
  );
};

const styles = ScaledSheet.create({
  label: {
    fontFamily: theme.fonts.PopinsRegular,
    fontSize: "14@s",
    height: "20@s",
    color: "black"
  }
})

export default Input;
