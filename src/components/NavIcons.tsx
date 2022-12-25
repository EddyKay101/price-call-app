import { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Theme } from '@models/Theme.model';
import { useThemeAwareObject } from '@hooks/ThemeAwareObject.hook';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../../selection.json';

const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
);
const createStyles = (theme: Theme) => {
  const styles = StyleSheet.create({
    icon: {
      color: theme.color.accents
    }


  })
  return styles
}

interface NavIconProps {
  iname: string;
}



const NavIcon = ({ iname }: NavIconProps) => {
  const Styles = useThemeAwareObject(createStyles)

  return (
    <Icon name={iname} size={25} style={Styles.icon} />
  )
}

export default NavIcon