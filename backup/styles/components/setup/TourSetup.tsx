import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from 'react-native';
import { ChevronLeft, ChevronRight } from 'react-native-vector-icons/Feather';

import { setupStyles } from '../../styles/components/setup';
import StepIndicator from './StepIndicator';
import Step1TourInfo from './steps/Step1TourInfo';
import Step2AdminUser from './steps/Step2AdminUser';
import Step3Merchandise from './steps/Step3Merchandise';
import Step4Customization from './steps/Step4Customization';
import Step5ImportData from './steps/Step5ImportData';
import Step6TeamInvites from './steps/Step6TeamInvites';
import { TourSetupData } from '../../types/tour';

interface TourSetupProps {
  onComplete: (tourData: TourSetupData) => void;
}

const TourSetup: React.FC<TourSetupProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [tourData, setTourData] = useState<TourSetupData>({
    tourName: '',
    bandName: '',
    tourDates: { start: '', end: '' },
    adminUser: { name: '', email: '', phone: '' },
    merchandiseSettings: {
      trackTShirts: true,
      trackRecords: true,
      trackDigital: false,
      autoReorderThreshold: 10,
    },
    branding: {
      primaryColor: '#1a1a2e',
      secondaryColor: '#16213e',
      logoUrl: '',
    },
  });

  const updateTourData = (field: string, value: any) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setTourData(prev => ({
        ...prev,
        [parent]: { ...prev[parent as keyof TourSetupData], [child]: value },
      }));
    } else {
      setTourData(prev => ({ ...prev, [field]: value }));
    }
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTourSetup();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeTourSetup = () => {
    Alert.alert(
      'Tour Setup Complete!',
      'Your tour management app is ready. You can now invite team members and start managing your tour.',
      [
        {
          text: 'Get Started',
          onPress: () => onComplete(tourData),
        },
      ]
    );
  };

  const isStepValid = (): boolean => {
    switch (currentStep) {
      case 1:
        return tourData.tourName.trim() !== '' && tourData.bandName.trim() !== '';
      case 2:
        return (
          tourData.adminUser.name.trim() !== '' &&
          tourData.adminUser.email.trim() !== '' &&
          tourData.adminUser.phone.trim() !== ''
        );
      default:
        return true;
    }
  };

  const renderCurrentStep = () => {
    const stepProps = {
      tourData,
      updateTourData,
    };

    switch (currentStep) {
      case 1:
        return <Step1TourInfo {...stepProps} />;
      case 2:
        return <Step2AdminUser {...stepProps} />;
      case 3:
        return <Step3Merchandise {...stepProps} />;
      case 4:
        return <Step4Customization {...stepProps} />;
      case 5:
        return <Step5ImportData {...stepProps} />;
      case 6:
        return <Step6TeamInvites {...stepProps} />;
      default:
        return <Step1TourInfo {...stepProps} />;
    }
  };

  return (
    <SafeAreaView style={setupStyles.container}>
      {/* Header */}
      <View style={setupStyles.header}>
        <Text style={setupStyles.title}>Tour Manager Setup</Text>
        <Text style={setupStyles.subtitle}>Configure your tour management app</Text>
      </View>

      {/* Step Indicator */}
      <StepIndicator currentStep={currentStep} totalSteps={6} />

      {/* Content */}
      <ScrollView
        style={setupStyles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}>
        {renderCurrentStep()}
      </ScrollView>

      {/* Navigation */}
      <View style={setupStyles.navigation}>
        {currentStep > 1 && (
          <TouchableOpacity
            style={setupStyles.btnSecondary}
            onPress={prevStep}
            activeOpacity={0.7}>
            <ChevronLeft size={20} color="#ffffff" />
            <Text style={[setupStyles.btnSecondaryText, setupStyles.btnTextWithIcon]}>
              Previous
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[
            setupStyles.btnPrimary,
            !isStepValid() && setupStyles.btnDisabled,
          ]}
          onPress={nextStep}
          disabled={!isStepValid()}
          activeOpacity={0.7}>
          <Text style={[setupStyles.btnPrimaryText, setupStyles.btnTextWithIcon]}>
            {currentStep === 6 ? 'Complete Setup' : 'Next'}
          </Text>
          {currentStep < 6 && <ChevronRight size={20} color="#ffffff" />}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TourSetup;