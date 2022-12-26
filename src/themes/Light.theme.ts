import { ColorTheme, Theme } from '@models/Theme.model';

const LIGHT_COLOR_THEME: ColorTheme = {
    primary: '#F0F2F3',
    secondary: '#E2E6E7',
    tertiary: '#F3F5F9',
    accents: '#003366',
    background: '#F0F2F3'
};

export const LIGHT_THEME_ID = 'light';

export const LIGHT_THEME: Theme = {
    id: LIGHT_THEME_ID,
    color: LIGHT_COLOR_THEME
};
