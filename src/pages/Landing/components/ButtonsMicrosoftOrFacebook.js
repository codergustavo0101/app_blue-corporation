import { ScaledSheet } from "react-native-size-matters";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import MicrosoftLogo from "../images/svg/MicrosoftLogo";
import FaceLogo from "../images/svg/FaceLogo";
import { Text } from "react-native";

const ButtonsMicrosoftOrFacebook = ({ microsoftText, facebookText,onPressMicrosoft }) => (
  <View style={styles.boxAuth}>
    <TouchableOpacity onPress={onPressMicrosoft} style={styles.buttonAuth}>
      <MicrosoftLogo />
      <Text style={styles.textAuth}>{microsoftText}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.buttonAuth}>
      <FaceLogo />
      <Text style={styles.textAuth}>{facebookText}</Text>
    </TouchableOpacity>
  </View>
);

const styles = ScaledSheet.create({
  boxAuth: {
    display: "flex",
    gap: "17@s",
  },
  textAuth: {
    fontSize: "14@s",
    fontWeight: 500,
  },
  buttonAuth: {
    display: "flex",
    flexDirection: "row",
    gap: "12@s",
    borderWidth: 1,
    width: "100%",
    height: "48@s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
  },
});

export default ButtonsMicrosoftOrFacebook;
