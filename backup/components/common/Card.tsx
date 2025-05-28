import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, dimensions, typography } from '../../styles/theme';

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  style?: any;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  elevation?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  onPress,
  style,
  header,
  footer,
  elevation = 2,
}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      borderRadius: spacing.borderRadius.md,
      padding: spacing.component.paddingMD,
      marginVertical: spacing.component.marginXS,
      ...Platform.select({
        ios: {
          shadowColor: colors.shadow,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        android: {
          elevation,
        },
      }),
      ...style,
    },
    headerContainer: {
      marginBottom: spacing.component.marginXS,
    },
    footerContainer: {
      marginTop: spacing.component.marginXS,
    },
  });

  const Wrapper = onPress ? TouchableOpacity : View;

  return (
    <Wrapper style={styles.container} onPress={onPress}>
      {header && <View style={styles.headerContainer}>{header}</View>}
      {children}
      {footer && <View style={styles.footerContainer}>{footer}</View>}
    </Wrapper>
  );
};

export default Card;
