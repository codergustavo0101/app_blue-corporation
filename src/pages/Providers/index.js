import React, { useState, useEffect, useContext } from "react";
import {BackHandler } from 'react-native';

import { ScaledSheet } from "react-native-size-matters";
import ToastManager, { Toast } from "toastify-react-native";

import FilterIcon from "./images/svg/FilterIcon";
import {
  StatusBar,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  FlatList,
  Image,
} from "react-native";
import Modal from "react-native-modal";
import { Shadow } from "react-native-shadow-2";
import SearchIcon from "./images/svg/SearchIcon";
import IndicateFriends from "./images/svg/IndicateFriends";
import CloseIcon from "./images/svg/CloseIcon";

import Button from "./components/Button";
import Header from "./components/Header";
import InputFilterSearch from "./components/InputFilterSearch";
import api from "../../services/api";
import { theme } from "../../global/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CardServiceUser from "./components/CardServiceUser"
import { useNavigation } from "@react-navigation/native";
const Providers = () => {
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [local, setLocal] = useState("");
  const [servicesPerformed, setServicesPerformed] = useState("");
  const [emergencyService, setEmergencyService] = useState("");

  const [localAddresses, setLocalAddresses] = useState()
  /* CATEGORYS */
  const [categorys, setCategorys] = useState([])
  

  /* TOP PROVIDERS */
  const [topProviders, setTopProviders] = useState([
    {
      data: {
        name: "Felipe Medeiros",
        category: "Fotógrafo",
        image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/userIcon.png?alt=media&token=74b8737e-51cd-4dac-be9f-4fe55fe27a9a"
      }
    },
    {
      data: {
        name: "Amanda costa",
        category: "Fotógrafa",
        image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/mulher-de-sueter-casual-verde-e-chapeu-ao-ar-livre-na-parede-branca-turista-feliz-positiva-com-camera-profissional.jpg?alt=media&token=e30ea9a8-1b01-4871-93da-a2cc4bab1978"
      },
 
    },
    {
        data: {
            name: "Alex barbosa",
            category: "Fotógrafo",
            image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/retrato-de-um-alegre-afro-americano-na-jaqueta-de-couro.jpg?alt=media&token=752133d7-9135-4a40-8a55-ae78bb387044"
          }
    }
    // Adicione quantos provedores desejar seguindo o mesmo padrão
  ]);

  /* MAX REACH */
  const [maxReach, setMaxReach] = useState(1)

  /* NUMBER STARS */
  const [stars, setStars] = useState(0)

  const [typeService,setTypeService] = useState()

  const navigation = useNavigation()

  const getCategorys = async () => {
    const response = await api.get("category/all")

    setCategorys(response.data)
  }

  const FilterModalContent = () => {
    const modalStyles = ScaledSheet.create({
      container: {
        backgroundColor: theme.colors.background,
        position: "absolute",
        bottom: 0,
        left: 0,
        marginLeft: -18,
        marginBottom: -18,

        width: Dimensions.get("screen").width,

        borderTopLeftRadius: "20@msr",
        borderTopRightRadius: "20@msr",
        flexDirection: "column",
        justifyContent: "flex-end",

        elevation: 20,
      },
      boxFilterModal: {
        backgroundColor: "#fff",
        height: "706@s",
        width: "256@s",
        borderBottomEndRadius: 17,
        borderTopEndRadius: 17,
        padding: "16@s",
        paddingTop: "51@s",
      },
      closeBack: {
        flex: 1,
        width: "100%",
      },
      cardFilterModal: {
        backgroundColor: theme.colors.white,
        width: "100%",
        height: "460@s",
        borderTopLeftRadius: "20@s",
        borderTopRightRadius: "20@s",
      },
      headerCard: {
        paddingTop: "26@s",
        padding: "19@s",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: theme.colors.grey0,
      },
      boxHeaderLeft: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "26@s",
      },
      textFilterHeader: {
        fontFamily: theme.fonts.fontPoppinsTitle,
        fontSize: "15@s",
      },
      boxContent: {
        marginTop: "23@s",
        paddingRight: "19@s",
        paddingLeft: "19@s",
        gap: "19@s",
      },
    });

    return (
      <Shadow
        distance={1}
        startColor="rgba(0,0,0,0.15)"
        containerStyle={modalStyles.container}
        corners={true}
      >
        <KeyboardAvoidingView
          behavior="height"
          style={{
            width: Dimensions.get("screen").width,
          }}
        >
          <View style={modalStyles.cardFilterModal}>
            <View style={modalStyles.headerCard}>
              <View style={modalStyles.boxHeaderLeft}>
                <TouchableOpacity
                  onPress={() => {
                    setIsFilterModalVisible(false);
                  }}
                >
                  <View
                    style={{
                      transform: [{ translateY: -2 }],
                    }}
                  >
                    <CloseIcon />
                  </View>
                </TouchableOpacity>
                <Text style={modalStyles.textFilterHeader}>Salvar</Text>
              </View>
              <Button
                onPress={() => {
                  getTopProviders();
                  setIsFilterModalVisible(false)
                }}
                name="Filtrar"
                width={91}
                heigth={36}
              />
            </View>

            <View style={modalStyles.boxContent}>
              <InputFilterSearch
                name="Local"
                value={localAddresses}
                setValue={setLocal}
              />

              <InputFilterSearch
                select={true}
                type={"userReach"}
                name="Alcance maximo"
                selectedValue={maxReach}
                setSelectedValue={setMaxReach}
              />
              <InputFilterSearch
                select={true}

                type={"ranking"}
                name="Ranking"
                selectedValue={stars}
                setSelectedValue={setStars}
              />
              <InputFilterSearch
                select={true}
                type={"servicesPerformed"}
                name="Serviços executados"
                selectedValue={servicesPerformed}
                setSelectedValue={setServicesPerformed}
              />
              <InputFilterSearch
                select={true}
                type={"emergencyService"}
                name="Aceita serviço de urgências"
                selectedValue={emergencyService}
                setSelectedValue={setEmergencyService}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Shadow>
    );
  }

  const redirectToSearchPage = (type) => {
    AsyncStorage.setItem("@TYPE_CATEGORY", type)
    navigation.navigate("Search")
  }
  async function getTopProviders() {
    const lat = await AsyncStorage.getItem("@COORDS_LATITUDE")
    const long = await AsyncStorage.getItem("@COORDS_LONGITUDE")

    const response = await api.post("provider/user/top/provider", {
      "latClient": -23.5576616,
      "longClient": -46.5683658,
      "maxReach": "5670236.60"
      // "latClient": lat,
      // "longClient": long,
      // "maxReach": `${maxReach}000`,
      // "stars": stars
    })

    setTopProviders(response.data['topProviders'])
  }

  useEffect(() => {
    getCategorys()
  }, [])
  useEffect(() => {
    getTopProviders()
  }, [])




  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const renderCarouselItem = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => redirectToSearchPage(item.category)} style={styles.cardCategories}>
      <Image
        style={{ width: 54, height: 54 }}
        source={{ uri: item.icon }}
      />
      <Text>{item.category}</Text>
    </TouchableOpacity>
  );

  const handleCarouselScroll = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width
    const contentOffset = event.nativeEvent.contentOffset.x
    const itemSize = 150
    const centeredIndex = Math.floor(contentOffset / itemSize + 0.5)

    setCurrentCategoryIndex(centeredIndex)
  }

  const getInfoService = async () => {
    const response = await AsyncStorage.getItem("@TYPE_SERVICE")
    setTypeService(response)
  }


  navigation.addListener("focus",() => {
    
    getInfoService()

  },[])

  useEffect(() => {

    getInfoService()

  },[])

  return (
    <View style={{ flex: 1, backgroundColor:"white" }}>
      <Header  />
      <ScrollView>
        <ToastManager />
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.container}>
            <StatusBar
              backgroundColor="transparent"
              barStyle={"dark-content"}
            />

            <View style={styles.boxTopHeader}>
              <Text style={styles.textTitleBoxTop}>{typeService}</Text>
              <View style={styles.boxTopHeaderRigth}>

                <TouchableOpacity onPress={() => navigation.navigate("Search")}>
                  <SearchIcon />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.boxServiceCategories}>
              <Text style={styles.textTitleServiceCategories}>
                Top prestadores de serviços
              </Text>
     
              <ScrollView horizontal>

     

                {topProviders && (
                  topProviders.map(item =>
                    <CardServiceUser
                    localAvaliation={5}
                    totalAvaliationsLocal={100}
                      name={item.data.name}
                      photo={item.data.image}
                      providerId={item.data.id}
                      office={item.data.category}
                      navigation={navigation}
                    />
                  )
                )}
              </ScrollView>

            </View>

            
            <View style={styles.boxServiceCategories}>
              <Text style={styles.textTitleServiceCategories}>
                Outros Prestadores
              </Text>
     
              <ScrollView horizontal>

     

                {topProviders && (
                  topProviders.map(item =>
                    <CardServiceUser
                    localAvaliation={5}
                    totalAvaliationsLocal={100}
                      name={item.data.name}
                      photo={item.data.image}
                      providerId={item.data.id}
                      office={item.data.category}
                      navigation={navigation}
                    />
                  )
                )}
              </ScrollView>

            </View>


          </View>
        </TouchableWithoutFeedback>
      </ScrollView>

      <Modal
        useNativeDriver
        useNativeDriverForBackdrop
        backdropColor={theme.colors.white}
        coverScreen

        onBackdropPress={() => setIsFilterModalVisible(false)}
        onBackButtonPress={() => setIsFilterModalVisible(false)}
        isVisible={isFilterModalVisible}
      >
        {FilterModalContent()}
      </Modal>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    maxWidth: "375@s",
    display: "flex",
    alignItems: "center",
    paddingTop: "43@s",
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingBottom: "50@s",
  },
  boxTopHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingRight: "20@s",
    paddingLeft: "20@s",
  },
  boxTopHeaderRigth: {
    flexDirection: "row",
    gap: "12@s",
  },
  textTitleBoxTop: {
    fontFamily: theme.fonts.fontPoppinsTitleBold,
    color: theme.colors.colorPrimary,
    fontSize: "21@s",
  },
  boxServiceCategories: {
    width: "100%",
    gap: "20@s",
    paddingLeft: "20@s",
    marginTop: "27@s",
  },
  boxCardsCategories: {},
  cardCategories: {
    justifyContent: "center",
    alignItems: "center",
    gap: "12@s",
    maxWidth: "80@s",
    marginRight: "32@s",
    marginBottom: "10@s",
  },
  textTitleServiceCategories: {
    fontFamily: theme.fonts.fontPoppinsTitleBold,
    fontSize: "15@s",
  },
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
    fontSize: "12@s",
  },
  textUser: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "11@s",
  },
  textNotesUser: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "10@s",
  },
  boxFooter: {
    marginLeft: "10@s",
    marginRight: "10@s",
    marginTop: "46@s",
    flexDirection: "row",
    backgroundColor: "#E9F4FF",
    paddingTop: "19@s",
    paddingLeft: "16@s",
    paddingRight: 0,
    borderRadius: "13@s",
    gap: "6@s",
  },
  boxLeftFooter: {
    gap: "30@s",
    width: "60%",
  },
  textFooterPage: {
    fontFamily: theme.fonts.fontPoppinsTitleBold,
    fontSize: "13@s",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Providers;