export interface ColorTheme {
    primary: string;
    secondary: string;
    tertiary: string;
    accents: string;
    background: string;
    misc?: string;
}

export interface Theme {
    id: string;
    color: ColorTheme;
}
