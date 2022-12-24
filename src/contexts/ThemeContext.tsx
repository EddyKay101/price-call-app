import { ReactNode, useState, useCallback, useContext, memo, useMemo } from 'react';
import { createContext } from 'react';
import { DARK_THEME, DARK_THEME_ID } from '@themes/Dark.theme';
import { LIGHT_THEME, LIGHT_THEME_ID } from '@themes/Light.theme';
import { Theme } from '@models/Theme.model';

interface ProvidedValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ProvidedValue>({
  theme: DARK_THEME,
  setTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered');
  }
});

interface Props {
  initial: Theme;
  children?: ReactNode;
}

export const ThemeProvider = memo<Props>((props) => {
  const [theme, setTheme] = useState<Theme>(props.initial)

  const SetThemeCallback = useCallback((newTheme: Theme) => {
    setTheme((currentTheme: Theme) => {

      if (currentTheme.id === newTheme.id) {

        return currentTheme;
      }

      return newTheme;
    });
  }, []);

  const ToggleThemeCallback = useCallback(() => {
    setTheme((currentTheme) => {
      if (currentTheme.id === LIGHT_THEME_ID) {
        return DARK_THEME;
      }

      if (currentTheme.id === DARK_THEME_ID) {
        return LIGHT_THEME
      }
      return currentTheme;
    })
  }, [])

  const MemoizedValue = useMemo(() => {
    const value: ProvidedValue = {
      theme,
      setTheme: SetThemeCallback,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [theme, SetThemeCallback, ToggleThemeCallback]);

  return <ThemeContext.Provider value={MemoizedValue}>{props.children}</ThemeContext.Provider>

});

export const useTheme = () => useContext(ThemeContext)
