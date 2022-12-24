import { ColorTheme, Theme } from '@models/Theme.model';

const DARK_COLOR_THEME: ColorTheme = {
    primary: '#404258',
    secondary: '#474e68',
    tertiary: '#ffffff',
    accents: '#DFD3C3',
    background: '#404258'
};

export const DARK_THEME_ID = 'dark';

export const DARK_THEME: Theme = {
    id: DARK_THEME_ID,
    color: DARK_COLOR_THEME
};
