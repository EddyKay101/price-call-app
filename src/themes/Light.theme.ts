import { ColorTheme, Theme } from '@models/Theme.model';

const LIGHT_COLOR_THEME: ColorTheme = {
    primary: '#f0f0f0',
    secondary: '#e1e1e1',
    tertiary: '#d2d2d2',
    accents: '#c3c3c3',
    background: '#b4b4b4',
    misc: '#26303c'
};

export const LIGHT_THEME_ID = 'light';

export const LIGHT_THEME: Theme = {
    id: LIGHT_THEME_ID,
    color: LIGHT_COLOR_THEME
};
