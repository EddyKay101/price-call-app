import { ReactNode, useEffect, useState, memo, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    button: {
      borderWidth: 1,
      borderColor: theme.color.primary,
      display: 'flex',
      flexDirection: 'row',
    },
    panelText: {
      opacity: 1,
      color: theme.color.misc,

    },
    text: {
      padding: 5,
      color: theme.color.tertiary,
      marginBottom: 10,
      marginTop: 6,
      fontSize: 17,
    },

    icon: {
      color: theme.color.misc
    },

    line: {
      width: '100%',
      borderWidth: 1,
      borderColor: theme.color.accents
    }
  })
  return styles
}

interface DropDownProps {
  style?: any
  item: string;
  list?: string[];
  panelStyle?: {}
  onItemPress?: () => void;
}

const DropDown = memo<DropDownProps>(({ style, item, list, panelStyle, onItemPress }) => {
  const Styles = useThemeAwareObject(createStyles);
  const [label, setLabel] = useState("");
  const [isOpen, setIsOpen] = useState(false);




  useEffect(() => {
    setLabel(() => item)
  })
  return (
    <>
      <TouchableOpacity style={[Styles.button, { ...style }]} onPress={() => setIsOpen(!isOpen)}>

        <Text style={Styles.panelText}>{label}</Text>
        <FontAwesomeIcon style={Styles.icon} size={16} icon={isOpen ? faCaretUp : faCaretDown} />
      </TouchableOpacity>
      {
        isOpen &&
        <View style={panelStyle}>
          {
            list?.map((li, i) => {
              return (
                <>
                  <Text onPress={() => console.log('s')} style={Styles.text} key={i}>
                    {li}
                  </Text>
                  {
                    list.length > 1 && list.length - 1 !== i &&
                    <View style={Styles.line}></View>
                  }
                </>




              )
            })
          }
        </View>

      }
    </>

  )
})

export default DropDown;