import { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { theme } from "../../../global/styles/theme";
import CheckUser from "../images/svg/CheckUser";
import StarIcon from "../images/svg/StarIcon";
import api from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userIcon from "../../../images/png/man.png";

const CardServiceUser = ({
  name,
  note,
  evaluationsCount,
  photo,
  office,
  mail,
  sub_offices,
  navigation,
  providerId
}) => {
  const [avaliation, setAvaliation] = useState()
  
  const getProviderAvaliation = async () => {
    const response = await api.get(`provider/get/avaliation/${providerId}`)

    setAvaliation(response.data)
  }

  useEffect(() => {
    getProviderAvaliation()
  }, [])

  const Photo = () => {
    if (photo) {
      return (
        <Image
          style={styles.photo}
          source={{
            uri: photo,
          }}
        />
      );
    }

    return (
      <Image
        style={styles.photo}
        source={userIcon}
      />
    );
  }

  return (
    <TouchableOpacity
      onPress={() => {
        AsyncStorage.setItem("@PROVIDER_ID", providerId)
        navigation.navigate("ProviderDetails");
      }}
      style={styles.cardUser}
    >
      <View
        style={{
          position: "relative",
        }}
      >
        <Photo />
        <View style={{ position: "absolute", right: 0, bottom: 5 }}>
          <CheckUser />
        </View>
      </View>
      <View style={styles.boxContentUser}>
        <Text style={styles.textNameUser}>{name}</Text>
        <Text style={styles.textUser}>{office}</Text>
        <View style={{ flexDirection: "row", gap: 8 }}>
          {avaliation && (
            <Text style={styles.textUser}>{Number(avaliation.averageRating).toFixed(2).replace(".", ",")}</Text>
          )}
          <StarIcon />
        </View>
        <Text style={styles.textNotesUser}>
          {avaliation && (
            <>
              {avaliation.totalAvaliations}{" "}
              {avaliation.totalAvaliations === 1 ? "avaliaçāo" : "avaliações"}
            </>
          )}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = ScaledSheet.create({
  cardUser: {
    alignItems: "center",
    gap: "12@s",
    maxWidth: "120@s",
    marginRight: "32@s",
    marginBottom: "10@s",
  },
  boxContentUser: {
    alignItems: "center",
    gap: 2,
  },
  textNameUser: {
    fontFamily: theme.fonts.fontPoppinsTitleBold,
    fontSize: "13@s",
  },
  textUser: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "12@s",
  },
  textNotesUser: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "11@s",
  },
  photo: {
    width: "70@msr",
    height: "70@msr",
    borderRadius: "35@msr",
  },
})

export default CardServiceUser;
