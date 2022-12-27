import React, { ReactNode, useEffect, memo, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Price } from '@models/Price.model';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      top: 0,
      backgroundColor: theme.color.tertiary,
      height: '40%',
      maxHeight: '40%'
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

interface PanelProps {
  children?: ReactNode;
}


const Panel = memo<PanelProps>(({ children }) => {
  const Styles = useThemeAwareObject(createStyles);

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  const isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
  };


  return (

    <View style={Styles.container}>
      {children}
    </View>


  )

})



export default Panel;