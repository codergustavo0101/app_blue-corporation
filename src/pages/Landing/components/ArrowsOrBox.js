import { View, Text } from "react-native";
import ArrowRight from "../images/svg/ArrowRight";
import ArrowLeft from "../images/svg/ArrowLeft";
import { ScaledSheet } from "react-native-size-matters";
import { theme } from "../../../global/theme";

const ArrowsOrBox = () => (
  <View style={styles.boxOrOption}>
    <View>{<ArrowRight />}</View>
    <Text style={styles.textOrOption}>OU</Text>
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

export default ArrowsOrBox;
