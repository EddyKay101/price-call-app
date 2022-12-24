import { ColorTheme, Theme } from '@models/Theme.model';

const LIGHT_COLOR_THEME: ColorTheme = {
    primary: '#fcf8ec',
    secondary: '#596e79',
    tertiary: '#c7b198',
    accents: '#C3CFDF',
    background: '#F7F7F7'
};

export const LIGHT_THEME_ID = 'light';

export const LIGHT_THEME: Theme = {
    id: LIGHT_THEME_ID,
    color: LIGHT_COLOR_THEME
};
