import React, { useState, useEffect } from 'react';
import { View } from 'react-native'
import AppStack from './src/routes/AppStack';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { useFonts, Poppins_500Medium, Poppins_400Regular, Poppins_700Bold, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import 'react-native-gesture-handler';
import animationJson from './src/animations/animation.json'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_600SemiBold,
  });

  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        setAnimation(true);
      }, 3000); // Ajuste o valor (em milissegundos) conforme necessário
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !animation) {

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{justifyContent:"center",alignItems:"center",width:"30%",height:"30%"}}>
          <LottieView
            source={animationJson}
            style={{ width: "100%", height: "100%" }}
            autoPlay={true}
            resizeMode='contain'
            loop
          />
        </View>
      </View>
    )

  }

  return (
    <>
      <StatusBar backgroundColor="transparent" />
      <AppStack />
    </>
  );
}
