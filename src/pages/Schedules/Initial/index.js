import React, { useState, useEffect, useContext } from "react";
import { View, StatusBar, FlatList, Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import ToastManager from "toastify-react-native";
import { BackHandler, Alert } from 'react-native'

import moment from "moment/moment";
import "moment/min/locales";

import Header from "../components/Header";
import TitleAndList from "../components/TitleAndList";
import Schedule from "../components/Schedule";

import sampleUserImage from "../images/png/sampleUserImage.png";

import { theme } from "../../../global/theme";

const Initial = ({ navigation }) => {
  moment.locale("pt-br");

  const [selectedStatus, setSelectedStatus] = useState(0);
  const [filteredSchedules, setFilteredSchedules] = useState([]);

  const [awaitingConfirmationSchedules, setAwaitingConfirmationSchedules] = useState([])
  const [visitingSchedules, setVisitingSchedules] = useState([])
  const [executingSchedules, setExecutingSchedules] = useState([])
  const [finalizedSchedules, setFinalizedSchedules] = useState([])
  const [canceledSchedules, setCanceledSchedules] = useState([])
  const [originalSchedules, setOriginalSchedules] = useState([
    { schedule: { id: 90, status: 0 }, provider: { name: 'Amanda Costa',image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/mulher-de-sueter-casual-verde-e-chapeu-ao-ar-livre-na-parede-branca-turista-feliz-positiva-com-camera-profissional.jpg?alt=media&token=e30ea9a8-1b01-4871-93da-a2cc4bab1978"  }, category:{category:"Fotógrafa"}, address:{street:"Av. Brg. Faria Lima, 2355",city:"São Paulo - SP",zipCode:"01452-922"} },
    { schedule: { id: 122, status: 0 }, provider: { name: 'Jorge perreira',image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/images.jpg?alt=media&token=a3812a7a-3be8-44ca-a703-808241b6c695"  }, category:{category:"Fotógrafo"}, address:{street:"Av. Brg. Faria Lima, 2355",city:"São Paulo - SP",zipCode:"01452-922"} },
    { schedule: { id: 130, status: 1}, provider: { name: 'Alex Barbosa',image:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/retrato-de-um-alegre-afro-americano-na-jaqueta-de-couro.jpg?alt=media&token=752133d7-9135-4a40-8a55-ae78bb387044"  }, category:{category:"Fotógrafo"},address:{street:"Av. Brg. Faria Lima, 2355",city:"São Paulo - SP",zipCode:"01452-922"}},

  ]);

  const changeView = (status) => {
    setSelectedStatus(status)
    let filtered = []

    switch (status) {
      case 0:
        filtered = awaitingConfirmationSchedules
        break
      case 1:
        filtered = visitingSchedules
        break
      case 2:
        filtered = executingSchedules
        break
      case 3:
        filtered = finalizedSchedules
        break
      case 4:
        filtered = canceledSchedules
        break
      default:
        break
    }
    const filteredItems = originalSchedules.filter(item => item.schedule.status === status);
    setFilteredSchedules(filteredItems);

  }

  
  const CancelModalContent = () => {
    return (
      <View style={styles.cancelModal}>
        <View style={styles.modalHeader}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                marginRight: 22,
              }}
              onPress={() => toggleModal(setCancelModalVisible)}
            >
              <CloseIcon />
            </TouchableOpacity>
            <Text style={styles.modalHeaderTitle}>Cancelamento</Text>
          </View>
          <TouchableOpacity
            style={{
              ...styles.modalHeaderButton,
              backgroundColor: theme.colors.red2,
            }}
            onPress={handleCancelSchedule}
          >
            <Text
              style={{
                ...styles.modalHeaderButtonText,
                color: theme.colors.red3,
              }}
            >
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>

        <Spacer />

        <View style={styles.cancelModalContent}>
          <Text style={styles.cancelText}>
            Tem certeza que deseja cancelar o agendamento?
          </Text>

          <InputText
            value={cancelReason}
            setValue={setCancelReason}
            multiline
            placeholder="Qual o motivo do cancelamento"
            style={{
              height: 156,
              maxHeight: 156,
              textAlignVertical: "top",
              padding: 16,
            }}
          />
        </View>
      </View>
    )
  }

  useEffect(() => {

    const filteredItems = originalSchedules.filter(item => item.schedule.status === 0);
    setFilteredSchedules(filteredItems);

  },[])



  const styles = ScaledSheet.create({
    container: {
      width: "100%",
      paddingTop: "32@s",
      paddingHorizontal: 18,
      backgroundColor: theme.colors.background,
    },
  })

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <ToastManager />
      <StatusBar backgroundColor="transparent" barStyle={"dark-content"} />
      <Header navigation={navigation} />

      <FlatList
        ListHeaderComponent={
          <TitleAndList
            title={"Agendamentos"}
            list={[
              {
                text: "Aguardando confirmação",
                onPress: () => changeView(0),
              },
              {
                text: "Visita",
                onPress: () => changeView(1),
              },
              {
                text: "Em execução",
                onPress: () => changeView(2),
              },
              {
                text: "Finalizados",
                onPress: () => changeView(3),
              },
              {
                text: "Cancelados",
                onPress: () => changeView(4)
              }
            ]}
            selected={selectedStatus}
            setSelected={setSelectedStatus}
            style={{
              width: Dimensions.get("screen").width,
              marginLeft: -18,
              marginBottom: 9,
            }}
          />
        }
        contentContainerStyle={styles.container}
        data={filteredSchedules}
        renderItem={({ item }) => {
          return <Schedule
            data={item}
            
            navigation={navigation} />
        }}
      />
    </View>
  )
}

export default Initial
