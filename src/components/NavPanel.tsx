import { ReactNode, useEffect, memo, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: theme.color.background,
      height: '100%',
    },


  })
  return styles
}

interface NavPanelProps {
  children?: ReactNode;
}

const NavPanel = memo<NavPanelProps>(() => {
  const Styles = useThemeAwareObject(createStyles)

  return (
    <View style={Styles.container}>

    </View>
  )
})

export default NavPanel