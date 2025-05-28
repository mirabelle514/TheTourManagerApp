import { Platform } from 'react-native';

const fontFamily = {
  regular: Platform.select({
    ios: 'System',
    android: 'Roboto',
  }),
  medium: Platform.select({
    ios: 'System',
    android: 'Roboto-Medium',
  }),
  bold: Platform.select({
    ios: 'System',
    android: 'Roboto-Bold',
  }),
  light: Platform.select({
    ios: 'System',
    android: 'Roboto-Light',
  }),
};

export const typography = {
  // Font Families
  fontFamily,
  
  // Font Sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  
  // Font Weights
  fontWeight: {
    light: '300' as const,
    normal: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
    extrabold: '800' as const,
  },
  
  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6,
    loose: 1.8,
  },
  
  // Text Styles for common components
  styles: {
    // Headers
    h1: {
      fontSize: 48,
      fontWeight: '700' as const,
      lineHeight: 1.2,
      fontFamily: fontFamily.bold,
    },
    h2: {
      fontSize: 36,
      fontWeight: '700' as const,
      lineHeight: 1.2,
      fontFamily: fontFamily.bold,
    },
    h3: {
      fontSize: 30,
      fontWeight: '600' as const,
      lineHeight: 1.3,
      fontFamily: fontFamily.medium,
    },
    h4: {
      fontSize: 24,
      fontWeight: '600' as const,
      lineHeight: 1.3,
      fontFamily: fontFamily.medium,
    },
    h5: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 1.4,
      fontFamily: fontFamily.medium,
    },
    h6: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 1.4,
      fontFamily: fontFamily.medium,
    },
    
    // Body Text
    body1: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 1.5,
      fontFamily: fontFamily.regular,
    },
    body2: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 1.5,
      fontFamily: fontFamily.regular,
    },
    
    // Captions and Labels
    caption: {
      fontSize: 12,
      fontWeight: '400' as const,
      lineHeight: 1.4,
      fontFamily: fontFamily.regular,
    },
    label: {
      fontSize: 14,
      fontWeight: '500' as const,
      lineHeight: 1.4,
      fontFamily: fontFamily.medium,
    },
    
    // Button Text
    button: {
      fontSize: 16,
      fontWeight: '600' as const,
      lineHeight: 1.2,
      fontFamily: fontFamily.medium,
      textTransform: 'uppercase' as const,
      letterSpacing: 0.5,
    },
    
    // Input Text
    input: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 1.4,
      fontFamily: fontFamily.regular,
    },
    
    // Navigation Text
    navTitle: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 1.3,
      fontFamily: fontFamily.medium,
    },
    tabLabel: {
      fontSize: 12,
      fontWeight: '500' as const,
      lineHeight: 1.2,
      fontFamily: fontFamily.medium,
    },
  },
};

export type Typography = typeof typography;