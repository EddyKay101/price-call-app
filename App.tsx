import React, { useEffect, type PropsWithChildren } from 'react';
import { View, StyleSheet, Text, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
import SplashScreen from 'react-native-splash-screen';
import AlertsScreen from '@screens/AlertsScreen';
import HomeScreen from '@screens/HomeScreen';
import ChartScreen from '@screens/ChartScreen';
import SettingsScreen from '@screens/SettingsScreen';
import { DARK_THEME } from '@themes/Dark.theme';
import { ThemeProvider } from '@contexts/ThemeContext';
const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
);

const Tab = createBottomTabNavigator();
const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  });

  return (

    <ThemeProvider initial={DARK_THEME}>
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

                case 'Settings':
                  iconName = focused ? 'bellFocused' : 'bellRegular';
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
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>

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
