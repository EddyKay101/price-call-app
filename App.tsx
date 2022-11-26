import React, { useEffect, type PropsWithChildren } from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alerts } from '@/models/Alerts.model';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';


import SplashScreen from 'react-native-splash-screen';
import AlertsScreen from '@/screens/AlertsScreen';
import HomeScreen from '@/screens/HomeScreen';
import ChartScreen from '@/screens/ChartScreen';

import axios from 'axios';

const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
);

const Tab = createBottomTabNavigator();
const App = () => {
  type GetAlertsResponse = {
    data: Alerts[];
  };

  const getData = async () => {
    try {
      const { data } = await axios.get<GetAlertsResponse>(
        'https://price-call.co.uk/alerts',
        {
          headers: {
            Accept: 'application/json'
          }
        }
      );
      console.log(data);
      return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log(err.message);
        return err.message;
      } else {
        console.log('unexpected error: ', err);
        return err;
      }
    }
  };

  useEffect(() => {
    SplashScreen.hide();
    // getData();
  });
  let iconState: Boolean;

  return (


    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'cloudFocused' : 'cloudRegular';
                break;

              case 'Alerts':
                iconName = focused ? 'bellFocused' : 'bellRegular';
                break;

              case 'Chart':
                iconName = focused ? 'chartFocused' : 'chartRegular'
                break;

            }
            return (
              <View>
                <Icon name={iconName} size={25} />

              </View>



            );
          },
          headerShown: false,
          tabBarShowLabel: false
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chart" component={ChartScreen} />
        <Tab.Screen name="Alerts" component={AlertsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>ff</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#D6DCF7'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  subText: {
    textAlign: 'center',
    color: '#dddd',
    marginBottom: 5
  }
});

export default App;
