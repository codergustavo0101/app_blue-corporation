import React, { useContext, useEffect, useState } from "react";
import { Linking } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import ToastManager from "toastify-react-native";
import {
  StatusBar,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
} from "react-native";

import { theme } from "../../global/theme";
import { useNavigation } from "@react-navigation/native";
import Button from "./components/Button";
import MomentIcon from "./images/svg/MomentIcon";
import ChatIconOptions from "./images/svg/ChatIconOptions";
import ToShare from "./images/svg/ToShare";
import FavoritesIconOption from "./images/svg/FavoritesIconOption";
import ArrowBack from "./images/svg/ArrowBack";
import StarIcon from "./images/svg/StarIcon";
import StarIconDisabled from "./images/svg/StarIconDisabled";
import ServicesIcon from "./images/svg/ServicesIcon";
import TimeIcon from "./images/svg/TimeIcon";
import LocationIcon from "./images/svg/LocationIcon";
import Invoice from "./images/svg/Invoice";
import PaymentMethodsIcon from "./images/svg/PaymentMethodsIcon";
import PayVisit from "./images/svg/PayVisit";
import ToScheduleIcon from "./images/svg/ToScheduleIcon";

import ChatIconButton from "./images/svg/ChatIconButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";

const Provider = () => {

  const [providerId, setProviderId] = useState("")
  const [provider, setProvider] = useState({})
  const [providerCategories, setProviderCategories] = useState([
    {category:"Fotos Áreas"},
    {category:"Reels Dinamico"},
    {category:"Reels "},

  ])
  
  const [providerAvaliation, setProviderAvaliation] = useState(5)
  const [providerAvaliationsdata, setProviderAvaliationsData] = useState([])
  const [providerAddress, setProviderAddress] = useState()
  const [sectionService, setSectionService] = useState("")
  const [imageTest,setImageTest] = useState()

  const navigation = useNavigation()

  const getProviderId = async () => {
    const providerId = await AsyncStorage.getItem("@PROVIDER_ID")

    // setProviderId(providerId)
    setProviderId(1)
  }

  const getProviderAvaliation = async () => {
    const response = await api.get(`provider/get/avaliation/${providerId}`)

    setProviderAvaliation(response.data)
    setProviderAvaliationsData(response.data.avaliationsData)
  }

  const getProviderDetails = async () => {
    const response = await api.get(`provider/get/by/id/${providerId}`)

    setProvider(response.data.providerDetails.provider)
    setProviderCategories(response.data.providerDetails['categories'])
    setSectionService(providerCategories[0].category)
    setProviderAddress(response.data.providerDetails['address'])
  }
const avaliationData = [
  { avaliation: 4, user: { name: 'Milena silva', image: 'https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/attractive-young-girl-posing-on-a-white-wall-background-cute-smiling-free-photo.jpg?alt=media&token=cc7218a3-ad49-42a1-9d7b-7ed8553fbd99' }, service_description: 'Otimo serviço, o Felipe foi muito educado e o serviço saiu nota 10.' },
  { avaliation: 2, user: { name: 'Paulo gustavo', image: 'https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/depositphotos_26521259-stock-photo-portrait-of-a-handsome-young.jpg?alt=media&token=8865dcdb-1317-4c67-8b3e-13fe20ae1e1f' }, service_description: 'Descrição do serviço 2' },
  // Adicione mais dados conforme necessário
];


  useEffect(() => {
    getProviderId()
  }, [])

  useEffect(() => {
    getProviderDetails()
    getProviderAvaliation()
  }, [providerId])


  const numeroWhatsApp = "55 41 9800-1522"
  const redirecionarParaWhatsApp = () => {
    const url = `whatsapp://send?phone=${numeroWhatsApp}`;
  
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.log(`Não é possível abrir o WhatsApp: ${url}`);
        }
      })
      .catch((err) => console.error('Erro ao redirecionar para o WhatsApp:', err));
  };
  const redirectToChatPage = () => {
    navigation.navigate("Chats", {
      screen: "Chat",
      params: {
        provider: {
          name: provider.name,
          office: providerCategories[0],
          image: provider.image,
        },
      },
    })
  }

  const redirectToSchedulePage = () => {
    navigation.navigate("CreateSchedule")
  }

  /* LIST SERVICE USERS */
  const servicesUsers = {
    paymentMethods: "Cartão",
  }

  const [currentAvaliationIndex, setCurrentAvaliationIndex] = useState(0);
  const [currentAvaliationCarouselIndex, setCurrentAvaliationCarouselIndex] = useState(0);

  const portfolioData = [
    { service_image: 'https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/Imagem1.jpg?alt=media&token=85763a9b-bc69-4aab-8318-af12ad5e25e2', service_description: 'Otimo profissional tirou fotos incriveis do meu imóvel' },
    { service_image: 'https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/imovel-de-alto-padrao-alugar-ou-comprar.jpg?alt=media&token=ba73d648-3df3-4f90-9e47-bf4a1a953ef0', service_description: 'Amei o serviço, minhas fotos ficaram incriveis super indico!' },
    // Adicione mais dados conforme necessário
  ];


  const handleAvaliationCarouselScroll = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const itemSize = 150;
    const centeredIndex = Math.floor(contentOffset / itemSize + 0.5);

    setCurrentAvaliationIndex(centeredIndex);
  }

  const getImage = async () => {

    const image = await AsyncStorage.getItem("@PHOTO_TEST")
    setImageTest(image)
  }

  navigation.addListener("focus",() => {

    getImage()
  },[])


  const renderAvaliationCarouselItem = ({ item: avaliation }) => (
    <View style={styles.cardPortfolio}>
      
      <Image
        source={{ uri: avaliation.service_image }}
        style={styles.imgPortfolio}
      />
      <Text style={styles.textDescriptionPortfolio}>
        {avaliation.service_description}
      </Text>
    </View>
  )

  const renderAvaliationItem = ({ item: avaliation }) => {
    const filledStars = avaliation.avaliation
    const emptyStars = 5 - filledStars

    return (
      <View style={styles.cardAssessments}>
        <View style={styles.headerCardAssessments}>
          {avaliation.user.image ? (
            <Image
              style={styles.imgAssessments}
              source={{ uri: avaliation.user.image }}
            />
          ) : (
            <></>
          )}

          <Text style={styles.textNameAssessments}>
            {avaliation.user.name}
          </Text>
        </View>
        <View style={styles.boxNotesAssessments}>
          <Text style={styles.textDescriptionAssessments}>
            {avaliation.service_description}
          </Text>
        </View>

        <View style={styles.starContainer}>
          {[...Array(filledStars)].map((_, index) => (
            <StarIcon key={index} filled />
          ))}
          {[...Array(emptyStars)].map((_, index) => (
            <StarIconDisabled key={index} />
          ))}
        </View>
      </View>
    )
  }

  const handleAvaliationItemScroll = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const itemSize = 150;
    const centeredIndex = Math.floor(contentOffset / itemSize + 0.5);

    setCurrentAvaliationCarouselIndex(centeredIndex);
  }

  return (
    <View style={{ backgroundColor: theme.colors.background }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <ToastManager />
        
          <View style={styles.container}>
            <StatusBar
              backgroundColor="transparent"
              barStyle={"dark-content"}
            />
            <View style={styles.boxHeader}>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <ArrowBack big={false} />
              </TouchableOpacity>
              <View>
                <Text style={styles.textTitleUser}>Detalhes do prestador</Text>
              </View>
            </View>

            <View style={styles.headerProfileUser}>
              <View
                style={{
                  position: "relative",
                }}
              >
                {provider && (
                  provider.image != null
                    ?
                    <Image
                      style={{ width: 96, height: 96, borderRadius: 48 }}
                      source={{
                        uri:imageTest
                      }}
                    />
                    :
                    <Image
                      style={{ width: 96, height: 96, borderRadius: 48 }}
                      source={{uri:imageTest}} />
                )}
                <View style={{ position: "absolute", right: 0, bottom: 5 }}>
                </View>
              </View>

              <Text style={styles.textNameUser}>
                {provider && (provider.name)}
                Fotógrafo Teste
              </Text>

              <View style={styles.boxTypeServicesProvider}>
                <ScrollView
                  horizontal={true}
                  style={styles.boxCardsCategories}
                  showsHorizontalScrollIndicator={false}
                >
                  {providerCategories && (
                    providerCategories.map((elem, _i) => {
                      return (
                        <TouchableOpacity
                          key={_i}
                          style={
                            sectionService == elem.category
                              ? styles.buttonTypes
                              : styles.buttonTypesDisabled
                          }
                        >
                          <Text
                            style={
                              sectionService == elem.category
                                ? styles.textnTypes
                                : styles.textnTypesDisabled
                            }
                          >
                            {elem.category}
                          </Text>
                        </TouchableOpacity>
                      );
                    })
                  )}
                </ScrollView>

                <View style={styles.boxDetailsUser}>
                  <View style={styles.boxRating}>
                      <>
                        <Text>4,80</Text>
                        <StarIcon />
                        <Text>
                          {"120 "}
                          {"avaliações"}
                        </Text>
                      </>
                    
                  </View>

                  <View style={styles.boxTimeDate}>
                    <MomentIcon />
                    <Text style={styles.textTimeDate}>
                      {provider && (provider.createdAt)}
                      24/01/2024
                    </Text>
                  </View>
                </View>

                <View style={styles.boxContactProvider}>
                  <TouchableOpacity>
                    <ChatIconOptions />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <ToShare />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <FavoritesIconOption />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.boxContentUser}>
              <View style={styles.boxServiceDetails}>
                <View style={styles.iconDetails}>
                  <LocationIcon />
                </View>

                <View>
                  <Text style={styles.textTitleDetails}>
                    Região de atendimento
                  </Text>
                  <Text style={styles.textContentDetails}>
                    São Paulo - Região
                    {providerAddress && (
                      providerAddress['city']
                    )}
                  </Text>
                </View>
              </View>

              <View style={styles.boxServiceDetails}>
                <View style={styles.iconDetails}>
                  <ServicesIcon />
                </View>

                <View>
                  <Text style={styles.textTitleDetails}>
                    Número de serviços executados
                  </Text>
                  <Text style={styles.textContentDetails}>
                    20
                  </Text>
                </View>
              </View>

              <View style={styles.boxServiceDetails}>
                <View style={styles.iconDetails}>
                  <TimeIcon />
                </View>

                <View>
                  <Text style={styles.textTitleDetails}>
                    Atende serviços urgentes?
                  </Text>
                  <Text style={styles.textContentDetails}>
                    Sim
                  </Text>
                </View>
              </View>

   
            </View>

             <View style={styles.boxPortfolio}>
              <Text style={styles.textTitlePortfolio}>Portfólio</Text>
              {providerAvaliationsdata && (
                <FlatList
                  horizontal
                  data={portfolioData}
                  renderItem={renderAvaliationCarouselItem}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  onScroll={handleAvaliationCarouselScroll}
                  style={{ width: "100%" }} // Adicione este estilo

                />
              )}
            </View> 

            <View style={styles.boxCardAssessments}>
              <Text style={styles.textTitlePortfolio}>Avaliações</Text>
                <FlatList
                  horizontal
                  data={avaliationData}
                  renderItem={renderAvaliationItem}
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  onScroll={handleAvaliationItemScroll}
                  style={{ width: "100%" }} // Adicione este estilo

                />
              
            </View>
          </View>
      </ScrollView>
      <View style={styles.boxFooterButtons}>
        <Button
          onPress={() => redirectToSchedulePage()}
          Icon={ToScheduleIcon}
          name="Agendar"
          heigth={40}
          width={150}
          style={{
            marginRight: 12,
          }}
        />
        <Button
          onPress={() =>
            redirecionarParaWhatsApp()
          }
          Icon={ChatIconButton}
          name="Conversar"
          heigth={40}
          width={150}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    maxWidth: "375@s",
    display: "flex",
    alignItems: "center",
    paddingTop: "22@s",
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  boxHeader: {
    flexDirection: "row",
    gap: "22@s",
    alignItems: "center",
    paddingLeft: "20@s",
    width: "100%",
    paddingTop:"20@s",
    borderBottomWidth: "1@s",
    paddingBottom: "21@s",
    borderBottomColor: theme.colors.grey4,
    position: "relative",
    justifyContent: "center",
  },
  backButton: {

    position: "absolute",
    left: "20@s",
  },
  textTitleUser: {
    fontFamily: theme.fonts.fontPoppinsTitle,
    transform: [{ translateY: 5 }],
    fontSize: "16@s",
  },
  headerProfileUser: {
    paddingTop: "10@s",
    gap: "12@s",
    justifyContent: "center",
    alignItems: "center",
  },
  textNameUser: {
    fontFamily: theme.fonts.fontPoppinsTitle,
    fontSize: "18@s",
  },
  boxScrollPortifolio: {
    marginTop: "16@s",
  },
  boxTypeServicesProvider: {
    width: "100%",
  },
  buttonTypes: {
    backgroundColor: "#E9F4FF",
    marginLeft: "20@s",
    height: "30@s",
    width: "97@s",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.colorPrimary,
    borderRadius: "20@s",
    marginBottom: "20@s",
  },
  buttonTypesDisabled: {
    backgroundColor: "#fff",
    marginLeft: "20@s",
    height: "30@s",
    width: "97@s",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.grey7,
    borderRadius: "20@s",
    marginBottom: "20@s",
  },
  textnTypes: {
    fontSize: "11@s",
    fontFamily: theme.fonts.fontPoppinsTitle,
    color: theme.colors.colorPrimary,
    transform: [{ translateY: 1 }],
  },
  textnTypesDisabled: {
    fontSize: "11@s",
    fontFamily: theme.fonts.fontPoppinsTitle,
    color: "#000",
    transform: [{ translateY: 1 }],
  },
  boxDetailsUser: {
    alignItems: "center",
  },
  boxRating: {
    flexDirection: "row",
    alignItems: "center",
    gap: "6@s",
  },
  boxTimeDate: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: "5@s",
    marginTop: "12@s",
  },
  textTimeDate: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "12@s",
  },
  boxContactProvider: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "30@s",
    marginTop: "10@s",
  },
  boxContentUser: {
    width: "100%",
    paddingLeft: "20@s",
    paddingRight: "20@s",
    marginTop: "43@s",
    gap: "21@s",
  },
  boxServiceDetails: {
    flexDirection: "row",
    gap: "13@s",
  },
  iconDetails: {
    paddingTop: "4@s",
  },
  textTitleDetails: {
    fontFamily: theme.fonts.fontPoppinsTitle,
    fontSize: "12@s",
  },
  textContentDetails: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "11@s",
  },
  boxPortfolio: {
    width: "100%",
    paddingLeft: "20@s",
    marginTop: "39@s",
    display: "flex"
  },
  textTitlePortfolio: {
    fontFamily: theme.fonts.fontPoppinsTitle,
    fontSize: "15@s",
    marginBottom:"9@s"
  },
  imgPortfolio: {
    width: "252@s",
    height: "252@s",
    marginBottom: "12@s",
    borderRadius: "3@s",
  },
  cardPortfolio: {
    width: "180@s",
    marginBottom: "20@s",
    marginRight: "90@s",
  },
  textDescriptionPortfolio: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "11@s",
  },
  boxCardAssessments: {
    width: "100%",
    paddingLeft: "20@s",
    marginTop: "15@s",
    display: "flex"
  },
  cardAssessments: {
    width: "180@s",
    backgroundColor: "#E9F4FF70",
    borderRadius: "8@s",
    padding: "16@s",
    paddingTop: "12@s",
    paddingBottom: "12@s",
    marginBottom: "20@s",
    marginRight: "20@s",
  },
  headerCardAssessments: {
    flexDirection: "row",
    alignItems: "center",
    gap: "6@s",
    marginBottom: "16@s",
  },
  imgAssessments: {
    width: "34@s",
    borderRadius:100,
    height: "34@s",
  },
  textNameAssessments: {
    fontFamily: theme.fonts.fontPoppinsTitle,
    fontSize: "12@s",
  },
  boxNotesAssessments: {
    flexDirection: "row",
    gap: "2@s",
  },
  textDescriptionAssessments: {
    fontFamily: theme.fonts.fontPoppinsContent,
    fontSize: "10@s",
  },
  starContainer: {
    position: "relative",
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    marginTop: 8,
  },
  boxFooterButtons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "24@s",
    paddingLeft: "20@s",
    paddingRight: "20@s",
    backgroundColor: "#fff",

    shadowColor: "#000",
    shadowOffset: {
      width: 100,
      height: 0,
    },
    shadowOpacity: 0.99,
    shadowRadius: 20.0,

    elevation: 10,

    position: "absolute",
    bottom: 0,
    left: 0,
  },
});

export default Provider;