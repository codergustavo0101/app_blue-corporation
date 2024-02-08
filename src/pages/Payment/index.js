import React, { useState } from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity, Modal } from 'react-native'
import Header from './components/Header'

import { ScaledSheet } from 'react-native-size-matters'
import { theme } from '../../global/theme'
import cartIcon from './images/png/cartIcon.png'
import Card from './components/Card'
const Payment = () => {
    const [cancelModalVisible, setCancelModalVisible] = useState(false);

    const styles = ScaledSheet.create({
        box: {
            marginTop: "37@s",
            justifyContent: "center",
            alignItems: "center",

        },
        total: {
            backgroundColor: "#020066",
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "13@s",
            paddingRight: "13@s",
            width: "317@s",
            height: 56,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,
        },
        textPrimary: {
            fontFamily: theme.fonts.PopinsRegular,
            color: "white",
            fontSize: "19@s"
        },
        textSecondary: {
            fontFamily: theme.fonts.fontPoppinsTitleBold,
            color: "white",
            fontSize: "18@s"
        },
        services: {
            flexDirection: "row",
            alignItems: "center"
        },
        services: {
            width: "317@s",
            marginBottom: "20@s"
        },
        boxServices: {
            marginTop: "26@s",
            flexDirection: "row",
            alignItems: "center"
        },
        texBoxService: {
            fontFamily: theme.fonts.PopinsRegular,
            marginLeft: "14@s",
            fontSize: "14@s"
        },

        containerButton: {

            backgroundColor: "white",
            position: "absolute",
            bottom: 0,
            alignItems: "center",
            justifyContent: "center"

        },
        editButton: {
            backgroundColor: theme.colors.colorPrimary,
            borderRadius: "60@msr",
            width: "317@s",
            height: "48@vs",
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

        scrollCard: {
            height: "380@s"
        }
    })

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
                        >
                        </TouchableOpacity>
                        <Text style={styles.modalHeaderTitle}>Cancelamento</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            ...styles.modalHeaderButton,
                            backgroundColor: theme.colors.red2,
                        }}

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


                <View style={styles.cancelModalContent}>
                    <Text style={styles.cancelText}>
                        Tem certeza que deseja cancelar o agendamento?
                    </Text>

                </View>
            </View>
        )
    }

    return (

        <View style={{ backgroundColor: "white", flex: 1 }}>
            <Header />
            <ScrollView >
                <View style={styles.box}>
                    <View style={styles.total}>
                        <Text style={styles.textPrimary}>Total</Text>
                        <Text style={styles.textSecondary}>R$ 490,00</Text>
                    </View>

                    <View style={styles.services}>
                        <View style={styles.boxServices}>
                            <Image source={cartIcon} style={{ width: 46, height: 46 }} />
                            <Text style={styles.texBoxService}>Aqui estão seus serviços {`\n`}selecionados!</Text>
                        </View>
                    </View>

                    <ScrollView style={styles.scrollCard}>
                        <View style={{ height: 20 }}></View>

                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <View style={{ height: 70 }}></View>

                    </ScrollView>

                    <View style={styles.containerButton}>
                        <TouchableOpacity onPress={() => setCancelModalVisible(true)} style={styles.editButton}>
                            <Text
                                style={styles.editButtonText}>
                                Escolher Pagamento
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>


            <Modal
                useNativeDriver
                useNativeDriverForBackdrop
                backdropColor={theme.colors.white}
                coverScreen
                isVisible={false}
            >
                {CancelModalContent()}
            </Modal>

        </View>


    )
}

export default Payment