import { ColorTheme, Theme } from '@models/Theme.model';

const LIGHT_COLOR_THEME: ColorTheme = {
    primary: '#ffffff',
    secondary: '#f2f2f2',
    tertiary: '#000000',
    accents: '#a1a1a1',
    background: '#ffffff'
};

export const LIGHT_THEME_ID = 'light';

export const LIGHT_THEME: Theme = {
    id: LIGHT_THEME_ID,
    color: LIGHT_COLOR_THEME
};
