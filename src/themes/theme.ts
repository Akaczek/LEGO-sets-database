export const theme = {
  color: {
    black: '#000000',
    white: '#ffffff',
    gray: '#f5f5f5',
  },
}

export type ThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}