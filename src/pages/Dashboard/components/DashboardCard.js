import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ScaledSheet } from "react-native-size-matters";
import { theme } from "../../../global/theme";
import sendIcon from '../images/png/sendIcon.png'
import depositIcon from '../images/png/depositIcon.png'

const DashboardCard = ({onPress}) => {
    return (

        <View style={styles.boxCard}>

            <View style={styles.header}>
                <Text style={styles.textPrimary}>Minha Carteira </Text>
                <TouchableOpacity style={styles.btn}><Text style={styles.textBtn}>X82618S</Text></TouchableOpacity>
            </View>

            <View style={styles.rowBalance}>
                <Text style={styles.textBalance}>R$ 15.000,00 </Text>

                <TouchableOpacity style={styles.performance}>
                    <Text style={styles.textPerformance}>+15.5% </Text>

                </TouchableOpacity>
            </View>

            <View style={styles.rowButtons}>

                <TouchableOpacity onPress={onPress} style={styles.btnsolicit}>
                    <Image style={styles.imageBtn} source={sendIcon} />
                    <Text style={styles.textBtnSolicit}>Solicitar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={onPress} style={styles.btnDeposit}>
                <Image style={styles.imageBtn} source={depositIcon} />
                    <Text style={styles.textBtnSolicit}>Depositar</Text>
                </TouchableOpacity>


            </View>


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
        flex:0.7,
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        color: "white",
        textAlign: "center",
    },
    imageBtn: {
        width: 15,
        height: 15,
    }

});

export default DashboardCard