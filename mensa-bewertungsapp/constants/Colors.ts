const tintColorLight = '#2E8B57';
const tintColorDark = '#4CAF50';

export const Colors = {
  light: {
    background: '#FFFFFF',
    text: '#11181C',
    primary: '#2E8B57',
    secondary: '#F4A261',
    accent: '#264653',
    danger: '#E76F51',
    icon: '#8A8A8A',
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    background: '#121212',         // dunkler, angenehmer Hintergrund
    text: '#F1F1F1',               // heller Text für besseren Kontrast
    primary: '#6FCF97',            // sanfteres Grün
    secondary: '#E9A86B',          // wärmeres Orange für Buttons
    accent: '#88C0D0',             // weiches Blau für Akzente
    danger: '#EF4444',             // bleibt gleich (guter Kontrast)
    icon: '#BBBBBB',               // heller für dunklen Hintergrund
    tabIconDefault: '#777777',
    tabIconSelected: tintColorDark,
  },
};
