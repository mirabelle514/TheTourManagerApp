export const spacing = {
    // Base spacing unit (4px)
    unit: 4,
    
    // Common spacing values
    xs: 4,   // 4px
    sm: 8,   // 8px
    md: 16,  // 16px
    lg: 24,  // 24px
    xl: 32,  // 32px
    '2xl': 48, // 48px
    '3xl': 64, // 64px
    
    // Component-specific spacing
    component: {
      // Padding
      paddingXS: 4,
      paddingSM: 8,
      paddingMD: 16,
      paddingLG: 24,
      paddingXL: 32,
      
      // Margins
      marginXS: 4,
      marginSM: 8,
      marginMD: 16,
      marginLG: 24,
      marginXL: 32,
      
      // Gaps
      gapXS: 4,
      gapSM: 8,
      gapMD: 16,
      gapLG: 24,
      gapXL: 32,
    },
    
    // Screen padding
    screen: {
      horizontal: 20,
      vertical: 20,
      top: 60, // For status bar + nav
      bottom: 34, // For safe area
    },
    
    // Container spacing
    container: {
      padding: 20,
      margin: 16,
      gap: 16,
    },
    
    // Card spacing
    card: {
      padding: 16,
      margin: 8,
      gap: 12,
    },
    
    // Button spacing
    button: {
      paddingHorizontal: 24,
      paddingVertical: 12,
      margin: 8,
    },
    
    // Input spacing
    input: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      marginVertical: 8,
    },
    
    // List spacing
    list: {
      itemPadding: 16,
      itemMargin: 4,
      sectionPadding: 20,
    },
    
    // Navigation spacing
    navigation: {
      tabPadding: 8,
      headerPadding: 16,
      drawerPadding: 20,
    },
    
    // Form spacing
    form: {
      fieldSpacing: 16,
      groupSpacing: 24,
      sectionSpacing: 32,
    },
    
    // Touch targets (minimum 44pt for iOS accessibility)
    touchTarget: {
      minimum: 44,
      comfortable: 48,
      large: 56,
    },
  };
  
  export type Spacing = typeof spacing;