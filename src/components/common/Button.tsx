import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { colors, typography, spacing } from '../../styles/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: colors.primary,
          borderColor: colors.primary,
          color: colors.textOnPrimary,
        };
      case 'secondary':
        return {
          backgroundColor: colors.secondary,
          borderColor: colors.secondary,
          color: colors.textOnSecondary,
        };
      case 'outline':
        return {
          backgroundColor: colors.surface,
          borderColor: colors.primary,
          color: colors.primary,
        };
      case 'text':
        return {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: colors.primary,
        };
      default:
        return {
          backgroundColor: colors.primary,
          borderColor: colors.primary,
          color: colors.textOnPrimary,
        };
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case 'small':
        return {
          paddingHorizontal: spacing.component.paddingSM,
          paddingVertical: spacing.component.paddingXS,
          borderRadius: spacing.borderRadius.sm,
        };
      case 'large':
        return {
          paddingHorizontal: spacing.component.paddingLG,
          paddingVertical: spacing.component.paddingMD,
          borderRadius: spacing.borderRadius.lg,
        };
      default:
        return {
          paddingHorizontal: spacing.component.paddingMD,
          paddingVertical: spacing.component.paddingSM,
          borderRadius: spacing.borderRadius.md,
        };
    }
  };

  const styles = StyleSheet.create({
    container: {
      ...getButtonSize(),
      ...getButtonStyle(),
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      ...style,
    },
    text: {
      ...typography.styles.button,
      color: getButtonStyle().color,
    },
    loadingIndicator: {
      marginRight: spacing.component.paddingXS,
    },
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <ActivityIndicator
            size="small"
            color={colors.textOnPrimary}
            style={styles.loadingIndicator}
          />
          <Text style={styles.text}>{title}</Text>
        </>
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
