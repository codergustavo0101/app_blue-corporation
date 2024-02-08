import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/core";
import companyIcon from "../images/png/companyIcon.png";
import Menu from "../images/svg/Menu"
import { theme } from "../../../global/theme";
import UserIcon from "../images/png/man.png";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../services/api';
const Header = ({ userPhoto }) => {
  const [image, setImage] = useState()
  const navigation = useNavigation();

//   async function get() {
//     const mail = await AsyncStorage.getItem("@MAIL")

//     const response = await api.post("client/get/by/mail", { mail: mail })


//     setImage(response.data[0].image)

//   }

//   navigation.addListener("blur", () => {

//     get()
//   })

//   useEffect(() => {
//     get()
//   }, [])

const getImage = async () => {
  const response = await AsyncStorage.getItem("@USER_IMAGE")
  setImage(response)
}

navigation.addListener("focus",() => {
  getImage()
},[])

  const styles = ScaledSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "145@vs",
      borderWidth:1,
      borderColor:"#D8D8D8",
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      paddingLeft: "20@s",
      paddingRight: "20@s",
      backgroundColor: theme.colors.background,
    },
  });


  const Photo = () => {
    if (image) {
      return (
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{ uri: image }}
        />
      );
    }
    

    return (
      <Image
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
        source={UserIcon}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Menu />
      </TouchableOpacity>

      <TouchableOpacity >
      <Image source={companyIcon} style={{width:180,height:100}} />
      </TouchableOpacity>
      
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate("Profile")}
      >
        <Photo />
      </TouchableOpacity>
    </View>
  );
};

export default Header