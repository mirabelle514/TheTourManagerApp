import React from 'react';
import { Modal, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, dimensions } from '../../styles/theme';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  transparent?: boolean;
  style?: any;
}

const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  title,
  transparent = false,
  style,
}) => {
  const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: transparent ? colors.overlay : 'transparent',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: spacing.screen.horizontal,
    },
    modalContent: {
      backgroundColor: colors.surface,
      borderRadius: spacing.borderRadius.lg,
      width: dimensions.modal.maxWidth,
      maxWidth: dimensions.modal.maxWidth,
      maxHeight: dimensions.modal.maxHeight,
      ...style,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: spacing.component.paddingMD,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    headerText: {
      fontSize: typography.fontSize.lg,
      fontWeight: typography.fontWeight.medium,
      color: colors.text,
    },
    closeButton: {
      padding: spacing.component.paddingXS,
    },
  });

  return (
    <Modal
      visible={visible}
      transparent={transparent}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.modalContent}>
            {title && (
              <View style={styles.header}>
                <Text style={styles.headerText}>{title}</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={onClose}
                >
                  <Icon name="x" size={24} color={colors.textSecondary} />
                </TouchableOpacity>
              </View>
            )}
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Modal;
