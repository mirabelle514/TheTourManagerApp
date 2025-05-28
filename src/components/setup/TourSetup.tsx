import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StepIndicator } from './StepIndicator';
import { Step1TourInfo } from './steps/Step1TourInfo';
import { Step2AdminUser } from './steps/Step2AdminUser';
import { Step3Merchandise } from './steps/Step3Merchandise';
import { Step4Customization } from './steps/Step4Customization';
import { Step5ImportData } from './steps/Step5ImportData';
import { Step6TeamInvites } from './steps/Step6TeamInvites';
import { Button } from '../common/Button';
import { colors, spacing } from '../../styles/theme';

interface TourSetupProps {
  onSetupComplete: (data: TourSetupData) => void;
}

const STEPS = [
  'Tour Information',
  'Admin User',
  'Merchandise',
  'Customization',
  'Import Data',
  'Team Invites',
];

const TourSetup: React.FC<TourSetupProps> = ({ onSetupComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tourData, setTourData] = useState<TourSetupData>({
    tourName: '',
    bandName: '',
    tourDates: {
      start: '',
      end: '',
    },
    adminUser: {
      name: '',
      email: '',
      phone: '',
    },
    merchandiseSettings: {
      trackTShirts: true,
      trackRecords: true,
      trackDigital: true,
      autoReorderThreshold: 10,
    },
    branding: {
      primaryColor: '#1a1a2e',
      secondaryColor: '#4CAF50',
      logoUrl: '',
    },
  });

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    onSetupComplete(tourData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1TourInfo data={tourData} onDataChange={setTourData} />;
      case 2:
        return <Step2AdminUser data={tourData} onDataChange={setTourData} />;
      case 3:
        return <Step3Merchandise data={tourData} onDataChange={setTourData} />;
      case 4:
        return <Step4Customization data={tourData} onDataChange={setTourData} />;
      case 5:
        return <Step5ImportData data={tourData} onDataChange={setTourData} />;
      case 6:
        return <Step6TeamInvites data={tourData} onDataChange={setTourData} />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <StepIndicator currentStep={currentStep} totalSteps={STEPS.length} />
      <View style={styles.content}>
        {renderStep()}
      </View>
      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <Button
            title="Back"
            variant="outline"
            onPress={handleBack}
            style={styles.button}
          />
        )}
        {currentStep < STEPS.length ? (
          <Button
            title="Next"
            onPress={handleNext}
            style={styles.button}
          />
        ) : (
          <Button
            title="Complete Setup"
            onPress={handleComplete}
            style={styles.button}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.screen.horizontal,
  },
  content: {
    flex: 1,
    marginTop: spacing.component.marginMD,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.component.marginLG,
    paddingHorizontal: spacing.component.paddingMD,
  },
  button: {
    flex: 1,
    marginHorizontal: spacing.component.marginXS,
  },
});

export default TourSetup;
