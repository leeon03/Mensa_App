/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#2E8B57'; // sattes Grün für Buttons etc.
const tintColorDark = '#4CAF50';  // helleres Grün für Dark Mode

export const Colors = {
  light: {
    background: '#FFFFFF',
    text: '#11181C',
    primary: '#2E8B57',           // grün – gesund, vertrauensvoll
    secondary: '#F4A261',         // orange – freundlich, betont
    accent: '#264653',            // dunkelpetrol – modern
    danger: '#E76F51',            // rot – Warnfarbe
    icon: '#8A8A8A',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    background: '#1C1C1E',
    text: '#ECEDEE',
    primary: '#4CAF50',
    secondary: '#FFB347',
    accent: '#1D3557',
    danger: '#EF4444',
    icon: '#999999',
    tabIconDefault: '#999',
    tabIconSelected: tintColorDark,
  },
};