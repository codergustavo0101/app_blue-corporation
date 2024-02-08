import React from 'react'
import {View,Text,Modal,Image,StyleSheet} from 'react-native'
import atentionIcon from "../images/png/privacity.png";
import { theme } from "../../../global/theme";

const ModalDuplicateUser = ({state,onTouchStart}) => {
    return(
        
        <Modal animationType='slide' visible={state} transparent={true}>

        <View onTouchStart={onTouchStart } style={{backgroundColor:"red",height:"100%",backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
        <View style={styles.modalContent}>
        
        <View style={{justifyContent:"center",alignItems:"center",marginTop:20}}>
        <Text style={styles.textPrimary}>Opss...</Text>
        <Text style={styles.textSecondary}>Usuário já cadastrado!</Text>
        <Image source={atentionIcon}  style={{width:280,height:250}}/>
        </View>

        </View>
        </View>

        </Modal>

    )

}

const styles = StyleSheet.create({

    modalContent:{
    position:"absolute",
    bottom:0,
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
    backgroundColor:"white",
    width:"100%",
    height:350,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    },
    textPrimary: {    
        fontSize: 20,
        color:"#123b91",
        marginBottom:14,
    },

    textSecondary: {
        textAlign:"center",
        fontSize: 16,
        color:"#123b91",
    },
})

export default ModalDuplicateUser