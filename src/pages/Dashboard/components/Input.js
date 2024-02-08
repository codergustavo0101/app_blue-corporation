import React from "react";
import { View,Text } from 'react-native'
import { TextInput } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import { ScaledSheet } from "react-native-size-matters";
import { theme } from "../../../global/theme";

const Input = ({
    name,
    control,
    placeholder,
    secureTextEntry,
    styleInput,
    type,
    onChangeText,
    mask,
    typeMask,
    styleErr,
    err,
    label
}) => {



    return (
        <View>
            {
                mask == true
                    ?
                    <TextInputMask
                        keyboardType={type}
                        type={typeMask}
                        onChangeText={onChangeText}

                        style={err == true ? styleErr : styleInput}
                        placeholder={placeholder}
                    />
                    :
                    label == true

                        ?
                        <View style={styles.boxInput}>
                            <TextInput
                                keyboardType={type}
                                onChangeText={onChangeText}
                                style={err == true ? styleErr : styleInput}
                                secureTextEntry={secureTextEntry}
                                placeholder={placeholder}
                            />
                            <Text style={styles.textPrimary}>Número do aviado</Text>

                        </View>
                        :
                        <TextInput
                            keyboardType={type}
                            onChangeText={onChangeText}
                            style={err == true ? styleErr : styleInput}
                            secureTextEntry={secureTextEntry}
                            placeholder={placeholder}
                        />
            }
        </View>
    );
};


const styles = ScaledSheet.create({
    boxInput:{
        marginTop:"24@s"
    },
    textPrimary:{
        position:"relative",
        top:"-91@s",
        color:"#000000",
        fontSize:"14@s",
        fontFamily:theme.fonts.PopinsMedium,
    }
  });


export default Input;
