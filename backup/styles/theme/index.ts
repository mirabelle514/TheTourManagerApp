import { colors } from './colors';
import { typography } from './typography';
import { spacing } from './spacing';
import { dimensions } from './dimensions';

export const theme = {
  colors,
  typography,
  spacing,
  dimensions,
  
  // React Native Paper theme integration
  roundness: 8,
  animation: {
    scale: 1.0,
  },
  
  // Shadow presets
  shadows: {
    small: {
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    medium: {
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    large: {
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    },
  },
  
  // Common styles
  common: {
    flex1: { flex: 1 },
    center: {
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
    },
    row: {
      flexDirection: 'row' as const,
    },
    column: {
      flexDirection: 'column' as const,
    },
    spaceBetween: {
      justifyContent: 'space-between' as const,
    },
    spaceAround: {
      justifyContent: 'space-around' as const,
    },
    alignCenter: {
      alignItems: 'center' as const,
    },
    alignStart: {
      alignItems: 'flex-start' as const,
    },
    alignEnd: {
      alignItems: 'flex-end' as const,
    },
  },
};

export type Theme = typeof theme;

// Export individual modules
export { colors } from './colors';
export { typography } from './typography';
export { spacing } from './spacing';
export { dimensions } from './dimensions';