import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from '../common/Input';
import { colors, spacing, typography } from '../../styles/theme';

interface Step1TourInfoProps {
  data: TourSetupData;
  onDataChange: (data: TourSetupData) => void;
}

const Step1TourInfo: React.FC<Step1TourInfoProps> = ({ data, onDataChange }) => {
  const [tourName, setTourName] = useState(data.tourName);
  const [bandName, setBandName] = useState(data.bandName);
  const [startDate, setStartDate] = useState(data.tourDates.start);
  const [endDate, setEndDate] = useState(data.tourDates.end);

  const handleDataChange = () => {
    onDataChange({
      ...data,
      tourName,
      bandName,
      tourDates: {
        start: startDate,
        end: endDate,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Tour Information</Text>
      <Input
        label="Tour Name"
        value={tourName}
        onChangeText={setTourName}
        style={styles.input}
        placeholder="Enter tour name"
        autoCapitalize="words"
      />
      <Input
        label="Band Name"
        value={bandName}
        onChangeText={setBandName}
        style={styles.input}
        placeholder="Enter band name"
        autoCapitalize="words"
      />
      <Input
        label="Start Date"
        value={startDate}
        onChangeText={setStartDate}
        style={styles.input}
        placeholder="YYYY-MM-DD"
        keyboardType="numeric"
      />
      <Input
        label="End Date"
        value={endDate}
        onChangeText={setEndDate}
        style={styles.input}
        placeholder="YYYY-MM-DD"
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
  input: {
    marginBottom: spacing.component.marginMD,
  },
});

export default Step1TourInfo;
