import { StyleSheet } from 'react-native';
import { theme } from '../theme';

export const setupStyles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  
  // Header section
  header: {
    paddingTop: theme.spacing.screen.top,
    paddingHorizontal: theme.spacing.screen.horizontal,
    paddingBottom: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
  },
  
  title: {
    ...theme.typography.styles.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  
  subtitle: {
    ...theme.typography.styles.body1,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  
  // Step indicator
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
    backgroundColor: theme.colors.backgroundSecondary,
  },
  
  stepDot: {
    width: theme.dimensions.setup.stepIndicatorSize,
    height: theme.dimensions.setup.stepIndicatorSize,
    borderRadius: theme.dimensions.setup.stepIndicatorSize / 2,
    marginHorizontal: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
  },
  
  activeStep: {
    backgroundColor: theme.colors.secondary,
    borderColor: theme.colors.secondary,
    transform: [{ scale: 1.1 }],
  },
  
  completedStep: {
    backgroundColor: theme.colors.accent,
    borderColor: theme.colors.accent,
  },
  
  inactiveStep: {
    backgroundColor: 'transparent',
    borderColor: theme.colors.border,
  },
  
  stepText: {
    ...theme.typography.styles.button,
    fontSize: theme.typography.fontSize.base,
  },
  
  activeStepText: {
    color: theme.colors.textOnSecondary,
  },
  
  inactiveStepText: {
    color: theme.colors.textDisabled,
  },
  
  // Content area
  content: {
    flex: 1,
    maxWidth: theme.dimensions.setup.stepContentMaxWidth,
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: theme.spacing.screen.horizontal,
  },
  
  stepContainer: {
    paddingVertical: theme.spacing.lg,
  },
  
  stepHeader: {
    alignItems: 'center',
    marginBottom: theme.spacing['2xl'],
  },
  
  stepTitle: {
    ...theme.typography.styles.h3,
    color: theme.colors.text,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  
  stepSubtitle: {
    ...theme.typography.styles.body1,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  
  // Form elements
  formGroup: {
    marginBottom: theme.spacing.form.fieldSpacing,
  },
  
  formLabel: {
    ...theme.typography.styles.label,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  
  formInput: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.dimensions.borderRadius.md,
    paddingHorizontal: theme.spacing.input.paddingHorizontal,
    paddingVertical: theme.spacing.input.paddingVertical,
    ...theme.typography.styles.input,
    color: theme.colors.text,
    minHeight: theme.dimensions.input.height.medium,
  },
  
  formInputFocused: {
    borderColor: theme.colors.secondary,
  },
  
  helpText: {
    ...theme.typography.styles.caption,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  
  // Date inputs
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  
  dateInput: {
    flex: 1,
  },
  
  // Info boxes
  infoBox: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.dimensions.borderRadius.md,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.accent,
  },
  
  infoText: {
    ...theme.typography.styles.body2,
    color: theme.colors.textSecondary,
    lineHeight: theme.typography.lineHeight.relaxed * theme.typography.fontSize.sm,
  },
  
  // Checkbox elements
  checkboxGroup: {
    marginBottom: theme.spacing.lg,
  },
  
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  
  checkbox: {
    width: theme.spacing.lg,
    height: theme.spacing.lg,
    marginRight: theme.spacing.sm,
  },
  
  checkboxLabel: {
    ...theme.typography.styles.body1,
    color: theme.colors.text,
    flex: 1,
  },
  
  // Color options
  colorOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  
  colorOption: {
    width: '48%',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.sm,
    borderRadius: theme.dimensions.borderRadius.md,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  
  selectedColorOption: {
    borderColor: theme.colors.text,
  },
  
  colorName: {
    ...theme.typography.styles.label,
    color: theme.colors.text,
  },
  
  // Import options
  importOptions: {
    marginBottom: theme.spacing.lg,
  },
  
  importOption: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.lg,
    borderRadius: theme.dimensions.borderRadius.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  
  importTitle: {
    ...theme.typography.styles.h6,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  
  importDesc: {
    ...theme.typography.styles.body2,
    color: theme.colors.textSecondary,
  },
  
  skipOption: {
    alignItems: 'center',
    paddingVertical: theme.spacing.lg,
  },
  
  skipText: {
    ...theme.typography.styles.caption,
    color: theme.colors.textDisabled,
    fontStyle: 'italic',
  },
  
  // Role section
  roleSection: {
    marginBottom: theme.spacing.lg,
  },
  
  roleTitle: {
    ...theme.typography.styles.h6,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  
  roleItem: {
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.md,
    borderRadius: theme.dimensions.borderRadius.md,
    marginBottom: theme.spacing.sm,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.secondary,
  },
  
  roleName: {
    ...theme.typography.styles.body1,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  
  roleDesc: {
    ...theme.typography.styles.body2,
    color: theme.colors.textSecondary,
  },
  
  // Navigation buttons
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing.screen.horizontal,
    paddingBottom: theme.spacing.screen.bottom,
    backgroundColor: theme.colors.backgroundSecondary,
    gap: theme.spacing.md,
  },
  
  btnPrimary: {
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: theme.spacing.button.paddingHorizontal,
    paddingVertical: theme.spacing.button.paddingVertical,
    borderRadius: theme.dimensions.borderRadius.md,
    flex: 1,
    minHeight: theme.dimensions.touchTarget.comfortable,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  btnSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.border,
    paddingHorizontal: theme.spacing.button.paddingHorizontal,
    paddingVertical: theme.spacing.button.paddingVertical,
    borderRadius: theme.dimensions.borderRadius.md,
    flex: 1,
    minHeight: theme.dimensions.touchTarget.comfortable,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  btnDisabled: {
    backgroundColor: theme.colors.border,
    opacity: theme.colors.alpha.disabled,
  },
  
  btnPrimaryText: {
    ...theme.typography.styles.button,
    color: theme.colors.textOnSecondary,
  },
  
  btnSecondaryText: {
    ...theme.typography.styles.button,
    color: theme.colors.text,
  },
  
  btnTextWithIcon: {
    marginHorizontal: theme.spacing.sm,
  },
});