import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { theme } from "../../../global/theme";

const Button = ({ name, width, heigth, Icon, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.buttonContainer, height: heigth, width: width }}
    >
      {Icon && <Icon />}
      <Text style={styles.textButton}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  buttonContainer: {
    backgroundColor: theme.colors.colorPrimary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 200,
    flexDirection: "row",
    alignItems: "center",
    gap: "8@s",
  },
  textButton: {
    color: theme.colors.white,
    fontFamily: theme.fonts.fontPoppinsTitleBold,
    fontSize: "11@s",
  },
});

export default Button;