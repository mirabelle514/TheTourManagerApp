export const colors = {
    // Primary Theme Colors
    primary: '#1a1a2e',
    primaryDark: '#16213e',
    primaryLight: '#2a2a4e',
    
    // Secondary Colors
    secondary: '#4CAF50',
    secondaryDark: '#388E3C',
    secondaryLight: '#66BB6A',
    
    // Accent Colors
    accent: '#2196F3',
    accentDark: '#1976D2',
    accentLight: '#42A5F5',
    
    // Status Colors
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    info: '#2196F3',
    
    // Background Colors
    background: '#0a0a0a',
    backgroundSecondary: '#151515',
    surface: '#1a1a1a',
    surfaceSecondary: '#2a2a2a',
    
    // Text Colors
    text: '#ffffff',
    textSecondary: '#b0b0b0',
    textDisabled: '#666666',
    textOnPrimary: '#ffffff',
    textOnSecondary: '#ffffff',
    
    // Border Colors
    border: '#333333',
    borderLight: '#444444',
    borderDark: '#222222',
    
    // Special Colors
    overlay: 'rgba(0, 0, 0, 0.7)',
    shadow: 'rgba(0, 0, 0, 0.3)',
    
    // Tour-specific Colors
    venue: '#9C27B0',
    financial: '#FF9800',
    merchandise: '#E91E63',
    schedule: '#3F51B5',
    communication: '#009688',
    
    // Theme Variants for Customization
    themes: {
      darkBlue: {
        primary: '#1a1a2e',
        secondary: '#16213e',
      },
      rockRed: {
        primary: '#b71c1c',
        secondary: '#d32f2f',
      },
      stagePurple: {
        primary: '#4a148c',
        secondary: '#7b1fa2',
      },
      forestGreen: {
        primary: '#1b5e20',
        secondary: '#388e3c',
      },
    },
    
    // Transparency Levels
    alpha: {
      high: 0.87,
      medium: 0.6,
      disabled: 0.38,
      divider: 0.12,
    },
  };
  
  export type ThemeColors = typeof colors;