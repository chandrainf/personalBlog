import lightTheme from './lightTheme';
import darkTheme from './darkTheme';

const theme = {
  palette: lightTheme,
  light: lightTheme,
  dark: darkTheme,
  undefined: lightTheme,
};

theme.fonts = {
  primary: 'Roboto',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
};

theme.fontWeights = {
  thin: 100, // Thin
  utraLight: 200, // Ultra Light
  light: 300, // Light
  regular: 400, // Regular
  medium: 500, // Medium
  semibold: 600, // Semibold
  bold: 700, // Bold
  heavy: 800, // Heavy
  black: 900, // Black
};

export default theme;
