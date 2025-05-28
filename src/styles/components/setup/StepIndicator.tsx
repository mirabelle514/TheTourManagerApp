import React from 'react';
import { View, Text } from 'react-native';
import { Check } from 'react-native-vector-icons/Feather';
import { setupStyles } from '../../styles/components/setup';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps,
}) => {
  const renderStepDot = (step: number) => {
    const isActive = step === currentStep;
    const isCompleted = step < currentStep;
    const isInactive = step > currentStep;

    let dotStyle = [setupStyles.stepDot];
    let textStyle = [setupStyles.stepText];

    if (isActive) {
      dotStyle.push(setupStyles.activeStep);
      textStyle.push(setupStyles.activeStepText);
    } else if (isCompleted) {
      dotStyle.push(setupStyles.completedStep);
      textStyle.push(setupStyles.activeStepText);
    } else {
      dotStyle.push(setupStyles.inactiveStep);
      textStyle.push(setupStyles.inactiveStepText);
    }

    return (
      <View key={step} style={dotStyle}>
        {isCompleted ? (
          <Check size={20} color="#ffffff" />
        ) : (
          <Text style={textStyle}>{step}</Text>
        )}
      </View>
    );
  };

  return (
    <View style={setupStyles.stepIndicator}>
      {Array.from({ length: totalSteps }, (_, index) => 
        renderStepDot(index + 1)
      )}
    </View>
  );
};

export default StepIndicator;