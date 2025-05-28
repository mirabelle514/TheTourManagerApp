import React from 'react';
import { TextInput, View, StyleSheet, TextInputProps } from 'react-native';
import { colors, typography, spacing } from '../../styles/theme';
import Icon from 'react-native-vector-icons/Feather';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  containerStyle?: any;
  inputStyle?: any;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  onRightIconPress,
  containerStyle,
  inputStyle,
  ...props
}) => {
  const hasError = !!error;
  const isFocused = props.focused;

  const styles = StyleSheet.create({
    container: {
      marginBottom: spacing.component.marginMD,
      ...containerStyle,
    },
    label: {
      ...typography.styles.label,
      color: hasError ? colors.error : colors.textSecondary,
      marginBottom: spacing.component.marginXS,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surfaceSecondary,
      borderRadius: spacing.borderRadius.md,
      paddingHorizontal: spacing.component.paddingMD,
      paddingVertical: spacing.component.paddingXS,
      borderWidth: 1,
      borderColor: hasError ? colors.error : colors.border,
    },
    input: {
      ...typography.styles.input,
      color: colors.text,
      flex: 1,
      ...inputStyle,
    },
    icon: {
      marginRight: spacing.component.paddingXS,
    },
    errorText: {
      ...typography.styles.caption,
      color: colors.error,
      marginTop: spacing.component.marginXS,
    },
  });

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {leftIcon && (
          <Icon
            name={leftIcon}
            size={20}
            color={colors.textSecondary}
            style={styles.icon}
          />
        )}
        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor={colors.textDisabled}
        />
        {rightIcon && (
          <Icon
            name={rightIcon}
            size={20}
            color={colors.textSecondary}
            onPress={onRightIconPress}
            style={styles.icon}
          />
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;
