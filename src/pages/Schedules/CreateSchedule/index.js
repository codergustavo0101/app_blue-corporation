import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image } from "react-native";
import { useRoute } from '@react-navigation/native';
import { ScaledSheet } from "react-native-size-matters";
import ToastManager from "toastify-react-native";
import moment from "moment/moment";
import "moment/min/locales";

import PageHeader from "../components/PageHeader";
import SelectDate from "../components/SelectDate";
import SelectTime from "../components/SelectTime";
import Select from "../components/Select";
import InputText from "../components/InputText";
import StarIcon from "../images/svg/StarIcon";
import MomentIcon from "../images/svg/MomentIcon";
import ChatIconOptions from "../images/svg/ChatIconOptions";
import ToShare from "../images/svg/ToShare";
import FavoritesIconOption from '../images/svg/FavoritesIconOption'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "../../../global/theme";
import api from "../../../services/api";

const CreateSchedule = ({ navigation }) => {
  moment.locale("pt-br");
  const route = useRoute()


  const [dateList, setDateList] = useState([]);
  const [sectionService, setSectionService] = useState([]);

  const [currentDateNow] = useState(moment().format("LL"));
  const [currentDate] = useState(moment().add(1, "month").format("LL"));
  const [providerCategories, setProviderCategories] = useState([
    { category: "Fotos Áreas" },
    { category: "Reels Dinamico" },
    { category: "Reels " },

  ])
  const [duringDateNow] = useState(moment().daysInMonth());
  const [duringDate] = useState(moment().add(1, "months").daysInMonth());
  const [duringDateFuture] = useState(moment().add(2, "months").daysInMonth());

  const [typeOfService, setTypeOfService] = useState(0)
  const [serviceDescription, setServiceDescription] = useState("")

  const [street, setStreet] = useState()
  const [number, setNumber] = useState()
  const [complement, setComplement] = useState()
  const [district, setDistrict] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [zipCode, setZipCode] = useState()
  const [imageTest, setImageTest] = useState()


  /* LIST SERVICE USERS */
  const servicesHoursProvider = {
    hoursAvailable: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
    ],
  }

  const [sectionHours, setSectionHours] = useState(
    servicesHoursProvider.hoursAvailable[0]
  )
  const [sectionHoursEnd, setSectionHoursEnd] = useState(
    servicesHoursProvider.hoursAvailable[2]
  )

  // const services = providerCategories.map((item) => ({
  //   label: item.category,
  //   value: item.id
  // }))

  const getImage = async () => {

    const image = await AsyncStorage.getItem("@PHOTO_TEST")
    setImageTest(image)
  }
  const redirectToPaymentPage = () =>{
  
    navigation.navigate("Payment")
    
  }

  useEffect(() => {
    const getDate = async () => {
      let listDate = [];

      let dateNow = currentDateNow.split("de")[0];
      let monthNew = currentDateNow.split("de")[1];

      let month = currentDate.split("de")[1];

      let monthFutere = currentDate.split("de")[1];

      for (let i = 1; i <= duringDateNow; i++) {
        if (i >= dateNow) {
          listDate.push({ day: i, month: monthNew });
        }
      }

      for (let i = 1; i <= duringDate; i++) {
        if (i) {
          listDate.push({ day: i, month: month });
        }
      }

      if (listDate.length < 60) {
        for (let i = 1; i <= duringDateFuture; i++) {
          if (listDate.length < 60) {
            listDate.push({ day: i, month: monthFutere });
          }
        }
      }
      setDateList(listDate);
      setSectionService(listDate[0]);
    };

    getDate();
  }, [])

  useEffect(() => {

    getImage()

  }, [])

  const styles = ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    content: {
      backgroundColor: theme.colors.background,
      marginTop: "70@vs",
      padding: "25@vs",
    },
    section: {
      marginBottom: "25@vs",
    },
    sectionTitle: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "14@msr",
      lineHeight: "18@vs",
      marginBottom: "16@vs",
    },
    boxRating: {
      flexDirection: "row",
      alignItems: "center",
      gap: "6@s",
    },
    editButton: {
      backgroundColor: theme.colors.colorPrimary,
      borderRadius: "60@msr",
      width: "100%",
      height: "48@vs",

      marginBottom: "48@vs",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    boxImage: {
      justifyContent: "center",
      alignItems: "center"
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
    boxDetailsUser: {
      alignItems: "center",
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

    clear: {
      height: "20@s",
    },

    textNameUser: {
      textAlign: "center",
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "18@s",
    },

    editButtonText: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "16@msr",
      lineHeight: "24@vs",
      color: theme.colors.white,
    },
  })

  const handleCreateSchedule = async () => {
    const startDate = moment(`
      ${sectionService.month.trim()} ${sectionService.day} ${sectionHours}`,
      "MMMM DD HH:mm").toDate().getTime()

    const endDate = moment(`
      ${sectionService.month.trim()} ${sectionService.day} ${sectionHoursEnd}`,
      "MMMM DD HH:mm").toDate().getTime()


    // const response = await api.post("schedule/storage", data)
  }

  return (
    <View style={styles.container}>
      <ToastManager />
      <PageHeader
        onBackPress={() => navigation.goBack()}
        title="Agendamento detalhes"
      />
      <ScrollView style={styles.content}>


        <View style={styles.headerProfileUser}>
          <View
            style={{
              position: "relative",
            }}
          >
            <View style={styles.boxImage}>
              <Image style={{ width: 98, height: 98, borderRadius: 48, marginBottom: 9 }} source={{ uri: imageTest }} />
            </View>
          </View>

          <Text style={styles.textNameUser}>
            Fotógrafo Teste
          </Text>

          <View style={styles.boxTypeServicesProvider}>


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
                  24/01/2024
                </Text>
              </View>
            </View>


          </View>
        </View>


        <View style={styles.section}>
          <View style={styles.clear}></View>
          <Text style={styles.sectionTitle}>Selecione uma data</Text>
          <SelectDate
            dateList={dateList}
            sectionService={sectionService}
            setSectionService={setSectionService}
          />
        </View>

        <View style={styles.section}>
          <SelectTime
            servicesHoursProvider={servicesHoursProvider}
            sectionHours={sectionHours}
            setSectionHours={setSectionHours}
            sectionHoursEnd={sectionHoursEnd}
            setSectionHoursEnd={setSectionHoursEnd}
          />
        </View>


        <Text
          style={{
            fontFamily: theme.fonts.fontPoppinsTitle,
            fontSize: 18,
            lineHeight: 20,
            color: theme.colors.black,
            marginBottom: 20,
          }}
        >
          Local de agendamento
        </Text>

        <>


          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Cep</Text>
            <InputText value={zipCode} setValue={setZipCode} />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Rua</Text>
            <InputText value={zipCode} setValue={setStreet} />
          </View>


          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Complemento</Text>
            <InputText value={zipCode} setValue={setZipCode} />
          </View>

          

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Obeservações</Text>
            <InputText   value={zipCode}  />
          </View>


        </>


        <TouchableOpacity style={styles.editButton}>
          <Text
            onPress={() => redirectToPaymentPage()}
            style={styles.editButtonText}>
            Confirmar agendamento
          </Text>
        </TouchableOpacity>
      </ScrollView>




    </View>
  );
};

export default CreateSchedule;
