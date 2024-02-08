import { useState, useEffect } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { theme } from "../../../global/theme";
import CheckUser from "../images/svg/CheckUser";
import StarIcon from "../images/svg/StarIcon";
import api from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import userIcon from "../images/png/no_user_image.png";
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
const CardServiceUser = ({
  name,
  note,
  evaluationsCount,
  photo,
  office,
  mail,
  localAvaliation,
  totalAvaliationsLocal,
  sub_offices,
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
    
    if (photo != null) {
      
        
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
        <View style={styles.photo}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  const navigation = useNavigation()
  

  const redirectToProviderPage = () => {
    AsyncStorage.setItem("@PHOTO_TEST",photo)
    navigation.navigate("Provider")
  }


  return (
    <TouchableOpacity
      onPress={() => {
        redirectToProviderPage()
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
          {localAvaliation && (
            <Text style={styles.textUser}>{Number(localAvaliation).toFixed(2).replace(".", ",")}</Text>
          )}
          <StarIcon />
          
        </View>
        <Text style={styles.textNotesUser}>
          {totalAvaliationsLocal && (
            <>
              {totalAvaliationsLocal}{" "}
              {totalAvaliationsLocal === 1 ? "avaliaçāo" : "avaliações"}
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