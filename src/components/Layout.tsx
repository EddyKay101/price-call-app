import { ReactNode, useEffect, useState, memo } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
import { isPortrait, isLandscape } from '@helpers/functions';


const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: theme.color.secondary,
      height: '100%',
    },

    topPanel: {
      top: 0,
      width: '100%',
      backgroundColor: theme.color.primary,
      height: '13%',
      justifyContent: 'center'
    },

    text: {
      padding: 24,
      color: theme.color.tertiary,
      textAlign: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      textAlignVertical: 'center',
      alignContent: 'center',
    },

  })
  return styles
}

interface LayoutProps {
  title: string;
  children?: ReactNode;
}

const Layout = memo<LayoutProps>(({ title, children }) => {

  const Styles = useThemeAwareObject(createStyles)

  const [dimX, setDimX] = useState<number>(20)

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      if (width < height) {
        setDimX(20)
      } else {
        setDimX(0)
      }
    })

  }, []);
  return (
    <View style={Styles.container}>
      <View style={Styles.topPanel}>
        <Text style={[Styles.text, {
          top: dimX
        }]}>{title}</Text>
      </View>
      {children}
    </View>
  )
})

export default Layout