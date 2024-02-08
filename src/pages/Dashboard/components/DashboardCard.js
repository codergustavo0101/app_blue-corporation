import React, { useEffect, useState } from 'react'

import { View, Text, TouchableOpacity, Image, Dimensions, Clipboard } from 'react-native'
import { ScaledSheet } from "react-native-size-matters";
import { theme } from "../../../global/theme";
import sendIcon from '../images/png/sendIcon.png'
import depositIcon from '../images/png/depositIcon.png'
import api from '../../../services/api';
import Modal from "react-native-modal";
import InputMoney from './InputMoney';
import pixIcon from '../images/png/pixIcon.webp'

import LottieView from 'lottie-react-native';

const DashboardCard = ({ onPress }) => {

    const [total, setTotal] = useState()
    const [walletId, setWalletId] = useState()
    const [modalDepositVisible, setModalDepoistVisible] = useState()
    const [modalPix, setModalPix] = useState()
    const [value, setValue] = useState(0)
    const [valuePix, setValuePix] = useState()
    const [animation, setAnimation] = useState()

    const storagePix = async () => {
        setAnimation(true)
        const response = await api.post("investment/storage", {
            user_solicit: value
        })

        if (response.status == 200) {
            setModalPix(false)
            setAnimation(false)
        }



    }

    const storage = async () => {

        if (value != 0) {
            setModalDepoistVisible(false)
            setModalPix(true)
        }

    }

    const get = async () => {
        const response = await api.post("balance/wallet")
        setTotal(response.data.total)
        setWalletId(response.data.wallet_id)
    }

    const copy = () => {
        Clipboard.setString("381.228.218.63")
    }


    useEffect(() => {

        get()

    }, [])


    const ModalPix = () => {
        return (
            <View style={styles.modalPix}>
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
                            }}
                            onPress={() => toggleModal(setCancelModalVisible)}
                        >
                        </TouchableOpacity>
                        <Text style={styles.modalHeaderTitle}>Depositar</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalPix(false)}

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
                    Realize um pix de {Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.
                </Text>

                <Text style={styles.textPrimarySolicit}>Para a chave (CPF) abaixo:</Text>

                <TouchableOpacity style={styles.btnPix} onPress={() => copy()}>
                    <Text style={styles.textPrimarySolicit}>381.228.218.63</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend} onPress={() => storagePix()}>
                    {animation == true
                        ?
                        <LottieView autoPlay style={{ width: 220 }} source={require("../images/json/animation.json")} />
                        :
                        <>
                            <Image style={styles.imageBtn} source={pixIcon} />
                            <Text style={styles.textPrimaryBtnSend}>Confirmar Pix</Text>
                        </>
                    }
                </TouchableOpacity>

            </View>
        )
    }

    const ModalSucess = () => {

        return (
            <View style={styles.modalPix}>
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
                            }}
                            onPress={() => toggleModal(setCancelModalVisible)}
                        >
                        </TouchableOpacity>
                        <Text style={styles.modalHeaderTitle}>Sucesso</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalPix(false)}

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
                            Fechar
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* <Spacer /> */}

                <Text style={styles.textPrimarySolicit}>
                    Realize um pix de {Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}.
                </Text>

                <Text style={styles.textPrimarySolicit}>Para a chave (CPF) abaixo:</Text>

                <TouchableOpacity style={styles.btnPix} onPress={() => copy()}>
                    <Text style={styles.textPrimarySolicit}>381.228.218.63</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSend} onPress={() => storagePix()}>
                    {animation == true
                        ?
                        <LottieView autoPlay style={{ width: 220 }} source={require("../images/json/animation.json")} />
                        :
                        <>
                            <Image style={styles.imageBtn} source={pixIcon} />
                            <Text style={styles.textPrimaryBtnSend}>Confirmar Pix</Text>
                        </>
                    }
                </TouchableOpacity>

            </View>
        )

    }


    const DepositModalContent = () => {
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
                            }}
                            onPress={() => toggleModal(setCancelModalVisible)}
                        >
                        </TouchableOpacity>
                        <Text style={styles.modalHeaderTitle}>Depositar</Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => setModalDepoistVisible(false)}

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
                    Informe um valor para depositar
                </Text>

                <InputMoney value={value} onChangeText={setValue} />

                <TouchableOpacity style={styles.btnSend} onPress={() => storage()}>
                    <Image style={styles.imageBtn} source={pixIcon} />
                    <Text style={styles.textPrimaryBtnSend}>Confirmar</Text>
                </TouchableOpacity>

            </View>
        )
    }

    return (

        <View style={styles.boxCard}>



            <View style={styles.header}>
                <Text style={styles.textPrimary}>Minha Carteira </Text>
                <TouchableOpacity style={styles.btn}><Text numberOfLines={1} style={styles.textBtn}>{walletId}</Text></TouchableOpacity>
            </View>

            <View style={styles.rowBalance}>
                <Text style={styles.textBalance}>{Number(total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} </Text>
                <TouchableOpacity style={styles.performance}>
                    <Text style={styles.textPerformance}>+15.5% </Text>

                </TouchableOpacity>
            </View>

            <View style={styles.rowButtons}>

                <TouchableOpacity onPress={onPress} style={styles.btnsolicit}>
                    <Image style={styles.imageBtn} source={sendIcon} />
                    <Text style={styles.textBtnSolicit}>Solicitar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnDeposit} onPress={() => setModalDepoistVisible(true)}>
                    <Image style={styles.imageBtn} source={depositIcon} />
                    <Text style={styles.textBtnSolicit}>Depositar</Text>
                </TouchableOpacity>


            </View>

            <Modal
                useNativeDriver
                useNativeDriverForBackdrop
                backdropColor={theme.colors.white}
                coverScreen
                isVisible={modalDepositVisible}
            >
                {DepositModalContent()}
            </Modal>

            <Modal
                useNativeDriver
                useNativeDriverForBackdrop
                backdropColor={theme.colors.white}
                coverScreen
                isVisible={modalPix}
            >
                {ModalPix()}
            </Modal>

            <Modal
                useNativeDriver
                useNativeDriverForBackdrop
                backdropColor={theme.colors.white}
                coverScreen
                isVisible={modalPix}
            >
                {ModalSucess()}
            </Modal>




        </View>

    )
}

