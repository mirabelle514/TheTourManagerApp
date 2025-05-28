import React from 'react';
import { useDispatch } from 'react-redux';
import TourSetup from '../../components/setup/TourSetup';
import { completeSetup } from '../../store/slices/tourSlice';
import { TourSetupData, Tour } from '../../types/tour';
import { generateTourFromSetupData } from '../../utils/helpers/tourUtils';

const SetupScreen: React.FC = () => {
  const dispatch = useDispatch();

  const handleSetupComplete = async (tourData: TourSetupData) => {
    try {
      // Generate tour object from setup data
      const tour: Tour = generateTourFromSetupData(tourData);
      
      // Save to local storage and sync to server
      dispatch(completeSetup(tour));
      
      // TODO: Sync to Firebase
      // await syncTourToServer(tour);
      
    } catch (error) {
      console.error('Setup completion error:', error);
      // Handle error (show alert, etc.)
    }
  };

  return <TourSetup onComplete={handleSetupComplete} />;
};

export default SetupScreen;