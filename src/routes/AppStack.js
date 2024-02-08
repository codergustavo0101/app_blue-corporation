import React, { useState, useEffect } from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import * as Sentry from 'sentry-expo';

import { createDrawerNavigator } from '@react-navigation/drawer'
import Landing from '../pages/Landing'
import Dashboard from '../pages/Dashboard'
import Providers from '../pages/Providers'
import Provider from '../pages/Provider'
import Payment from '../pages/Payment'

import Drive from '../pages/Drive'
import InitialSchedules from '../pages/Schedules/Initial'
import CreateSchedule from '../pages/Schedules/CreateSchedule'

import Profile from '../pages/Profile'
import Search from '../pages/Search'
import Sidebar from '../components/Sidebar'

const Stack = createNativeStackNavigator()

const Drawer = createDrawerNavigator()


const AppStack = () => {

  
  Sentry.init({
    dsn: "https://e35f5b540345fca1fb211066560609cd@o4506652031385600.ingest.sentry.io/4506652032696320",
    enableInExpoDevelopment: true, // Permite rastrear erros durante o desenvolvimento no Expo
    debug: true, // Ative o modo de depuração para visualizar logs no console
  });


  try {
    // Seu código aqui
  } catch (error) {
    Sentry.captureException(error);
  }

  const [userAuthenticated, setUserAuthenticated] = useState(false);


  // useEffect(() => {

  //   const checkAuthentication = async () => {
  //     const isAuthenticated = true;

  //     // setUserAuthenticated(isAuthenticated);
  //   };

  //   checkAuthentication();
  // }, []);
  try {

    if (userAuthenticated === null) {
      // Mostra uma tela de carregamento enquanto a autenticação está sendo verificada
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
        </View>
      );
    }
  
    if (userAuthenticated == false) {
      // Redirecionar para a tela de login ou qualquer tela de autenticação
      // Você deve substituir 'Auth' pela tela de autenticação real
      return (
        <NavigationContainer >
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Auth" component={Landing} />
            <Stack.Screen name="Dashboard" component={Dashboard} />

          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  
  
    return (
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{
          swipeEdgeWidth: 0,
          headerShown: false,
          drawerStyle: {
            width: 266,
            height: "100%",
            borderTopEndRadius: 17,
            borderBottomEndRadius: 17,
          },
        }}
          drawerContent={(props) => <Sidebar {...props} />}
  
        >
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="Providers" component={Providers} />
          <Drawer.Screen name="Provider" component={Provider} />
          <Drawer.Screen name="Drive" component={Drive} />
          <Drawer.Screen name="InitialSchedules" component={InitialSchedules} />
          <Drawer.Screen name="Search" component={Search} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="CreateSchedule" component={CreateSchedule} />
          <Drawer.Screen name="Payment" component={Payment} />

        </Drawer.Navigator>
      </NavigationContainer>
    );

  } catch (error) {
    Sentry.captureException(error);
  }


};

export default AppStack;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});