import React from 'react';
import CurrencyInput from 'react-native-currency-input';
import {ScaledSheet} from 'react-native-size-matters'
import { theme } from '../../../global/theme';
const InputMoney = ({}) => {
    const [value, setValue] = React.useState(0);

    return(
        
        <CurrencyInput
        value={value}
        onChangeValue={setValue}
        style={styles.input}
        delimiter="."
        separator=","
        placeholder='R$ 00,00'
        precision={2}
        minValue={0}
        onChangeText={(formattedValue) => {
          console.log(formattedValue); // R$ +2.310,46
        }}
      />
    )
}

const styles = ScaledSheet.create({
    input:{
        width: "276@s",
        paddingLeft:"15@s",
        height:50,
        fontFamily:theme.fonts.fontPoppinsTitleBold,
        fontSize:"20@s",
        marginLeft:"22@s",
        marginTop:"20@s",
        borderWidth:0.4,
        borderRadius:21,
    }
})

export default InputMoney