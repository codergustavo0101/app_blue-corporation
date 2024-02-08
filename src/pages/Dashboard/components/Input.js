import React from "react";
import { View, Text } from 'react-native'
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
    label,
    error
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
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                            placeholder={placeholder}
                        />
            }
            {error == true

                ?
                <Text style={styles.textError}>Informe um valor</Text>
                :
                <></>
            }
        </View>
    );
};


const styles = ScaledSheet.create({
    input: {
        width: "276@s",
        paddingLeft: "15@s",
        height: 50,
        fontFamily: theme.fonts.fontPoppinsTitleBold,
        fontSize: "15@s",
        marginLeft: "22@s",
        marginTop: "20@s",
        borderWidth: 0.4,
        borderRadius: 21,
    },
    textError: {
        fontFamily: theme.fonts.PopinsMedium,
        fontSize: "10@s",
        color: "red",
        marginTop:"10@s",
        marginLeft: "28@s",
      }
});


export default Input;