const styles = ScaledSheet.create({
    boxCard: {
        marginTop: "15@s"
    },

    header: {
        flexDirection: "row",
        alignItems: "center"
    },

    textPrimary: {
        fontFamily: theme.fonts.PopinsRegular,
        color: "#9D9FAF",
        fontSize: "12@s"
    },

    textBalance: {
        fontSize: "34@s",
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        color: "#2B2D33",
    },
    textBtn: {
        fontSize: "11@s",
        fontFamily: theme.fonts.PopinsRegular,
        color: "#2B2D33",
        textAlign: "center",
    },

    rowBalance: {
        marginTop: "5@s",
        justifyContent: "space-between",
        width: "93%",
        flexDirection: "row",
    },

    performance: {

        width: "60@s",
        height: 30,
        marginTop: "8@s",
        justifyContent: "center",
        alignItems: "center",

        borderRadius: 20,
        backgroundColor: "#32B153"
    },

    textPerformance: {
        fontSize: "13@s",
        fontFamily: theme.fonts.PopinsMedium,
        color: "white",
        textAlign: "center",
    },

    btn: {
        padding: "2@s",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5@s",
        width: "65@s",
        borderRadius: 20,
        backgroundColor: "#F4F5F8",

    },

    rowButtons: {
        marginTop: "6@s",
        width: "93%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    btnsolicit: {
        flexDirection: "row",
        backgroundColor: "#2B2D33",
        width: "136@s",
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
        height: 45
    },
    btnDeposit: {
        flexDirection: "row",
        backgroundColor: "#2B2D33",
        width: "136@s",
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
        height: 45
    },
    textBtnSolicit: {
        fontSize: "14@s",
        flex: 0.7,
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        color: "white",
        textAlign: "center",
    },
    imageBtn: {
        width: 15,
        height: 15,
    },
    modalPix: {
        backgroundColor: theme.colors.background,
        position: "absolute",
        bottom: 0,
        left: 0,
        marginLeft: -18,
        marginBottom: -18,

        width: Dimensions.get("screen").width,
        height: "282@vs",

        borderTopLeftRadius: "20@msr",
        borderTopRightRadius: "20@msr",
        elevation: 25,
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

    textPrimarySolicit: {
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        fontSize: "15@s",
        marginLeft: "22@s"
    },
    btnPix: {
        marginTop: "15@s",
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


});

export default DashboardCard