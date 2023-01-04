import { ReactNode, useEffect, memo, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: theme.color.misc,
      height: '8%',
      position: 'relative'
    },

    text: {
      padding: 24,
      color: theme.color.primary
    },

  })
  return styles
}

type ElementHolderProps = {
  text?: string;
  style?: any
  children?: ReactNode
}

const ElementHolder = memo<ElementHolderProps>(({ text, style, children }) => {
  const Styles = useThemeAwareObject(createStyles)

  return (
    <View style={[Styles.container, { ...style }]}>
      <Text style={Styles.text}>{text}</Text>
      {children}
    </View>
  )
})

export default ElementHolder