import React from "react";
import {View} from 'react-native'
import { TextInput } from "react-native";
import { TextInputMask } from 'react-native-masked-text'


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
    <TextInputMask
    keyboardType={type}
    type={typeMask}
    onChangeText={onChangeText}

    style={err == true ? styleErr :styleInput}
    placeholder={placeholder}
    />
    :
    
    <TextInput
      keyboardType={type}
      onChangeText={onChangeText}
      style={err == true ? styleErr :styleInput}
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
    />
    }
    </View>
  );
};

export default Input;
