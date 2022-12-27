import { ColorTheme, Theme } from '@models/Theme.model';

const DARK_COLOR_THEME: ColorTheme = {
    primary: '#181b22',
    secondary: '#26303c',
    tertiary: '#5d6771',
    accents: '#a09fa7',
    background: '#e7e6ea',
    misc: '#ecf1fa'
};

export const DARK_THEME_ID = 'dark';

export const DARK_THEME: Theme = {
    id: DARK_THEME_ID,
    color: DARK_COLOR_THEME
};
