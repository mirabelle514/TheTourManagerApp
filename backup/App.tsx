import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar, SafeAreaProvider } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';

import { store, persistor } from './src/store';
import { theme } from './src/styles/theme';
import LoadingScreen from './src/components/common/Loading';
import MainNavigator from './src/components/navigation/StackNavigator';
import { useAuth } from './src/utils/hooks/useAuth';
import { useTour } from './src/utils/hooks/useTour';

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { tourSetupComplete, isLoading: tourLoading } = useTour();
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    // App initialization logic
    const initializeApp = async () => {
      try {
        // Perform any necessary app startup tasks
        // Check authentication status
        // Load user preferences
        // Initialize services
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate loading
        setIsAppReady(true);
      } catch (error) {
        console.error('App initialization error:', error);
        setIsAppReady(true);
      }
    };

    initializeApp();
  }, []);

  if (!isAppReady || authLoading || tourLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <MainNavigator 
        isAuthenticated={isAuthenticated}
        tourSetupComplete={tourSetupComplete}
      />
    </NavigationContainer>
  );
};

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={<LoadingScreen />} persistor={persistor}>
            <PaperProvider theme={theme}>
              <StatusBar 
                barStyle="light-content" 
                backgroundColor={theme.colors.primary}
                translucent={false}
              />
              <AppContent />
            </PaperProvider>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;