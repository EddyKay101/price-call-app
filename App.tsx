import React, { useEffect, useState, memo } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import SplashScreen from 'react-native-splash-screen';
import AlertsScreen from '@screens/AlertsScreen';
import HomeScreen from '@screens/HomeScreen';
import ChartScreen from '@screens/ChartScreen';
import SettingsScreen from '@screens/SettingsScreen';
import { Theme } from '@models/Theme.model';
import { DARK_THEME } from '@themes/Dark.theme';
import { ThemeProvider } from '@contexts/ThemeContext';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
import NavPanel from '@components/NavPanel';
import NavIcon from '@components/NavIcons';

import {
  faChartBar
} from '@fortawesome/free-regular-svg-icons'
import {
  faChartSimple,
  faBell,
  faSatelliteDish,
  faGear,
  faGears,
  faLandmarkDome,
  faHouse
} from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const Tab = createBottomTabNavigator();

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    panel: {
      width: '100%',
      backgroundColor: theme.color.background,
      height: '100%',
    }
  })
  return styles
}



const App = memo(() => {
  const Styles = useThemeAwareObject(createStyles);

  useEffect(() => {

    SplashScreen.hide();
  });



  return (
    <ThemeProvider initial={DARK_THEME}>

      <NavigationContainer>

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName: any = null;
              let size = 25;
              switch (route.name) {
                case 'Home':
                  iconName = focused ? faLandmarkDome : faHouse;
                  size = focused ? 28 : 25;
                  break;

                case 'Alerts':
                  iconName = focused ? faSatelliteDish : faBell;
                  size = focused ? 28 : 25;
                  break;

                case 'Chart':
                  iconName = focused ? faChartBar : faChartSimple
                  size = focused ? 28 : 25;
                  break;

                case 'Settings':
                  iconName = focused ? faGears : faGear;
                  size = focused ? 28 : 25;
                  break;

              }
              return (
                <View>
                  <NavIcon focused={focused} iname={iconName} size={size} />

                </View>



              );
            },
            headerShown: false,
            tabBarShowLabel: false,
            tabBarBackground: () => (
              <View style={Styles.panel}>
                <NavPanel></NavPanel>
              </View>
            )
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
});


export default App;

