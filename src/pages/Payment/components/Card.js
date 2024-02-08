import React from 'react'
import { View, Text, Image} from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import { theme } from '../../../global/theme'
import trash from '../images/png/trash-bin.png'
const Card = () => {

    const styles = ScaledSheet.create({
        container: {
            width:"316@s",
            height:80,
            paddingLeft:"10@s",
            paddingRight:"10@s",
            alignItems:"center",
            backgroundColor:"white",
            borderRadius:25,
            justifyContent:"space-between",
            flexDirection:"row",
            shadowColor: "#000",
            marginBottom:"20@s",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,
            
            elevation: 6,
        },
        textPrimary:{
            fontFamily:theme.fonts.PopinsMedium,
            fontSize:"15@s",
        },

        secondary:{
            fontFamily:theme.fonts.PopinsMedium,
            fontSize:"14@s",
            color:"#5A5A5A"
        },
        
        trashIcon:{
            width:35,
            height:35
        }
    })

    return (
        <View style={styles.container}>
        
        <Image style={{width:64,height:64,borderRadius:100}} source={{uri:"https://grantec.com.br/wp-content/uploads/2021/10/casa-alto-padrao-01.jpg"}}/>        
        <View>

        <View>
        <Text style={styles.textPrimary}>Combo Completo</Text>
        <Text style={styles.secondary}>R$ 120,00</Text>
        </View>

        </View>
        <Image source={trash} style={styles.trashIcon}/>

        </View>

    )
}

export default Card