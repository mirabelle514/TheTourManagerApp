import { Dimensions, Platform } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const dimensions = {
  // Screen dimensions
  screen: {
    width: screenWidth,
    height: screenHeight,
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    small: 320,  // iPhone SE
    medium: 375, // iPhone 6/7/8
    large: 414,  // iPhone 6/7/8 Plus
    xlarge: 768, // iPad
  },
  
  // Common component dimensions
  button: {
    height: {
      small: 32,
      medium: 44,
      large: 56,
    },
    minWidth: 88,
  },
  
  input: {
    height: {
      small: 36,
      medium: 44,
      large: 52,
    },
    minHeight: 44,
  },
  
  card: {
    minHeight: 80,
    borderRadius: 12,
    elevation: Platform.OS === 'android' ? 4 : 0,
    shadowRadius: Platform.OS === 'ios' ? 4 : 0,
  },
  
  modal: {
    maxWidth: screenWidth * 0.9,
    maxHeight: screenHeight * 0.8,
    borderRadius: 16,
  },
  
  // Navigation dimensions
  navigation: {
    headerHeight: Platform.OS === 'ios' ? 88 : 56,
    tabBarHeight: Platform.OS === 'ios' ? 83 : 56,
    drawerWidth: screenWidth * 0.8,
  },
  
  // Icon sizes
  icon: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40,
    '2xl': 48,
  },
  
  // Avatar sizes
  avatar: {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 56,
    xl: 80,
  },
  
  // Border radius
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 24,
    full: 9999,
  },
  
  // Day sheet specific dimensions
  daySheet: {
    cardHeight: 200,
    headerHeight: 60,
    sectionSpacing: 20,
  },
  
  // Financial overview dimensions
  financial: {
    chartHeight: 200,
    summaryCardHeight: 120,
    expenseItemHeight: 60,
  },
  
  // Merchandise dimensions
  merchandise: {
    productImageSize: 80,
    inventoryCardHeight: 100,
    salesChartHeight: 180,
  },
  
  // Setup flow dimensions
  setup: {
    stepIndicatorSize: 50,
    progressBarHeight: 4,
    stepContentMaxWidth: 600,
  },
  
  // Helper functions
  isSmallScreen: () => screenWidth < 375,
  isMediumScreen: () => screenWidth >= 375 && screenWidth < 414,
  isLargeScreen: () => screenWidth >= 414,
  isTablet: () => screenWidth >= 768,
  
  // Responsive helpers
  responsive: {
    padding: screenWidth < 375 ? 16 : 20,
    fontSize: screenWidth < 375 ? 14 : 16,
    buttonHeight: screenWidth < 375 ? 40 : 44,
  },
};

export type Dimensions = typeof dimensions;