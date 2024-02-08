import React, { useEffect, useState } from "react";
import {
    StatusBar,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import ToastManager, { Toast } from "toastify-react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

import Input from "./components/Input";
import InputPassWord from "./components/InputPassword";
import ArrowsOrBox from "./components/ArrowsOrBox";
import companyIcon from './images/png/companyIcon.jpg'

import Logo from "./images/png/logo.png";
import api from "../../services/api";
import { theme } from "../../global/theme";

import AsyncStorage from '@react-native-async-storage/async-storage';

const Landing = () => {
    const { control } = useForm();
    const navigation = useNavigation();

    const [mail, setMail] = useState()
    const [password, setPassword] = useState()

    const login = async () => {

        if (mail == undefined){
            return Toast.error("Informe um email!")
        }
        if (password === undefined){
            return Toast.error("Informe uma senha!")
        }

        const response = await api.post("session/storage/panel", {
            mail:mail,
            password:password
        })

        if (response.status == 200) {
            AsyncStorage.setItem("@TOKEN", response.data.token)
            AsyncStorage.setItem("@MAIL", response.data.user.mail)
            AsyncStorage.setItem("@USERID", response.data.user.id)
            navigation.navigate("Dashboard")
            return false
        }

        Toast.error("Email ou senha inválidos!")
    }

    const redirectToRegisterPage = async () => {

        navigation.navigate("Register")
    
    }

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.container}>
            <ToastManager width={"90%"} />

                <StatusBar
                    backgroundColor={theme.colors.background}
                    barStyle={"dark-content"}
                />
                <View style={styles.header}>
                    <Image style={styles.companyIcon} source={companyIcon} />
                    <Text style={styles.textHeader}>Dados de acesso</Text>
                </View>

                <View style={styles.boxInputContainer}>

                    <View style={styles.boxInput}>
                        <Text style={styles.textInput}>E-mail </Text>
                        <Input
                            styleInput={styles.input}
                            name="email"
                            onChangeText={setMail}
                            placeholder="Insira seu e-mail ou telefone"
                        />
                    </View>

                    <View style={styles.boxInput}>
                        <Text style={styles.textInput}>Senha</Text>
                        <InputPassWord
                            name="password"
                            placeholder="Insira sua senha"
                            onChangeText={setPassword}


                            styleInput={styles.input}

                        />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("SendMail")}>
                        <Text style={styles.resetPassword}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonSubmitSingIn} onPress={() => login()}>
                    <Text style={styles.textButtonSingIn}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => redirectToRegisterPage()} style={styles.rowRegister}>
                    <Text style={styles.textPrimaryRegister}>Não tem uma conta?</Text>
                    <Text style={styles.textSecondaryRegister}>Cadastre-se</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    );
};

const styles = ScaledSheet.create({
    container: {
        backgroundColor: "white",
        maxWidth: "375@s",
        padding: "20@s",
        display: "flex",
        alignItems: "center",
        paddingTop: "98@s",
        flex: 1,
    },
    header: {
        display: "flex",
        alignItems: "center",
        gap: "30.4@s",
        marginBottom: "43@s",
    },
    textHeader: {
        fontFamily: theme.fonts.PopinsMedium,
        color: "#476EE6",
        fontSize: "23@s",
    },
    boxInputContainer: {
        display: "flex",
        gap: "25@s",
        width: "100%",
    },
    boxInput: {
        display: "flex",
        gap: "14@s",
    },
    textInput: {
        fontSize: "14@s",
        fontWeight: "400",
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        paddingTop: 14,
        paddingBottom: 14,
        paddingEnd: 11,
        borderColor: "#D7D7D7",
        paddingStart: 11,
        width: "100%",
    },
    resetPassword: {
        fontFamily: theme.fonts.PopinsMedium,
        color: "#476EE6",
        textAlign: "right",
        fontSize: "12@s",
        fontWeight: "500",
    },

    rowRegister:{
        marginTop:"80@s",
        alignItems:"center",
        flexDirection:"row",
    },

    textPrimaryRegister:{
        fontFamily: theme.fonts.PopinsMedium,
        color:"#3C3C43",
        fontSize:"13@s",
    },
    textSecondaryRegister:{
        fontFamily: theme.fonts.PopinsMedium,
        color:"#476EE6",
        marginLeft:"12@s",
        fontSize:"13@s"
    },

    buttonSubmitSingIn: {
        width: "100%",
        height: "48@s",
        backgroundColor: "#476EE6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 60,
        marginTop: "40@s",
    },
    buttonSubmitLogin: {
        width: "100%",
        height: "48@s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 60,
        marginTop: "20@s",
        borderWidth: 1,
    },
    textButtonSingIn: {
        fontSize: "14@s",
        color: "white",
        fontWeight: "500",
    },
    textButtonRegister:{
        fontFamily: theme.fonts.PopinsMedium,


    },
    textButtonLogin: {
        fontSize: "14@s",
        fontWeight: "500",
    },
    textAuth: {
        fontSize: "14@s",
        fontWeight: "500",
    },
    buttonAuth: {
        display: "flex",
        flexDirection: "row",
        gap: "12@s",
        borderWidth: 1,
        width: "100%",
        height: "48@s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 60,
    },
    boxAuth: {
        display: "flex",
        gap: "17@s",
    },
    backgroundText: {
        width: 50,
    },
    boxArrows: {
        marginTop: "44@s",
        marginBottom: "35@s",
    },

    companyIcon:{
        width:170,
        height:120
    }
});

export default Landing;