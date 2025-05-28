import React, { useState } from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import { Input } from '../common/Input';
import { colors, spacing, typography } from '../../styles/theme';

interface Step3MerchandiseProps {
  data: TourSetupData;
  onDataChange: (data: TourSetupData) => void;
}

const Step3Merchandise: React.FC<Step3MerchandiseProps> = ({ data, onDataChange }) => {
  const [trackTShirts, setTrackTShirts] = useState(data.merchandiseSettings.trackTShirts);
  const [trackRecords, setTrackRecords] = useState(data.merchandiseSettings.trackRecords);
  const [trackDigital, setTrackDigital] = useState(data.merchandiseSettings.trackDigital);
  const [threshold, setThreshold] = useState(data.merchandiseSettings.autoReorderThreshold);

  const handleDataChange = () => {
    onDataChange({
      ...data,
      merchandiseSettings: {
        trackTShirts,
        trackRecords,
        trackDigital,
        autoReorderThreshold: parseInt(threshold),
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Merchandise Tracking</Text>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Track T-Shirts</Text>
        <Switch
          value={trackTShirts}
          onValueChange={setTrackTShirts}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor={trackTShirts ? colors.textOnPrimary : colors.textDisabled}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Track Records</Text>
        <Switch
          value={trackRecords}
          onValueChange={setTrackRecords}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor={trackRecords ? colors.textOnPrimary : colors.textDisabled}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Track Digital Downloads</Text>
        <Switch
          value={trackDigital}
          onValueChange={setTrackDigital}
          trackColor={{ false: colors.border, true: colors.primary }}
          thumbColor={trackDigital ? colors.textOnPrimary : colors.textDisabled}
        />
      </View>
      <Input
        label="Auto Reorder Threshold"
        value={threshold}
        onChangeText={setThreshold}
        style={styles.input}
        placeholder="Enter threshold quantity"
        keyboardType="numeric"
      />
    </View>
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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.component.paddingXS,
  },
  switchLabel: {
    ...typography.styles.body1,
    color: colors.text,
  },
  input: {
    marginBottom: spacing.component.marginMD,
  },
});

export default Step3Merchandise;
