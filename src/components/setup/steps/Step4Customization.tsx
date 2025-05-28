import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from '../common/Input';
import { colors, spacing, typography } from '../../styles/theme';

interface Step4CustomizationProps {
  data: TourSetupData;
  onDataChange: (data: TourSetupData) => void;
}

const Step4Customization: React.FC<Step4CustomizationProps> = ({ data, onDataChange }) => {
  const [primaryColor, setPrimaryColor] = useState(data.branding.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(data.branding.secondaryColor);
  const [logoUrl, setLogoUrl] = useState(data.branding.logoUrl);

  const handleDataChange = () => {
    onDataChange({
      ...data,
      branding: {
        primaryColor,
        secondaryColor,
        logoUrl,
      },
    });
  };

  const colorOptions = [
    '#1a1a2e',
    '#4CAF50',
    '#2196F3',
    '#F44336',
    '#9C27B0',
    '#FF9800',
  ];

  const renderColorOptions = () => {
    return colorOptions.map((color, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.colorOption,
          { backgroundColor: color },
          primaryColor === color && styles.selectedColor,
        ]}
        onPress={() => setPrimaryColor(color)}
      />
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>App Customization</Text>
      
      <View style={styles.colorPicker}>
        <Text style={styles.colorLabel}>Primary Color</Text>
        <View style={styles.colorOptionsContainer}>
          {renderColorOptions()}
        </View>
      </View>

      <View style={styles.colorPicker}>
        <Text style={styles.colorLabel}>Secondary Color</Text>
        <Input
          label="Secondary Color"
          value={secondaryColor}
          onChangeText={setSecondaryColor}
          style={styles.input}
          placeholder="Enter hex color"
        />
      </View>

      <View style={styles.logoContainer}>
        <Text style={styles.logoLabel}>Logo</Text>
        <Input
          label="Logo URL"
          value={logoUrl}
          onChangeText={setLogoUrl}
          style={styles.input}
          placeholder="Enter logo URL"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.screen.horizontal,
  },
  sectionTitle: {
    ...typography.styles.h4,
    color: colors.text,
    marginBottom: spacing.component.marginMD,
  },
  colorPicker: {
    marginBottom: spacing.component.marginLG,
  },
  colorLabel: {
    ...typography.styles.body1,
    color: colors.text,
    marginBottom: spacing.component.marginXS,
  },
  colorOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.component.gapXS,
  },
  colorOption: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginVertical: spacing.component.marginXS,
  },
  selectedColor: {
    borderWidth: 2,
    borderColor: colors.textOnPrimary,
  },
  logoContainer: {
    marginBottom: spacing.component.marginLG,
  },
  logoLabel: {
    ...typography.styles.body1,
    color: colors.text,
    marginBottom: spacing.component.marginXS,
  },
  input: {
    marginBottom: spacing.component.marginMD,
  },
});

export default Step4Customization;
