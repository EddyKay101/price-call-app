import React from 'react';
import { Theme } from '@models/Theme.model';
import { useTheme } from '@contexts/ThemeContext';

type Generator<T extends {}> = (theme: Theme) => T;

export const useThemeAwareObject = <T extends {}>(fn: Generator<T>) => {
  const { theme } = useTheme();

  const ThemeAwareObject = React.useMemo(() => fn(theme), [fn, theme]);
  return ThemeAwareObject;
};