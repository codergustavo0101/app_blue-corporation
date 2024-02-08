import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import ToastManager from "toastify-react-native";
import moment from "moment/moment";
import "moment/min/locales";

import PageHeader from "../components/PageHeader";
import SelectDate from "../components/SelectDate";
import SelectTime from "../components/SelectTime";
import Select from "../components/Select";
import InputText from "../components/InputText";

import { theme } from "../../../global/styles/theme";

const EditSchedule = ({ navigation }) => {
  moment.locale("pt-br");

  const [dateList, setDateList] = useState([]);
  const [sectionService, setSectionService] = useState([]);

  const [currentDateNow] = useState(moment().format("LL"));
  const [currentDate] = useState(moment().add(1, "month").format("LL"));

  const [duringDateNow] = useState(moment().daysInMonth());
  const [duringDate] = useState(moment().add(1, "months").daysInMonth());
  const [duringDateFuture] = useState(moment().add(2, "months").daysInMonth());

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
  };

  const [sectionHours, setSectionHours] = useState(
    servicesHoursProvider.hoursAvailable[0]
  );
  const [sectionHoursEnd, setSectionHoursEnd] = useState(
    servicesHoursProvider.hoursAvailable[2]
  );

  const [typeOfService, setTypeOfService] = useState(0);
  const [serviceDescription, setServiceDescription] = useState("");

  const [street, setStreet] = useState("Av. Brg. Faria Lima");
  const [number, setNumber] = useState("2355");
  const [complement, setComplement] = useState("Conj. 1102");
  const [neightborhood, setNeightborhood] = useState("Jardim XD");
  const [city, setCity] = useState("São Paulo");
  const [state, setState] = useState("SP");
  const [zipCode, setZipCode] = useState("04736-040");

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
    editButtonText: {
      fontFamily: theme.fonts.fontPoppinsContent,
      fontSize: "16@msr",
      lineHeight: "24@vs",
      color: theme.colors.white,
    },
  });

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
  }, []);

  return (
    <View style={styles.container}>
      <ToastManager />
      <PageHeader
        onBackPress={() => navigation.goBack()}
        title="Editar agendamento"
      />
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Selecione uma data</Text>
          <SelectDate
            dateList={dateList}
            sectionService={sectionService}
            setSectionService={setSectionService}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Selecione um horário</Text>
          <SelectTime
            servicesHoursProvider={servicesHoursProvider}
            sectionHours={sectionHours}
            setSectionHours={setSectionHours}
            sectionHoursEnd={sectionHoursEnd}
            setSectionHoursEnd={setSectionHoursEnd}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tipo de serviço</Text>
          <Select
            selectedValue={typeOfService}
            setSelectedValue={setTypeOfService}
            items={[
              {
                label: "Instalação de cerca elétrica",
                value: 0,
              },
              {
                label: "Encanador",
                value: 1,
              },
            ]}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descrição do serviço</Text>
          <InputText
            multiline
            value={serviceDescription}
            setValue={setServiceDescription}
            style={{ height: 134 }}
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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Rua</Text>
          <InputText value={street} setValue={setStreet} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Número</Text>
          <InputText value={number} setValue={setNumber} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Complemento</Text>
          <InputText value={complement} setValue={setComplement} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bairro</Text>
          <InputText value={neightborhood} setValue={setNeightborhood} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Complemento</Text>
          <InputText value={complement} setValue={setComplement} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cidade</Text>
          <InputText value={city} setValue={setCity} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estado</Text>
          <InputText value={state} setValue={setState} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>CEP</Text>
          <InputText value={zipCode} setValue={setZipCode} />
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EditSchedule;
