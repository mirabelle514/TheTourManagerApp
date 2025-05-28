import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from '../common/Input';
import { colors, spacing, typography } from '../../styles/theme';
import Icon from 'react-native-vector-icons/Feather';

interface Step5ImportDataProps {
  data: TourSetupData;
  onDataChange: (data: TourSetupData) => void;
}

const Step5ImportData: React.FC<Step5ImportDataProps> = ({ data, onDataChange }) => {
  const [venueFile, setVenueFile] = useState('');
  const [scheduleFile, setScheduleFile] = useState('');
  const [merchandiseFile, setMerchandiseFile] = useState('');

  const handleDataChange = () => {
    // In a real implementation, this would handle file uploads
    // For now, we'll just update the data with the file names
    onDataChange({
      ...data,
      venueFile,
      scheduleFile,
      merchandiseFile,
    });
  };

  const handleFileSelect = (type: string) => {
    // Implement file picker logic here
    // For now, we'll just simulate a file selection
    const fileName = `selected_${type}_file.csv`;
    switch (type) {
      case 'venues':
        setVenueFile(fileName);
        break;
      case 'schedule':
        setScheduleFile(fileName);
        break;
      case 'merchandise':
        setMerchandiseFile(fileName);
        break;
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Import Data</Text>
      
      <View style={styles.importContainer}>
        <Text style={styles.importTitle}>Venues</Text>
        <TouchableOpacity
          style={[
            styles.importButton,
            venueFile && styles.importButtonSelected,
          ]}
          onPress={() => handleFileSelect('venues')}
        >
          <Icon
            name="upload"
            size={20}
            color={venueFile ? colors.textOnPrimary : colors.textSecondary}
          />
          <Text style={[
            styles.importButtonText,
            venueFile && styles.importButtonTextSelected,
          ]}>
            {venueFile || 'Select Venues CSV'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.importContainer}>
        <Text style={styles.importTitle}>Schedule</Text>
        <TouchableOpacity
          style={[
            styles.importButton,
            scheduleFile && styles.importButtonSelected,
          ]}
          onPress={() => handleFileSelect('schedule')}
        >
          <Icon
            name="upload"
            size={20}
            color={scheduleFile ? colors.textOnPrimary : colors.textSecondary}
          />
          <Text style={[
            styles.importButtonText,
            scheduleFile && styles.importButtonTextSelected,
          ]}>
            {scheduleFile || 'Select Schedule CSV'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.importContainer}>
        <Text style={styles.importTitle}>Merchandise</Text>
        <TouchableOpacity
          style={[
            styles.importButton,
            merchandiseFile && styles.importButtonSelected,
          ]}
          onPress={() => handleFileSelect('merchandise')}
        >
          <Icon
            name="upload"
            size={20}
            color={merchandiseFile ? colors.textOnPrimary : colors.textSecondary}
          />
          <Text style={[
            styles.importButtonText,
            merchandiseFile && styles.importButtonTextSelected,
          ]}>
            {merchandiseFile || 'Select Merchandise CSV'}
          </Text>
        </TouchableOpacity>
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
  importContainer: {
    marginBottom: spacing.component.marginLG,
  },
  importTitle: {
    ...typography.styles.body1,
    color: colors.text,
    marginBottom: spacing.component.marginXS,
  },
  importButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.component.paddingMD,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.borderRadius.md,
  },
  importButtonSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  importButtonText: {
    ...typography.styles.body1,
    color: colors.textSecondary,
    marginLeft: spacing.component.marginXS,
  },
  importButtonTextSelected: {
    color: colors.textOnPrimary,
  },
});

export default Step5ImportData;
