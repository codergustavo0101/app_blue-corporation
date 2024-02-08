import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { theme } from '../../../global/theme'
import transactionIcon from '../images/png/transacao.png'
const Transactions = () => {

    const randomColor = () => {
        const colors = ["#5876EB", "#F1A224", "#E84142"];

        return colors[Math.floor(Math.random() * colors.length)];
    };
    return (

        <View style={styles.container}>

            <Text style={styles.textPrimary}>Solicitações</Text>

            <TouchableOpacity style={styles.containerBtn}>

                <View style={styles.rowBtn}>
                    <View style={[styles.boxTransaction, { backgroundColor: randomColor() }]}>
                        <Image style={styles.image} source={transactionIcon} />
                    </View>

                    <View style={styles.boxCard}>
                        <Text style={styles.textPrimaryBox}>Solicitação</Text>
                        <Text style={styles.textSecondaryBoxPrice}>R$ 320,00</Text>
                    </View>


                    <View style={styles.boxCard}>
                        <Text style={styles.textPrimaryBox}>Data</Text>
                        <Text style={styles.textSecondaryBox}>08/02/2024</Text>
                    </View>

                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.containerBtn}>

                <View style={styles.rowBtn}>
                    <View style={[styles.boxTransaction, { backgroundColor: randomColor() }]}>
                        <Image style={styles.image} source={transactionIcon} />
                    </View>

                    <View style={styles.boxCard}>
                        <Text style={styles.textPrimaryBox}>Solicitação</Text>
                        <Text style={styles.textSecondaryBoxPrice}>R$ 320,00</Text>
                    </View>


                    <View style={styles.boxCard}>
                        <Text style={styles.textPrimaryBox}>Data</Text>
                        <Text style={styles.textSecondaryBox}>08/02/2024</Text>
                    </View>

                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.containerBtn}>

                <View style={styles.rowBtn}>
                    <View style={[styles.boxTransaction, { backgroundColor: randomColor() }]}>
                        <Image style={styles.image} source={transactionIcon} />
                    </View>

                    <View style={styles.boxCard}>
                        <Text style={styles.textPrimaryBox}>Solicitação</Text>
                        <Text style={styles.textSecondaryBoxPrice}>R$ 320,00</Text>
                    </View>


                    <View style={styles.boxCard}>
                        <Text style={styles.textPrimaryBox}>Data</Text>
                        <Text style={styles.textSecondaryBox}>08/02/2024</Text>
                    </View>

                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.containerBtn}>

                <View style={styles.rowBtn}>
                    <View style={[styles.boxTransaction, { backgroundColor: randomColor() }]}>
                        <Image style={styles.image} source={transactionIcon} />
                    </View>

                    <View style={styles.boxCard}>
                        <Text style={styles.textPrimaryBox}>Solicitação</Text>
                        <Text style={styles.textSecondaryBoxPrice}>R$ 320,00</Text>
                    </View>


                    <View style={styles.boxCard}>
                        <Text style={styles.textPrimaryBox}>Data</Text>
                        <Text style={styles.textSecondaryBox}>08/02/2024</Text>
                    </View>

                </View>

            </TouchableOpacity>

            <TouchableOpacity style={styles.containerBtn}>

                <View style={styles.rowBtn}>
                    <View style={[styles.boxTransaction, { backgroundColor: randomColor() }]}>
                        <Image style={styles.image} source={transactionIcon} />
                    </View>

                    <View style={styles.boxCard}>
                        <Text style={styles.textPrimaryBox}>Solicitação</Text>
                        <Text style={styles.textSecondaryBoxPrice}>R$ 320,00</Text>
                    </View>


                    <View style={styles.boxCard}>
                        <Text style={styles.textPrimaryBox}>Data</Text>
                        <Text style={styles.textSecondaryBox}>08/02/2024</Text>
                    </View>

                </View>

            </TouchableOpacity>



        </View>

    )
}

const styles = ScaledSheet.create({

    container: {
        marginTop: "25@s",
    },



    rowBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
    },

    textPrimary: {
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        fontSize: "17@s"
    },
    textSecondaryBox: {
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        fontSize: "11@s",
        color: "#9194A6"
    },



    textSecondaryBoxPrice: {
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        fontSize: "11@s",
        color: "#32B153"
    },

    textPrimaryBox: {
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        fontSize: "12@s",
    },

    boxCard: {
        marginLeft: "15@s",
        marginTop: "12@s",
        width: "140@s",
    },

    boxTransaction: {

        marginTop: "20@s",
        backgroundColor: "#5876EB",
        width: 60,
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        borderRadius: 30,

        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
        borderRadius: 33,
        height: 60,
    },

    image: {
        width: 25,
        height: 25
    }

})

export default Transactions