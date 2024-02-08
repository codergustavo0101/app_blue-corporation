import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-native-currency-input';
import { ScaledSheet } from 'react-native-size-matters'
import { View, Text } from 'react-native'
import { theme } from '../../../global/theme';
const InputMoney = ({ value, onChangeText, error }) => {

  return (
    <View>
      <CurrencyInput
        value={value}
        onChangeValue={onChangeText}
        style={styles.input}
        delimiter="."
        separator=","

        precision={2}
      />
      {error == true

        ?
        <Text style={styles.textError}>Informe um valor</Text>
        :
        <></>
      }
    </View>
  )
}

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
})

export default InputMoney