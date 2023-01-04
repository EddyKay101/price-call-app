import { ReactNode, useEffect, useState, memo, useMemo } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
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
    text: {
      opacity: 1,
      color: theme.color.misc
    },

    icon: {
      color: theme.color.misc
    },
  })
  return styles
}

interface DropDownProps {
  style?: any
  item: string;
  list?: string[];
  textStyle?: {}
  onItemPress?: (label: string) => void;
}

const DropDown = memo<DropDownProps>(({ style, item, list, textStyle }) => {
  const Styles = useThemeAwareObject(createStyles);
  const [label, setLabel] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const renderDropdown = () => {

    list?.map((item, i) => {
      return (
        <Text key={i} style={textStyle}>
          {item}
        </Text>
      )

    })


  }


  useEffect(() => {
    setLabel(() => item)
  })
  return (
    <TouchableOpacity style={[Styles.button, { ...style }]} onPress={() => setIsOpen(!isOpen)}>
      {
        isOpen &&
        list?.map((li, i) => {
          return (
            <Text key={i} style={textStyle}>
              {li}
            </Text>
          )

        })
      }
      <Text style={Styles.text}>{label}</Text>
      <FontAwesomeIcon style={Styles.icon} size={16} icon={isOpen ? faCaretUp : faCaretDown} />
    </TouchableOpacity>
  )
})

export default DropDown;