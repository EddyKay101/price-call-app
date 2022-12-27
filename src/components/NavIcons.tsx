import { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
// import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


import icoMoonConfig from '../../selection.json';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// const Icon = createIconSetFromIcoMoon(
//   icoMoonConfig,
// );
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    icon: {
      color: theme.color.accents
    },
    iconFocused: {
      color: theme.color.misc
    }


  })
  return styles
}

interface NavIconProps {
  iname: IconProp;
  size: number;
  focused: Boolean
}



const NavIcon = ({ iname, size, focused }: NavIconProps) => {
  const Styles = useThemeAwareObject(createStyles)

  return (
    // <Icon name={iname} size={25} style={Styles.icon} />
    <FontAwesomeIcon style={focused ? Styles.iconFocused : Styles.icon} size={size} icon={iname} />
  )
}

export default NavIcon