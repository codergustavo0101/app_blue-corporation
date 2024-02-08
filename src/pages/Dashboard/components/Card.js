import React from 'react'
import { View,Text,TouchableOpacity,Image,ScrollView } from 'react-native'
import { ScaledSheet } from "react-native-size-matters";
import { theme } from '../../../global/theme';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Card = ({text}) => {
    
    const navigation = useNavigation()

    const redirectToProvidersPage = () => {
        navigation.navigate("Providers")
        AsyncStorage.setItem("@TYPE_SERVICE",text)
    }

    return(
        
        <View style={styles.boxCard}>
            <Text style={styles.textPrimaryBoxCard}>{text}</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() => redirectToProvidersPage()} style={styles.containerInfo}>
                    <View style={styles.headerCard}>
                    <Image style={styles.imageCard} source={{uri:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/hotel.jpg?alt=media&token=0ba9bc65-8b0f-4480-b780-083ddf8ee36a"}}/>
                    </View>

                    <Text style={styles.textPrimary}>COMBO COMPLETO</Text>
                    <Text style={styles.textSecondary}>REELS + CÂMERA + VIDEO</Text>
                    <Text style={styles.textPrice}>R$ 650,00</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => redirectToProvidersPage()} style={styles.containerInfo}>
                    <View style={styles.headerCard}>
                    <Image style={styles.imageCard} source={{uri:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/city-sunset.jpg?alt=media&token=5bf8dd87-72f5-4137-8a1e-9bae48865ebe"}}/>
                    </View>

                    <Text style={styles.textPrimary}>COMBO COMPLETO</Text>
                    <Text style={styles.textSecondary}>REELS + CÂMERA + VIDEO</Text>
                    <Text style={styles.textPrice}>R$ 650,00</Text>

                </TouchableOpacity>


                <TouchableOpacity onPress={() => redirectToProvidersPage()} style={styles.containerInfo}>
                    <View style={styles.headerCard}>
                    <Image style={styles.imageCard} source={{uri:"https://firebasestorage.googleapis.com/v0/b/storagecasaretrato.appspot.com/o/cozy-living-room-interior-with-panoramic-window.jpg?alt=media&token=5b3b98b3-b4a5-48a9-8660-9ff4dda8165b "}}/>
                    </View>

                    <Text style={styles.textPrimary}>COMBO COMPLETO</Text>
                    <Text style={styles.textSecondary}>REELS + CÂMERA + VIDEO</Text>
                    <Text style={styles.textPrice}>R$ 650,00</Text>

                </TouchableOpacity>

                </ScrollView>

                

        </View>
    )
}

const styles = ScaledSheet.create({
    boxCard:{
        marginTop:"24@s",
    },

    rowCard:{
        flexDirection:"row",
    },

    headerCard:{
        justifyContent:"center",
        alignItems:"center"
    },

    textPrimary:{
        marginTop:"13@s",
        fontFamily:theme.fonts.PopinsRegular,
        fontSize:"12@s",
        color:"#525252"
    },

    textPrimaryBoxCard:{
        marginTop:"13@s",
        fontFamily:theme.fonts.PopinsMedium,
        fontSize:"17@s",
        color:"black"
    },

    textSecondary:{
        marginTop:"6@s",
        fontFamily:theme.fonts.PopinsMedium,
        fontSize:"10@s",
        color:"black"
    },

    textPrice:{
        marginTop:"6@s",
        fontFamily:theme.fonts.PopinsMedium,
        fontSize:"12@s",
        color:"black"
    },

    containerInfo:{
        justifyContent:"center",
        marginRight:"56@s",
        marginTop:"30@s",   

    },
    imageCard:{
        width:90,      
        resizeMode:"cover",
        height:90,        
        borderWidth:1,
        borderColor:"#4838FD",
        borderRadius:100,
    }
  });


export default Card