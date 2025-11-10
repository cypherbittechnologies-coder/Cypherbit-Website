/**
 * Theme configuration based on Figma design
 * CYPHERBIT TECHNOLOGIES PRIVATE LIMITED
 */

export const theme = {
  colors: {
    // Primary brand colors
    primary: '#27438E',        // fill_N0MN6Y - Main brand blue
    secondary: '#7794E2',      // fill_N4JPZX - Secondary blue
    accent: '#5D80DB',         // fill_JO724D - Accent blue
    
    // Neutral colors
    white: '#FFFFFF',          // fill_BKDRVE
    black: '#000000',          // fill_YA3QB5
    dark: '#232323',           // fill_H5740J - Dark gray for cards
    
    // Additional colors
    gray: '#EAEAEA',
    lightGray: '#D9D9D9',      // fill_JV16MP
    green: '#55C9BB',          // fill_Q9PP3F - PharmaZen logo green
    
    // Overlay colors
    overlay: 'rgba(39, 67, 142, 0.2)', // Primary with 20% opacity
  },
  
  typography: {
    fontFamily: {
      primary: 'Montserrat, sans-serif',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '20px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '40px',
      '4xl': '48px',
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.219,
      relaxed: 1.5,
    },
  },
  
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '28px',
    xl: '40px',
    '2xl': '48px',
    '3xl': '94px',
  },
  
  borderRadius: {
    sm: '12px',
    md: '18px',
    lg: '28px',
    xl: '36px',
    '2xl': '39px',
    '3xl': '41px',
    '4xl': '52px',
    '5xl': '53px',
    full: '9999px',
  },
  
  shadows: {
    sm: '0px 4px 20px 0px rgba(0, 0, 0, 0.25)',
    md: '-20px -6px 19.600000381469727px 0px rgba(0, 0, 0, 0.5)',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
  },
};

export default theme;

