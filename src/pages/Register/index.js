import React, { useState } from "react";
import { View, Text, ScrollView, Image,TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import Input from "./components/Input";
import InputPassword from "./components/InputPassword";
import companyIcon from './images/png/companyIcon.jpg'
import { theme } from "../../global/theme";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native"
import AsyncStorage from "@react-native-async-storage/async-storage";
const Register = () => {


    const [name, setName] = useState()
    const [cpf, setCpf] = useState()
    const [mail, setMail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassoword] = useState()

    /* ERROR MESSAGES */
    const [nameError,setNameError] = useState()
    const [cpfError,setCpfError] = useState()
    const [mailError,setMailError] = useState()
    const [passwordError,setPasswordError] = useState()
    const [confirmPasswordError,setConfirmPasswordError] = useState()

    const navigation = useNavigation()

    const register = async () => {
        
        if(name == undefined){
            setNameError("Informe um nome")
        }

        if(cpf == undefined){
            setCpfError("Informe um cpf")
        }

        if(mail == undefined){
            setMailError("Informe um email")
        }

        if(password == undefined){
            setPasswordError("Informe uma senha ")
        }

        if(confirmPassword != password){
            setConfirmPasswordError("Senhas diferentes")
        }

        if(name == undefined || cpf == undefined || mail == undefined || password == undefined || confirmPassword != password){
            return false
        }

        const response = await api.post("panel/storage",{
            "name":name,
            "cpf":cpf,
            "mail":mail,
            "password_hash":confirmPassword,
            "pix":""
        })


        if(response.status == 200){
            AsyncStorage.setItem("@TOKEN", response.data.token)
            AsyncStorage.setItem("@MAIL", response.data.user.mail)
            navigation.navigate("Dashboard")
        }
        

    }

    return (

        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.container}>
                <Image source={companyIcon} style={styles.companyIcon} />

                <Text style={styles.textHeader}>Cadastro</Text>

                <Input
                    styleInput={styles.input}
                    name="Nome"
                    
                    onChangeText={setName}
                    placeholder="Insira seu nome"
                />


                <Input
                    styleInput={styles.input}
                    name="CPF"
                    mask={true}
                    type={"numeric"}
                    typeMask={"cpf"}
                    onChangeText={setCpf}
                    placeholder="Insira seu CPF "
                />

                <Input
                    styleInput={styles.input}
                    name="Email"
                    onChangeText={setMail}
                    placeholder="Insira seu email"
                />

                <InputPassword
                    styleInput={styles.input}
                    name="Senha"
                    onChangeText={setPassword}

                    type={"password"}
                />

                <InputPassword
                    styleInput={styles.input}
                    onChangeText={setConfirmPassoword}
                    name="Confirmar senha"
                    type={"password"}
                />


                <TouchableOpacity style={styles.buttonSubmitSingIn} onPress={() => register()}>
                    <Text style={styles.textButtonSingIn}>Cadastrar</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>

    )
}

const styles = ScaledSheet.create({
    container: {
        paddingTop: "32@s",
        paddingLeft: "12@s",
    },
    textInput: {
        fontSize: "14@s",
        fontWeight: "400",
    },
    input: {
        marginTop: "20@s",
        marginBottom: "20@s",
        borderWidth: 1,
        paddingLeft: "10@s",
        borderRadius: 10,
        paddingTop: 14,
        height: "52@s",
        paddingBottom: 14,
        paddingEnd: 11,
        fontSize: "13@s",
        fontFamily: theme.fonts.PopinsMedium,
        color: "#A0A0A0",
        borderColor: "#D7D7D7",
        paddingStart: 11,
        width: "324@s",
    },

    companyIcon: {
        width: 170,
        height: 130
    },
    textHeader: {
        marginBottom: "18@s",
        fontFamily: theme.fonts.PopinsMedium,
        color: "#476EE6",
        fontSize: "23@s",
    },
    buttonSubmitSingIn: {
        width: "324@s",
        height: "48@s",
        backgroundColor: "#476EE6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 60,
        marginTop: "10@s",
        marginBottom:"25@s"
    },
    textButtonSingIn: {
        fontSize: "14@s",
        color: "white",
        fontWeight: "500",
    },

})

export default Register