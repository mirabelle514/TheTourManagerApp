import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { colors, spacing, typography } from '../../styles/theme';

interface LoadingProps {
  message?: string;
  size?: 'small' | 'large';
  color?: string;
  style?: any;
}

const Loading: React.FC<LoadingProps> = ({
  message = 'Loading...',
  size = 'large',
  color = colors.primary,
  style,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing.screen.horizontal,
      ...style,
    },
    text: {
      ...typography.styles.body1,
      color: colors.textSecondary,
      marginTop: spacing.component.marginXS,
    },
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

export default Loading;
