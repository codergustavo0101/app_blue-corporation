import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native'
import driveIcon from '../images/png/cardIcon.png'
import { theme } from '../../../global/theme'
import {ScaledSheet} from 'react-native-size-matters'
import { Linking } from 'react-native';

const CardDrive = () => {
    const redirectToDrive = () => {     
        const url = "https://drive.google.com/drive/folders/1OquUlT1w5D9gNUVbJg-CzEtrHZivWNiP" 
        Linking.canOpenURL(url)
          .then((supported) => {
            if (supported) {
              return Linking.openURL(url);
            } else {
              console.log(`Não é possível abrir o WhatsApp: ${url}`);
            }
          })
          .catch((err) => console.error('Erro ao redirecionar para o WhatsApp:', err));
      };
      
    return(

        <TouchableOpacity style={styles.container} onPress={() => redirectToDrive()}>

            <Image style={{width:70,height:70}} source={driveIcon}/>
            <Text style={styles.textPrimary}>Pacote Completo</Text>
            <Text style={styles.textSecondary}>10/01/2023</Text>

        </TouchableOpacity>

    )
}

const styles = ScaledSheet.create({
    container:{
        marginRight:"28@s",
        marginBottom:"48@s",
    },

    textPrimary:{
        fontFamily:theme.fonts.PopinsRegular,
        fontSize:"14@s",
        marginTop:"12@s", 
        marginBottom:"7@s"
    },
    textSecondary:{
        fontFamily:theme.fonts.PopinsRegular,
        fontSize:"12@s"
    }
})


export default CardDrive