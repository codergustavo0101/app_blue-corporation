import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import Logo from "../images/svg/Logo";
import CheckUser from "../images/svg/CheckUser";
import sampleUserImage from "../images/png/sampleUserImage.png";
import ShareIcon from "../images/svg/ShareIcon";
import HeartOutline from "../images/svg/HeartOutline";
import StarDisabled from "../images/svg/StarDisabled";

import InputText from "../components/InputText";

import { theme } from "../../../global/styles/theme";

const ExecutionPerformed = () => {
  const [assessment, setAssessment] = useState("");
  const [amountOfStars, setAmountOfStars] = useState(3);

  const styles = ScaledSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      paddingVertical: "40@vs",
      paddingHorizontal: "25@s",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    title: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "21@msr",
      lineHeight: "32@vs",
      color: theme.colors.colorPrimary,
    },
    subtitle: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "14@msr",
      lineHeight: "20@vs",
      textAlign: "center",
    },
    user: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "58@vs",
    },
    userImage: {
      width: 96,
      height: 96,
      borderRadius: "48@msr",
      borderWidth: "1@msr",
      borderColor: theme.colors.thirdBorder,
    },
    userCheckIcon: {
      position: "absolute",
      bottom: 6,
      right: 0,
    },
    userName: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "21@msr",
      lineHeight: "32@vs",
    },
    userOffice: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "14@msr",
      lineHeight: "21@vs",
    },
    stars: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "38@vs",
    },
    confirmButton: {
      backgroundColor: theme.colors.colorPrimary,
      width: "100%",
      height: "48@vs",
      borderRadius: "60@msr",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    confirmButtonText: {
      fontFamily: theme.fonts.fontPoppinsTitle,
      fontSize: "17@msr",
      lineHeight: "26@vs",
      color: theme.colors.white,
    },
  });

  function setStars(_i) {
    setAmountOfStars(_i + 1);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.white}
        barStyle={"dark-content"}
      />
      <Logo />
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 34,
          marginBottom: 34,
        }}
      >
        <Text style={styles.title}>Execução realizada</Text>
        <Text style={styles.subtitle}>
          Para a IZI.jobs melhorar e trazer os melhores prestadores avalie a
          execução do prestador.
        </Text>
      </View>

      <View style={styles.user}>
        <View
          style={{
            width: 96,
            height: 96,
            position: "relative",
          }}
        >
          <Image style={styles.userImage} source={sampleUserImage} />
          <CheckUser style={styles.userCheckIcon} big />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.userName}>Jorge Pereira</Text>
          <Text style={styles.userOffice}>Eletricista</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 34,
          }}
        >
          <TouchableOpacity
            style={{
              marginRight: 25,
              backgroundColor: "#F7F9FB",
              padding: 16,
              borderRadius: 60,
            }}
          >
            <ShareIcon />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#F7F9FB",
              padding: 16,
              borderRadius: 60,
            }}
          >
            <HeartOutline />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: "100%",
        }}
      >
        <View style={styles.stars}>
          {Array(5)
            .fill(0)
            .map((e, _i) => (
              <TouchableOpacity
                key={_i}
                onPress={() => setStars(_i)}
                activeOpacity={0.5}
              >
                <StarDisabled
                  style={{
                    marginHorizontal: 10,
                  }}
                  fill={
                    _i < amountOfStars ? theme.colors.colorPrimary : undefined
                  }
                />
              </TouchableOpacity>
            ))}
        </View>

        <InputText
          style={{
            height: 115,
          }}
          placeholder="Insira uma avaliação"
          placeholderTextColor={theme.colors.grey3}
          multiline
          value={assessment}
          setValue={setAssessment}
        />
      </View>

      <View
        style={{
          marginTop: 32,
          width: "100%",
        }}
      >
        <TouchableOpacity activeOpacity={0.75} style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirmar avaliação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            ...styles.confirmButton,
            backgroundColor: theme.colors.white,
          }}
        >
          <Text
            style={{
              ...styles.confirmButtonText,
              color: theme.colors.colorPrimary,
            }}
          >
            Avançar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ExecutionPerformed;
