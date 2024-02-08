import React from 'react'
import {View,Image,Text} from 'react-native'
const CardPortifolio = () => {
    
    return(

        <View>
        
        <Image
        style={{ width: 250, height:250 }}
        source={{
          uri:
            'https://firebasestorage.googleapis.com/v0/b/test-images-c9f7a.appspot.com/o/modern-house-facade-2021-08-27-19-27-44-utc-1024x683%201.png?alt=media&token=ccb30b5d-9f62-44d3-a936-974cb094d9b4',
        }}
      />
      <Text>Test</Text>
        </View>

    )
}

export default CardPortifolio