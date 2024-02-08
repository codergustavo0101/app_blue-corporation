import { useRef } from "react";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { theme } from "../../../global/theme";

const BoxInputValidation = ({onChangeText}) => {
  const textInput = useRef(null);

  const handlePress = () => {
    textInput.current.focus();
  };

  return (
    <TouchableOpacity
      style={styles.boxInputValidation}
      onPress={() => handlePress()}
    >
      <TextInput
        keyboardType="number-pad"
        ref={textInput}
        onChangeText={onChangeText}
        maxLength={1}
        style={{ transform: [{ translateX: 5 }] }}
      ></TextInput>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  boxInputValidation: {
    borderWidth: 1,
    width: "56@s",
    height: "56@s",
    borderRadius: "6@s",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BoxInputValidation;
