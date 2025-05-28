import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Calendar } from 'react-native-vector-icons/Feather';
import { setupStyles } from '../../../styles/components/setup';
import { theme } from '../../../styles/theme';
import { TourSetupData } from '../../../types/tour';

interface Step1TourInfoProps {
  tourData: TourSetupData;
  updateTourData: (field: string, value: any) => void;
}

const Step1TourInfo: React.FC<Step1TourInfoProps> = ({
  tourData,
  updateTourData,
}) => {
  return (
    <View style={setupStyles.stepContainer}>
      <View style={setupStyles.stepHeader}>
        <Calendar size={48} color={theme.colors.secondary} />
        <Text style={setupStyles.stepTitle}>Tour Information</Text>
        <Text style={setupStyles.stepSubtitle}>
          Let's start with the basics about your tour
        </Text>
      </View>

      <View style={setupStyles.formGroup}>
        <Text style={setupStyles.formLabel}>Tour Name *</Text>
        <TextInput
          style={setupStyles.formInput}
          value={tourData.tourName}
          onChangeText={(value) => updateTourData('tourName', value)}
          placeholder="e.g., World Domination Tour 2025"
          placeholderTextColor={theme.colors.textDisabled}
        />
      </View>

      <View style={setupStyles.formGroup}>
        <Text style={setupStyles.formLabel}>Band/Artist Name *</Text>
        <TextInput
          style={setupStyles.formInput}
          value={tourData.bandName}
          onChangeText={(value) => updateTourData('bandName', value)}
          placeholder="e.g., The Electric Storms"
          placeholderTextColor={theme.colors.textDisabled}
        />
      </View>

      <View style={setupStyles.dateRow}>
        <View style={setupStyles.dateInput}>
          <Text style={setupStyles.formLabel}>Tour Start Date</Text>
          <TextInput
            style={setupStyles.formInput}
            value={tourData.tourDates.start}
            onChangeText={(value) => updateTourData('tourDates.start', value)}
            placeholder="MM/DD/YYYY"
            placeholderTextColor={theme.colors.textDisabled}
          />
        </View>
        <View style={setupStyles.dateInput}>
          <Text style={setupStyles.formLabel}>Tour End Date</Text>
          <TextInput
            style={setupStyles.formInput}
            value={tourData.tourDates.end}
            onChangeText={(value) => updateTourData('tourDates.end', value)}
            placeholder="MM/DD/YYYY"
            placeholderTextColor={theme.colors.textDisabled}
          />
        </View>
      </View>
    </View>
  );
};

export default Step1TourInfo;