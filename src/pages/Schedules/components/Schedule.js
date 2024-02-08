import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Modal from "react-native-modal";
import moment from "moment/moment";

import Spacer from "../components/Spacer";
import InputText from "../components/InputText";
import Select from "../components/Select";

import BackButton from "../images/svg/BackButton";
import ChatButton from "../images/svg/ChatButton";
import CloseIcon from "../images/svg/CloseIcon";
import { theme } from "../../../global/theme";
import userIcon from "../images/png/man.png"
import { Linking } from 'react-native';
const numeroWhatsApp = '+5511958329880'; // Substitua pelo número desejado

const Schedule = ({ data, setSchedules, navigation }) => {
  moment.locale("pt-br");

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
  
  
  
  let toggleAnimation = useRef(new Animated.Value(0)).current;
  let isToggled = useRef(false).current;
  const [animation,setAnimation] = useState(false)
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [confirmExecutionModalVisible, setConfirmExecutionModalVisible] =
    useState(false);

  const [cancelReason, setCancelReason] = useState("");

  const [confirmSelect1, setConfirmSelect1] = useState(false);
  const [confirmSelect2, setConfirmSelect2] = useState(false);
  const [confirmComment, setConfirmComment] = useState("");

  const [confirmExecutionSelect1, setConfirmExecutionSelect1] = useState(false);
  const [confirmExecutionSelect2, setConfirmExecutionSelect2] = useState(false);

  const states = [
    {
      status: 0,
      backgroundColor: theme.colors.blue0,
      color: theme.colors.colorPrimary,
      text: "Aguardando aprovação",
    },
    {
      status: 1,
      backgroundColor: theme.colors.yellow1,
      color: theme.colors.yellow2,
      text: "Visitado",
    },
    {
      status: 2,
      backgroundColor: theme.colors.yellow1,
      color: theme.colors.yellow2,
      text: "Em execução",
    },
    {
      status: 3,
      backgroundColor: theme.colors.green0,
      color: theme.colors.green1,
      text: "Finalizado",
    },
    {
      status: 4,
      backgroundColor: theme.colors.red2,
      color: theme.colors.red3,
      text: "Cancelado",
    },
  ]

  const styles = ScaledSheet.create({
    container: {
      width: "100%",
      marginVertical: "10@vs",
      paddingVertical: "23@vs",
      paddingHorizontal: "21@s",
      borderWidth: "1@msr",
      borderColor: theme.colors.secondaryBorder,
      borderRadius: "10@msr",

      backgroundColor: theme.colors.background
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: 41,
    },
    userImage: {
      width: "35@msr",
      height: "35@msr",
      borderRadius: "17.5@msr",
      marginLeft: "20@s",
    },
    userName: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "14@msr",
      lineHeight: "18@vs",
    },
    userOffice: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "12@msr",
      lineHeight: "18@vs",
    },
    infos: {
      backgroundColor: theme.colors.background,
      width: "100%",
      marginTop:"20@s"
    },
    info: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "18@vs",
    },
    infoTitle: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "14@msr",
      lineHeight: "19@vs",
      color: theme.colors.grey9,

      textAlign: "left",
    },
    infoContent: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "14@msr",
      lineHeight: "21@vs",

      maxWidth: "70%",
      textAlign: "right",
      color: theme.colors.black2,
    },
    infoContentStatus: {
      height: "30@vs",

      borderRadius: "60@msr",
      paddingHorizontal: "8@msr",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    confirmButton: {
      width: "100%",
      height: "39@vs",
      backgroundColor: theme.colors.colorPrimary,
      borderRadius: "60@msr",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    confirmButtonText: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "14@msr",
      lineHeight: "21@vs",

      maxWidth: "70%",
      textAlign: "right",
      color: theme.colors.white,
    },
    actionsButtons: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: "40@vs",
      marginTop: "16@vs",
    },
    actionsButton: {
      height: "100%",
      flex: 0.475,
      backgroundColor: "transparent",
      borderRadius: "60@msr",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      borderWidth: "1@msr",
    },
    actionsButtonText: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "13@msr",
      lineHeight: "20@vs",
    },
    cancelModal: {
      backgroundColor: theme.colors.background,
      position: "absolute",
      bottom: 0,
      left: 0,
      marginLeft: -18,
      marginBottom: -18,

      width: Dimensions.get("screen").width,
      height: "362@vs",

      borderTopLeftRadius: "20@msr",
      borderTopRightRadius: "20@msr",
      elevation: 25,
    },
    modalHeader: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "21@msr",
    },
    modalHeaderTitle: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "18@msr",
      lineHeight: "27@vs",
    },
    modalHeaderButton: {
      height: "37@vs",
      paddingHorizontal: "12@s",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      borderRadius: "50@msr",
    },
    modalHeaderButtonText: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "15@msr",
      lineHeight: "22@vs",
    },
    cancelModalContent: {
      flex: 1,
      padding: "28@msr",
    },
    cancelText: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "18@msr",
      lineHeight: "28@vs",
      textAlign: "center",
      marginBottom: "21@vs",
    },
    inputBlock: {
      marginBottom: "20@vs",
    },
    inputText: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "14@msr",
      lineHeight: "18@vs",

      marginBottom: "14@vs",
    },
  })

  useEffect(() =>{

    console.warn(isToggled)

  },[isToggled])

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

  const ConfirmModalContent = () => {
    return (
      <View style={{ ...styles.cancelModal, height: "75%" }}>
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
              onPress={() => toggleModal(setConfirmModalVisible)}
            >
              <CloseIcon />
            </TouchableOpacity>
            <Text style={styles.modalHeaderTitle}>Confirme a visita</Text>
          </View>
          <TouchableOpacity
            style={{
              ...styles.modalHeaderButton,
              backgroundColor: theme.colors.colorPrimary,
            }}
            onPress={confirmAction}
          >
            <Text
              style={{
                ...styles.modalHeaderButtonText,
                color: theme.colors.white,
              }}
            >
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>

        <Spacer />

        <View style={styles.cancelModalContent}>
          <View style={styles.inputBlock}>
            <Text style={styles.inputText}>
              O prestador corresponde ao visitante?
            </Text>
            <Select
              selectedValue={confirmSelect1}
              setSelectedValue={setConfirmSelect1}
              items={[
                {
                  value: true,
                  label: "Sim",
                },
                {
                  value: false,
                  label: "Não",
                },
              ]}
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.inputText}>
              A visita foi conforme o acordado?
            </Text>
            <Select
              selectedValue={confirmSelect2}
              setSelectedValue={setConfirmSelect2}
              items={[
                {
                  value: true,
                  label: "Sim",
                },
                {
                  value: false,
                  label: "Não",
                },
              ]}
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.inputText}>Adicione um comentário</Text>
            <InputText
              multiline
              value={confirmComment}
              setValue={setConfirmComment}
              style={{
                height: "55%",
              }}
            />
          </View>
        </View>
      </View>
    )
  }

  const ConfirmExecutionModalContent = () => {
    return (
      <View style={{ ...styles.cancelModal, height: 454 }}>
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
              onPress={() => toggleModal(setConfirmExecutionModalVisible)}
            >
              <CloseIcon />
            </TouchableOpacity>
            <Text style={{ ...styles.modalHeaderTitle, fontSize: 16 }}>
              Confirme a execução
            </Text>
          </View>
          <TouchableOpacity
            style={{
              ...styles.modalHeaderButton,
              backgroundColor: theme.colors.colorPrimary,
            }}
            onPress={confirmExecutionAction}
          >
            <Text
              style={{
                ...styles.modalHeaderButtonText,
                color: theme.colors.white,
                fontSize: 12,
              }}
            >
              Confirmar
            </Text>
          </TouchableOpacity>
        </View>

        <Spacer />

        <View style={styles.cancelModalContent}>
          <View style={styles.inputBlock}>
            <Text style={styles.inputText}>
              O prestador corresponde ao visitante?
            </Text>
            <Select
              selectedValue={confirmExecutionSelect1}
              setSelectedValue={setConfirmExecutionSelect1}
              items={[
                {
                  value: true,
                  label: "Sim",
                },
                {
                  value: false,
                  label: "Não",
                },
              ]}
            />
          </View>

          <View style={styles.inputBlock}>
            <Text style={styles.inputText}>
              A execução foi conforme o acordado?
            </Text>
            <Select
              selectedValue={confirmExecutionSelect2}
              setSelectedValue={setConfirmExecutionSelect2}
              items={[
                {
                  value: true,
                  label: "Sim",
                },
                {
                  value: false,
                  label: "Não",
                },
              ]}
            />
          </View>
        </View>
      </View>
    )
  }

  function toggle() {

    Animated.timing(toggleAnimation, {
      toValue: animation ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start(() => {(isToggled = !isToggled);setAnimation(!animation)})
  }

  const handleCancelSchedule = () => {
    const updatedSchedules = favoritesProviders.filter(
      (item) => item.favoriteRelation.id !== favoriteRelationId
    )

    setSchedules(updatedSchedules)
    
    api.delete(`schedule/user/delete/${data.schedule.id}`)
  }

  function confirmAction() { }

  function confirmExecutionAction() { }

  function editAction() { }

  function toggleModal(setState) {
    setState((state) => !state);
  }

  const AnimatedTouchableOpacity =
    Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <Animated.View
      style={{
        ...styles.container,
        maxHeight: toggleAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [84, 2000],
        }),
      }}
    >
      <View style={styles.header}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <AnimatedTouchableOpacity
            style={{
              transform: [
                {
                  rotate: toggleAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["-90deg", "90deg"],
                  }),
                },
              ],
            }}
            onPress={toggle}
          >
            <BackButton />
          </AnimatedTouchableOpacity>
          {data.provider.image ? (
            <Image
              style={styles.userImage}
              source={{uri:data.provider.image}} />
          ) : (
           <></>
          )}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
              marginLeft: 15,
            }}
          >
            <Text style={styles.userName}>{data.provider.name}</Text>
            <Text style={styles.userOffice}>{data.category.category}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => redirecionarParaWhatsApp()}>
      
          <ChatButton />
        </TouchableOpacity>
      </View>

      {animation == false 
      ?
      <></>
      :
      <>
      
      <View style={styles.infos}>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Ordem de serviço</Text>
          <Text style={styles.infoContent}>#{data.schedule.id}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Data & hora</Text>
          <Text style={{ ...styles.infoContent, maxWidth: "60%" }}>
            {new Date()
              .toLocaleString("pt-br")
              .substring(0, 10)}  
            {" - "}
            {new Date()
              .toLocaleString("pt-br")
              .substring(11, 16)}
            {" às "}
            {new Date()
              .toLocaleString("pt-br")
              .substring(11, 16)}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Localização</Text>
          <Text style={{ ...styles.infoContent, maxWidth: "60%" }}>
            {data.address.street}, {data.address.number} -{" "}
            {data.address.city} - {data.address.state}
            {data.address.zipCode}
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Tipo de serviço</Text>
          <Text style={{ ...styles.infoContent, maxWidth: "50%" }}>
            Pacote Completo
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Observações</Text>
          <Text style={{ ...styles.infoContent, maxWidth: "60%" }}>
          Gostaria de utilizar uma câmera minha se possivel          
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>Status</Text>
          <View
            style={{
              ...styles.infoContentStatus,
              backgroundColor: states.find(
                (_o) => _o.status === data.schedule.status
              ).backgroundColor,
            }}
          >
            <Text
              style={{
                ...styles.infoContent,
                maxWidth: "100%",
                color: states.find((_o) => _o.status === data.schedule.status).color,
              }}
            >
              {states.find((_o) => _o.status === data.schedule.status).text}
            </Text>
          </View>
        </View>
      </View>

      {(data.schedule.status === 0 ||
        data.schedule.status === 1 ||
        data.schedule.status === 2) && (
          <View style={styles.actions}>
            {(data.schedule.status === 1 || data.schedule.status === 2) && (
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => toggleModal(setConfirmModalVisible)}
              >
                <Text style={styles.confirmButtonText}>
                  {data.schedule.status === 1
                    ? "Confirmar visita"
                    : "Confirmar execução"}
                </Text>
              </TouchableOpacity>
            )}

            <View style={styles.actionsButtons}>
              <TouchableOpacity
                style={{
                  ...styles.actionsButton,
                  borderColor: theme.colors.red3,
                }}
                onPress={() => toggleModal(setCancelModalVisible)}
              >
                <Text
                  style={{
                    ...styles.actionsButtonText,
                    color: theme.colors.red3,
                  }}
                >
                  Cancelar
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  ...styles.actionsButton,
                  borderColor: theme.colors.colorPrimary,
                }}
                onPress={() => navigation.navigate("EditSchedule")}
              >
                <Text
                  style={{
                    ...styles.actionsButtonText,
                    color: theme.colors.colorPrimary,
                  }}
                >
                  Editar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

      </>
      }


      <Modal
        useNativeDriver
        useNativeDriverForBackdrop
        backdropColor={theme.colors.white}
        coverScreen
        isVisible={cancelModalVisible}
      >
        {CancelModalContent()}
      </Modal>

      <Modal
        useNativeDriver
        useNativeDriverForBackdrop
        backdropColor={theme.colors.white}
        coverScreen
        isVisible={confirmModalVisible}
      >
        {ConfirmModalContent()}
      </Modal>

      <Modal
        useNativeDriver
        useNativeDriverForBackdrop
        backdropColor={theme.colors.white}
        coverScreen
        isVisible={confirmExecutionModalVisible}
      >
        {ConfirmExecutionModalContent()}
      </Modal>
    </Animated.View>
  );
};

export default Schedule;
