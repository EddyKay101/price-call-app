import { ColorTheme, Theme } from '@models/Theme.model';

const DARK_COLOR_THEME: ColorTheme = {
    primary: '#0A0708',
    secondary: '#444444',
    tertiary: '#747474',
    accents: '#B1B1B1',
    background: '#0A0708'
};

export const DARK_THEME_ID = 'dark';

export const DARK_THEME: Theme = {
    id: DARK_THEME_ID,
    color: DARK_COLOR_THEME
};
