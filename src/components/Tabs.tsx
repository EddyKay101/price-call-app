import { memo, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
import { useType } from '@contexts/ChartContext';

const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    labelText: {
      color: theme.color.accents
    }
  })
  return styles
}

interface TabsProps {
  style?: any;
  text?: string[];
  optionText?: string;
  onItemPress?: () => void;
}

const Tabs = memo<TabsProps>(({ style, text }) => {
  const Styles = useThemeAwareObject(createStyles);
  const { chartType, setType } = useType();
  return (

    <View style={[{ ...style }]}>
      {
        text?.map((t: string, index) => (
          <TouchableOpacity key={index} onPress={() => {
            setType(t)
          }}>
            <Text style={[Styles.labelText, chartType === t && { fontWeight: 'bold' }]}>{t}</Text>
          </TouchableOpacity>
        ))
      }


    </View>


  )
})

export default Tabs;