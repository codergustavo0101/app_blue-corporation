import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import Header from './components/Header'
import { ScaledSheet } from "react-native-size-matters";
import { theme } from "../../global/theme";
import SearchIcon from "./images/svg/SearchIcon";
import CardDrive from './components/CardDrive';

const Drive = () => {

    return (

        <View style={{ flex: 1, backgroundColor: "white" }}>
            <ScrollView>
            <Header />

            <View style={styles.boxTopHeader}>
                <Text style={styles.textTitleBoxTop}>Meu Drive</Text>
                <View style={styles.boxTopHeaderRigth}>

                    <TouchableOpacity >
                        <SearchIcon />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.boxBottom}>
            <CardDrive/>
            <CardDrive/>
            <CardDrive/>
            <CardDrive/>

            </View>
        </ScrollView>


        </View>
    )
}

const styles = ScaledSheet.create({

    boxTopHeader: {
        paddingTop: "43@s",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        paddingRight: "20@s",
        paddingLeft: "20@s",
    },
    boxBottom:{
        marginTop:"38@s",
        flexDirection:"row",
        justifyContent:"space-between",
        width:"100%",
        flexWrap:"wrap",
        paddingLeft: "20@s",
    },

    textTitleBoxTop: {
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        color: theme.colors.colorPrimary,
        fontSize: "21@s",
    },

})

export default Drive