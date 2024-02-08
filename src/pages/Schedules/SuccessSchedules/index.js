import React from "react";
import { ScaledSheet } from "react-native-size-matters";
import Logo from "../images/svg/Logo";
import ToastManager from "toastify-react-native";
import {
  StatusBar,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  ScrollView,
} from "react-native";
import { theme } from "../../../global/styles/theme";
import PersonStandby from "../images/svg/PersonStandby";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const SucessShedules = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <ToastManager />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={styles.container}>
          <StatusBar backgroundColor="transparent" barStyle={"dark-content"} />

          <View style={styles.header}>
            <Logo />
            <Text style={styles.textHeader}>Agendamento realizado</Text>

            <Text style={styles.textDescriptionHeader}>
              Seu agendamento foi realizado com sucesso, você pode acessar os
              detalhes na tela de agendamentos.
            </Text>
          </View>
          <PersonStandby />
          <TouchableOpacity
            onPress={() => navigation.navigate("Shedules")}
            style={styles.buttonSubmitSucessShedules}
          >
            <Text style={styles.textButtonSingIn}>Ir para os agendamentos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
            <Text style={styles.textFooter}>Ir para tela de inicio</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    maxWidth: "375@s",
    padding: "20@s",
    display: "flex",
    alignItems: "center",
    paddingTop: "58@s",
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "30.4@s",
    marginBottom: "43@s",
  },
  textHeader: {
    fontSize: "20@s",
    fontFamily: theme.fonts.fontPoppinsTitle,
    color: theme.colors.colorPrimary,
    textAlign: "center",
  },
  textDescriptionHeader: {
    fontSize: "12@s",
    fontFamily: theme.fonts.fontPoppinsContent,
    textAlign: "center",
  },
  buttonSubmitSucessShedules: {
    backgroundColor: theme.colors.colorPrimary,
    width: "100%",
    height: "48@s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    marginTop: "93@s",
    borderWidth: 1,
    borderColor: theme.colors.grey0,
    marginBottom: "22@s",
  },
  textButtonSingIn: {
    fontSize: "14@s",
    fontWeight: 500,
    color: theme.colors.white,
  },
  textButtonSucessShedules: {
    color: theme.colors.black,
    fontSize: "14@s",
    fontWeight: 500,
  },
  textFooter: {
    fontFamily: theme.fonts.fontPoppinsTitle,
    fontSize: "12@s",
    color: theme.colors.colorPrimary,
  },
});

export default SucessShedules;
