const tintColorLight = '#2E8B57';
const tintColorDark = '#2E8B57'; // Gleich wie Light Mode, damit Farben konsistent bleiben

export const Colors = {
  light: {
    background: '#FFFFFF',
    text: '#11181C',
    primary: '#2E8B57',
    secondary: '#F4A261',
    accent: '#264653',
    danger: '#E76F51',
    icon: '#8A8A8A',
    surface: '#F0F0F0',
    card: '#f1f1f1',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    background: '#121212',
    text: '#F1F1F1',
    primary: '#2E8B57', // Gleich wie Light Mode
    secondary: '#F4A261',
    accent: '#264653',
    danger: '#E76F51',
    icon: '#BBBBBB',
    surface: '#1E1E1E',
    card: '#1F1F1F',
    tabIconDefault: '#777777',
    tabIconSelected: tintColorDark,
  },
};