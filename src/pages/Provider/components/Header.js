import { View, TouchableOpacity, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/core";

import Logo from "../images/svg/Logo";
import Menu from "../images/svg/Menu";

import { theme } from "../../../global/styles/theme";
import userIcon from "../../../images/png/man.png";

const Header = ({ userPhoto }) => {
  const navigation = useNavigation();

  const styles = ScaledSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "145@vs",
      borderBottomColor: theme.colors.grey5,
      borderBottomWidth: 1,
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      paddingLeft: "20@s",
      paddingRight: "20@s",
      backgroundColor: theme.colors.background,
    },
  });

  const Photo = () => {
    if (userPhoto) {
      return (
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{ uri: userPhoto }}
        />
      );
    }

    return (
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 48
          }}
          source={userIcon} />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Menu />
      </TouchableOpacity>
      <Logo />
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate("Profile")}
      >
        <Photo />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
