import { TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useState } from "react";
import { View } from "react-native";
import OpenEye from "../images/svg/OpenEye";
import CloseEye from "../images/svg/CloseEye";
import Input from "./Input";

const InputPassWord = ({ name, control, placeholder, padding,err,onChangeText,styleInput}) => {
  const [eye, setEye] = useState(true);

  const defaultPadding = !padding
    ? {
        paddingEnd: 11,
        paddingStart: 11,
      }
    : padding;

  const styles = ScaledSheet.create({
    inputArea: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: err == true ? "red" : "#D7D7D7",
      borderRadius: 10,
      width: "100%",
    },
    icon: {
      position:"absolute",
      bottom:43,
      right:28

    },
    container:{
      position:"relative",
      marginBottom:"20@s"
    }
  });


  return (
    <View style={styles.container} >
      <Input
        name={name}
        styleInput={styleInput}
        secureTextEntry={eye}
        onChangeText={onChangeText}
        placeholder={placeholder}
        control={control}

      />
      <TouchableOpacity style={styles.icon} onPress={() => setEye(!eye)}>
        {eye == false ? <OpenEye /> : <CloseEye />}
      </TouchableOpacity>
    </View>
  );
};

export default InputPassWord;
