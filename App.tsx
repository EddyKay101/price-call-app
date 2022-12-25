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



const Tab = createBottomTabNavigator();

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    panel: {
      width: '100%',
      backgroundColor: theme.color.background,
      height: '100%',
    },
    icon: {
      color: theme.color.accents
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
              let iconName: string = '';
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
                  <NavIcon iname={iconName} />

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

