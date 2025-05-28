import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../../styles/theme';

// Screens
import SetupScreen from '../../screens/setup/SetupScreen';
import HomeScreen from '../../screens/home/HomeScreen';
import DaySheetScreen from '../../screens/daysheet/DaySheetScreen';
import FinancialScreen from '../../screens/financial/FinancialScreen';
import MerchandiseScreen from '../../screens/merchandise/MerchandiseScreen';
import ScheduleScreen from '../../screens/schedule/ScheduleScreen';
import TeamScreen from '../../screens/team/TeamScreen';
import SettingsScreen from '../../screens/settings/SettingsScreen';

// Navigation components
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
  Setup: undefined;
  Main: undefined;
  DaySheet: { date?: string };
  Financial: { filter?: string };
  Merchandise: { category?: string };
  Schedule: { date?: string };
  Team: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

interface MainNavigatorProps {
  isAuthenticated: boolean;
  tourSetupComplete: boolean;
}

const MainNavigator: React.FC<MainNavigatorProps> = ({
  isAuthenticated,
  tourSetupComplete,
}) => {
  // Show setup screen if tour setup is not complete
  if (!tourSetupComplete) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: theme.colors.background },
        }}>
        <Stack.Screen name="Setup" component={SetupScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          ...theme.typography.styles.navTitle,
        },
        contentStyle: { backgroundColor: theme.colors.background },
      }}>
      
      {/* Main tab navigator */}
      <Stack.Screen 
        name="Main" 
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      
      {/* Modal and detail screens */}
      <Stack.Screen 
        name="DaySheet" 
        component={DaySheetScreen}
        options={({ route }) => ({
          title: route.params?.date ? `Day Sheet - ${route.params.date}` : 'Day Sheet',
          presentation: 'modal',
        })}
      />
      
      <Stack.Screen 
        name="Financial" 
        component={FinancialScreen}
        options={{
          title: 'Financial Overview',
        }}
      />
      
      <Stack.Screen 
        name="Merchandise" 
        component={MerchandiseScreen}
        options={{
          title: 'Merchandise',
        }}
      />
      
      <Stack.Screen 
        name="Schedule" 
        component={ScheduleScreen}
        options={{
          title: 'Tour Schedule',
        }}
      />
      
      <Stack.Screen 
        name="Team" 
        component={TeamScreen}
        options={{
          title: 'Team Members',
        }}
      />
      
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;