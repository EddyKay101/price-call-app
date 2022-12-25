import React, { useEffect, memo, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Price } from '@models/Price.model';
import { Theme } from '@models/Theme.model';
import { useTheme } from '@contexts/ThemeContext';
import { DARK_THEME } from '@themes/Dark.theme';
import { LIGHT_THEME } from '@themes/Light.theme';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      top: 100,
      backgroundColor: theme.color.background,
      height: '50%',
    },

    text: {
      padding: 24,
    },
    button: {
      backgroundColor: theme.color.primary,
      borderRadius: 4,
      flex: 1,
      justifyContent: 'center',
    },
  })
  return styles
}



const Panel = memo(() => {
  const { theme, setTheme, toggleTheme } = useTheme();
  const Styles = useThemeAwareObject(createStyles);

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
  };

  const ToggleButtonElement = useMemo(() => {
    return (
      <TouchableOpacity onPress={toggleTheme} activeOpacity={0.75} style={Styles.button}>
        <Text>{'Toggle the Theme!'}</Text>
      </TouchableOpacity>
    );
  }, [toggleTheme, Styles]);

  const SetLightThemeButtonElement = useMemo(() => {
    return (
      <TouchableOpacity onPress={() => {
        setTheme(LIGHT_THEME)

      }} activeOpacity={0.75}>
        <Text>{'Set light Theme!'}</Text>
      </TouchableOpacity>
    );
  }, [setTheme, Styles]);

  const SetDarkThemeButtonElement = useMemo(() => {
    return (
      <TouchableOpacity onPress={() => setTheme(DARK_THEME)} activeOpacity={0.75}>
        <Text>{'Set dark Theme!'}</Text>
      </TouchableOpacity>
    );
  }, [setTheme, Styles]);

  return (

    <View style={Styles.container}>
      <Text style={Styles.text}>Panel</Text>
      <Text>{theme.id}</Text>
      {ToggleButtonElement}
    </View>


  )

})



export default Panel;