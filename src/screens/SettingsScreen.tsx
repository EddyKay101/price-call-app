import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import Layout from '@components/Layout';
import ElementHolder from '@components/ElementHolder';
import { Theme } from '@models/Theme.model';
import { useTheme } from '@contexts/ThemeContext';
import { DARK_THEME } from '@themes/Dark.theme';
import { LIGHT_THEME } from '@themes/Light.theme';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
import Orientation from 'react-native-orientation-locker';
const SettingsScreen = () => {
  const { theme, setTheme, toggleTheme } = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    toggleTheme()
  };
  const styles = StyleSheet.create({
    eHolder: {
      top: 30,
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    toggle: {
      marginTop: 15,
      marginRight: 15
    }
  })

  useEffect(() => {
    Orientation.lockToPortrait();
  });
  return (

    <Layout title='Settings'>
      <ElementHolder style={styles.eHolder} text='Light Mode'>
        <Switch
          style={styles.toggle}
          trackColor={{ false: "#767577", true: theme.color.tertiary }}
          thumbColor={isEnabled ? theme.color.accents : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </ElementHolder>
    </Layout>



  );
};

const styles = StyleSheet.create({

})

export default SettingsScreen;
