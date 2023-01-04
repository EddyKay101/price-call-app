import { ReactNode, useEffect, memo, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {

      backgroundColor: theme.color.tertiary,

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
  style?: any
  children?: ReactNode;
}


const Panel = memo<PanelProps>(({ style, children }) => {
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

    <View style={[Styles.container, { ...style }]}>
      {children}
    </View>


  )

})



export default Panel;