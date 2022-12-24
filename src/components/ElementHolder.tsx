import React, { useEffect, memo, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: theme.color.background,
      height: '10%',
    },

    text: {
      padding: 24,
      color: theme.color.tertiary
    },

  })
  return styles
}

interface ElementHolderProps {
  text: string
}

const ElementHolder = memo<ElementHolderProps>(({ text }) => {
  const Styles = useThemeAwareObject(createStyles)

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{text}</Text>
    </View>
  )
})

export default ElementHolder