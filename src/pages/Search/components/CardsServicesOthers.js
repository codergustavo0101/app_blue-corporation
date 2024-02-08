import { useState, useEffect } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Text } from "react-native";
import StarIcon from "../images/svg/StarIcon";
import { theme } from "../../../global/theme";
import api from "../../../services/api";

const CardsServicesOthers = ({
  name,
  note,
  services,
  evaluationsCount,
  photo,
  offices,
  mail,
  image,
  sub_offices,
  distance,
}) => {
  const [subOffice, setSubOffice] = useState("");

  const [avaliation,setAvaliation] = useState()
  const [service,setService] = useState()

  const getInfoProvider = async () => {

    
    const response = await api.post("provider/get/avaliation",{
      mail:mail
    })
    setAvaliation(response.data.avaliation)
    
    const serviceProvider = await api.post("provider/get/service",{
      mail:mail
    })

    setService(serviceProvider.data[0].category)

  }

  useEffect(() => {

    getInfoProvider()

  },[mail])


  const Photo = () => {
    if (photo) {
      return (
        <Image
          style={styles.photoUser}
          source={{
            uri: photo,
          }}
        />
      );
    }

    return (
      <></>
    );
  };



  return (
    <TouchableOpacity style={styles.boxCard}>
      <View style={styles.photoUserBox}>
        <Image style={styles.photoUser} source={{uri:image}} />
        <View style={{ position: "absolute", right: 0, bottom: 5 }}>
        </View>
      </View>
      <View style={styles.boxDetailsUser}>
        <Text style={styles.textNameUser}>{name}</Text>
        <Text style={styles.textTypeUser}>{services}</Text>
        <View style={styles.boxNotes}>
          <Text style={styles.textNoteUser}>{Number(note).toFixed(2).replace(".",",")}</Text>
          <View style={styles.starIcon}>
            <StarIcon />
          </View>
          <Text style={styles.textTotalNotes}>
            {evaluationsCount}{" "}
            {evaluationsCount === 1 ? "avaliaçāo" : "avaliações"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  boxCard: {
    flexDirection: "row",
    gap: "16@s",
    alignItems: "center",
    position: "relative",
    width: "100%",

  },
  photoUserBox: {
    position: "relative",
    width: "52@s",
  },
  photoUser: {
    width: "52@msr",
    height: "52@msr",
    borderRadius: "26@msr",
  },
  boxDetailsUser: {
    gap: "1@s",
  },
  textNameUser: {
    fontFamily: theme.fonts.fontPoppinsTitleBold,
    fontSize: "13@s",
  },
  textTypeUser: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "12@s",
  },
  textNoteUser: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "11@s",
  },
  boxNotes: {
    flexDirection: "row",
    gap: "6@s",
    alignItems: "center",
  },
  starIcon: {
    transform: [{ translateY: -2 }],
  },
  textTotalNotes: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "10@s",
  },
  textDistance: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "12@s",
    position: "absolute",
    right: 0,
  },
  photo: {
    width: "50@msr",
    height: "50@msr",
    borderRadius: "35@msr",
  },
});

export default CardsServicesOthers;
