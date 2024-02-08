import { View } from "react-native";
import ArrowRigth from "../images/svg/ArrowRight";
import ArrowLeft from "../images/svg/ArrowLeft";
import { ScaledSheet } from "react-native-size-matters";
import { theme } from "../../../global/theme";
import MoreIcon from "../images/svg/MoreIcon";

const ArrowsMoreBox = () => (
  <View style={styles.boxOrOption}>
    <View>{<ArrowRigth />}</View>
    <MoreIcon />
    <View>{<ArrowLeft />}</View>
  </View>
);

const styles = ScaledSheet.create({
  boxOrOption: {
    flexDirection: "row",
    alignItems: "center",
    gap: "24@s",
  },
  textOrOption: {
    fontSize: "14@s",
  },
  borderTextOr: {
    borderWidth: 1,
  },
});

export default ArrowsMoreBox;
