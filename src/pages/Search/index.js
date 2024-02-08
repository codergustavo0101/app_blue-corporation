import React, { useEffect, useState } from "react";
import { ScaledSheet } from "react-native-size-matters";
import ToastManager, { Toast } from "toastify-react-native";
import {
  StatusBar,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { theme } from "../../global/theme";
import { TouchableOpacity } from "react-native";
import SearchIconInput from "./images/svg/SearchIconInput";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArrowBack from "./images/svg/ArrowBack";
import { Text } from "react-native";
import CardServiceUser from "./components/CardServiceUser";
import CardsServicesOthers from "./components/CardsServicesOthers";
import profileUser from "./images/png/profile1.png"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native";

const Search = () => {
  const navigation = useNavigation();


  const [providers, setProviders] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  /* TOP PROVIDERS */
  const [topProviders,setTopProviders] = useState([])

  /* OUTHERS PROVIDERS */

  const [outhersProviders,setOuthersProviders] = useState([])

  const [typeService,setTypeService] = useState()

  const getService = async () => {
    const response = await AsyncStorage.getItem("@TYPE_SERVICE")

    setTypeService(response)

  }

  navigation.addListener("focus",() => {

    getService()

  },[])

  useEffect(() => {

    getService()

  },[])


  /* LIST SERVICE USERS */
  const listServicesUsers = [
    {
      name: "Henrique Macedo",
      type: "Fotógrafo",
      note: 5,
      image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/201603022050210889.jpg?alt=media&token=64a3120c-e2f0-4ff4-b9d4-66c90c7d68ed",
      totalNotes: "320",
      profileImg: profileUser,
      distance: "2 KM"
    },
    {
      name: "Amanda costa",
      image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/mulher-de-sueter-casual-verde-e-chapeu-ao-ar-livre-na-parede-branca-turista-feliz-positiva-com-camera-profissional.jpg?alt=media&token=e30ea9a8-1b01-4871-93da-a2cc4bab1978",
      type: "Fotógrafo",
      note: 4,
      totalNotes: "212",
      profileImg: profileUser,
      distance: "4 KM"
    },
    {
      name: "Luan perreira",
      type: "Fotógrafo",
      image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/Registro-como-Operador-de-Drones-1234x800.jpg?alt=media&token=20d3dd58-4962-403c-aa12-6602ed18c494",
      note: 4,
      totalNotes: "112",
      profileImg: profileUser,
      distance: "8 KM"
    },
  
  ]

  const listOuthersUsers = [
    {
      name: "Nicole Souza",
      type: "Fotógrafo",
      note: 3.5,
      image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/como-se-tornar-fotografo-em-2021-min-scaled.jpg?alt=media&token=898dfaf0-b768-4b3a-b01c-e6705700702b",
      totalNotes: "320",
      profileImg: profileUser,
      distance: "2 KM"
    },
    {
      name: "Miguel Henrique",
      image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/homem-com-camera.jpg?alt=media&token=c9aace63-ebf8-4168-b6cc-ea8a13d6112c",
      type: "Fotógrafo",
      note: 3.0,
      totalNotes: "212",
      profileImg: profileUser,
      distance: "4 KM"
    },
    {
      name: "Pamela Silva",
      type: "Fotógrafo",
      image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/depositphotos_26389223-stock-photo-attractive-young-woman-taking-pictures.jpg?alt=media&token=9e18b18b-0edb-4d74-8baf-f9d70df0ec7d",
      note: 2.9,
      totalNotes: "112",
      profileImg: profileUser,
      distance: "8 KM"
    },
  
  ]


  return (
    <>
      <View style={{ flex: 1 }}>
        <ToastManager />
        <ScrollView>
          <View style={styles.container}>
            <StatusBar
              backgroundColor="transparent"
              barStyle={"dark-content"}
            />

            <View style={styles.boxHeader}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowBack big={true} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.input}>
                <SearchIconInput />
                <TextInput
                placeholder="Pesquise aqui.."
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)}
                  returnKeyType="search"
                  style={{ width: "100%" }}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.textPrimaryContainer}>{`Serviços > ${typeService}`}</Text>

            <View style={styles.boxServiceCategories}>

              <Text style={styles.textTitleServiceCategories}>Top fotógrafos</Text>

              <ScrollView horizontal={true}>

                {listServicesUsers.map(item => {
                  return (                    
                  <CardServiceUser 
                  key={item.id}
                  photo={item.image}
                  name={item.name}
                  note={item.note}
                  mail={item.mail}
                  evaluationsCount={item.totalNotes}
                  office={item.type}
                  sub_offices={item.sub_offices}
                  navigation={navigation}
                />

                  )

                })}
              </ScrollView>

            </View>


            <View style={styles.boxServiceCategories}>
              <Text style={styles.textTitleServiceCategories}>Outros fotógrafos</Text>
              
              <View style={styles.boxCardsOthers}>
                {
                  listOuthersUsers.map((elem) => {

                    return (
                      <CardsServicesOthers photo={elem.name} evaluationsCount={elem.totalNotes} image={elem.image} services={elem.type} mail={elem.mail}  name={elem.name} type={elem.type} note={elem.note} totalNotes={elem.totalNotes} distance={elem.distance}/>
                      )
                  })
                }
              </View>
            </View>

          </View>
          </ScrollView>
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    maxWidth: "375@s",
    paddingTop: "48@s",
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingBottom: "50@s",
  },
  boxHeader: {
    flexDirection: "row",
    gap: "22@s",
    alignItems: "center",
    paddingLeft: "20@s",
    paddingRight: "20@s",
    paddingBottom: "20@s",
    zIndex: 3,
    backgroundColor: theme.colors.background,
  },
  input: {
    flexDirection: "row",
    gap: "12@s",
    borderWidth: 1,
    borderColor: theme.colors.grey4,
    width: "260@s",
    alignItems: "center",
    paddingLeft: "13@s",
    paddingLeft: "13@s",
    height: "45@s",
    borderRadius: "60@s",
  },
  boxServiceCategories: {
    width: "100%",
    gap: "20@s",
    paddingLeft: "20@s",
    marginTop: "29@s",
  },
  textPrimaryContainer:{
    fontFamily: theme.fonts.fontPoppinsTitleBold,
    fontSize: "17@s",
    marginTop:"1.2rem",
    marginLeft: "20@s",

  },
  textTitleServiceCategories: {
    fontFamily: theme.fonts.fontPoppinsTitleBold,
    fontSize: "13@s",
  },
  boxCardsOthers: {
    width:"90%",
    paddingBottom: "48@s",
    gap: "28@s",
  },
});

export default Search;
