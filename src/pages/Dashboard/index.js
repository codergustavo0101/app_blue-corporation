import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import Header from './components/Header'
import { ScaledSheet } from "react-native-size-matters";
import { theme } from '../../global/theme';
import DashboardCard from './components/DashboardCard';
import Transactions from './components/Transactions';
import Modal from "react-native-modal";
import InputMoney from './components/InputMoney';
import ToastManager, { Toast } from 'toastify-react-native';
import Input from './components/Input';
import pixIcon from './images/png/pixIcon.webp'
import api from '../../services/api';
import loader from './images/png/animation.gif'
import LottieView from 'lottie-react-native';

const Dashboard = () => {

    const [cancelModalVisible, setCancelModalVisible] = useState()
    const [solicit, setSolicit] = useState(0)
    const [value, setValue] = useState(0)
    const [animation, setAnimation] = useState(false)
    const [pix, setPix] = useState()

    /* ERROR MESSAGES */
    const [solictError, setSolicitError] = useState(false)
    const [pixError, setPixError] = useState(false)

    const storageSolicit = async () => {

        if (solicit == 0) {
            setSolicitError(true)
        }

        if (pix == undefined || pix == "") {
            setPixError(true)
        }

        if (solicit == 0 || pix == undefined || pix == "") {
            return false
        }

        setAnimation(true)

        const response = await api.post("balance/storage", {
            "user_solicit": solicit
        })

        
        if (response.status == 401) {
            setAnimation(false)
            setCancelModalVisible(false)
            setPix()
            setSolicit(0)
            Toast.error("Saldo insuficiente!")
        }
    }

    useEffect(() => {

        if (solicit != 0) {
            setSolicitError()
        }

        if (pix != undefined && pix != "") {
            setPixError(false)
        }

    }, [solicit, pix])

    const CancelModalContent = () => {
        return (
            <View style={styles.cancelModal}>

                <View style={styles.modalHeader}>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyConAtent: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                            }}
                            onPress={() => toggleModal(setCancelModalVisible)}
                        >
                        </TouchableOpacity>
                        <Text style={styles.modalHeaderTitle}>Solicitação</Text>
                    </View>
                    <TouchableOpacity
                            onPress={() => setCancelModalVisible(false)}

                        style={{
                            ...styles.modalHeaderButton,
                            backgroundColor: theme.colors.red2,
                        }}
                    // onPress={handleCancelSchedule}
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

                {/* <Spacer /> */}

                <Text style={styles.textPrimarySolicit}>
                    Informe um valor para solicitar
                </Text>

                <InputMoney error={solictError} value={solicit} onChangeText={setSolicit} />
                <Input error={pixError} onChangeText={setPix} placeholder={"Chave Pix"} type={"text"} />

                <TouchableOpacity style={styles.btnSend} onPress={() => storageSolicit()}>
                    {animation == true
                        ?
                        <LottieView autoPlay style={{ width: 220 }} source={require("./images/json/animation.json")} />
                        :
                        <>
                            <Image style={styles.imageBtn} source={pixIcon} />
                            <Text style={styles.textPrimaryBtnSend}>Confirmar</Text>
                        </>
                    }
                </TouchableOpacity>

            </View>
        )
    }


    return (

        <>
            <Header />
            <ToastManager width={"90%"} />

            <ScrollView style={{ backgroundColor: "white" }}>
                <View style={styles.boxServices}>
                    <Text style={styles.textPrimary}>Dashboard</Text>
                    <DashboardCard onPress={() => setCancelModalVisible(true)} />
                    <Transactions />

                    <Modal
                        useNativeDriver
                        useNativeDriverForBackdrop
                        backdropColor={theme.colors.white}
                        coverScreen
                        isVisible={cancelModalVisible}
                    >
                        {CancelModalContent()}
                    </Modal>

         


                </View>
            </ScrollView>

        </>

    )
}

const styles = ScaledSheet.create({

    boxServices: {
        marginTop: "22@s",
        paddingLeft: "22@s"
    },

    textPrimary: {
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        fontSize: "23@s",
        color: "#020066"
    },
    cancelModal: {
        backgroundColor: theme.colors.background,
        position: "absolute",
        bottom: 0,
        left: 0,
        marginLeft: -18,
        marginBottom: -18,

        width: Dimensions.get("screen").width,
        height: "382@vs",

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

    loaderIcon: {
        width: 150,
        resizeMode: "cover"

    },
    textPrimarySolicit: {
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        fontSize: "15@s",
        marginLeft: "22@s"
    },
    btnSend: {
        flexDirection: "row",
        backgroundColor: "#2B2D33",
        width: "276@s",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        borderRadius: 33,
        height: 55,
        marginLeft: "22@s",
        marginTop: "35@s"
    },
    textPrimaryBtnSend: {
        fontSize: "14@s",
        flex: 0.7,
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        color: "white",
        textAlign: "center",
    },
    imageBtn: {
        width: 25,
        height: 25,
    }
})

export default Dashboard