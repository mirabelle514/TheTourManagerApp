import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { 
  Home, 
  Calendar, 
  DollarSign, 
  Package, 
  MessageCircle, 
  Settings 
} from 'react-native-vector-icons/Feather';

import { theme } from '../../styles/theme';
import HomeScreen from '../../screens/home/HomeScreen';
import ScheduleScreen from '../../screens/schedule/ScheduleScreen';
import FinancialScreen from '../../screens/financial/FinancialScreen';
import MerchandiseScreen from '../../screens/merchandise/MerchandiseScreen';
import SettingsScreen from '../../screens/settings/SettingsScreen';

export type TabParamList = {
  Home: undefined;
  Schedule: undefined;
  Financial: undefined;
  Merchandise: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let IconComponent;
          
          switch (route.name) {
            case 'Home':
              IconComponent = Home;
              break;
            case 'Schedule':
              IconComponent = Calendar;
              break;
            case 'Financial':
              IconComponent = DollarSign;
              break;
            case 'Merchandise':
              IconComponent = Package;
              break;
            case 'Settings':
              IconComponent = Settings;
              break;
            default:
              IconComponent = Home;
          }
          
          return <IconComponent size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.textDisabled,
        tabBarStyle: {
          backgroundColor: theme.colors.backgroundSecondary,
          borderTopColor: theme.colors.border,
          borderTopWidth: 1,
          height: theme.dimensions.navigation.tabBarHeight,
          paddingBottom: theme.spacing.sm,
          paddingTop: theme.spacing.sm,
        },
        tabBarLabelStyle: {
          ...theme.typography.styles.tabLabel,
          marginTop: theme.spacing.xs,
        },
        headerStyle: {
          backgroundColor: theme.colors.primary,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: theme.colors.text,
        headerTitleStyle: {
          ...theme.typography.styles.navTitle,
        },
      })}>
      
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Today',
          headerTitle: 'Tour Manager',
        }}
      />
      
      <Tab.Screen 
        name="Schedule" 
        component={ScheduleScreen}
        options={{
          title: 'Schedule',
        }}
      />
      
      <Tab.Screen 
        name="Financial" 
        component={FinancialScreen}
        options={{
          title: 'Financial',
        }}
      />
      
      <Tab.Screen 
        name="Merchandise" 
        component={MerchandiseScreen}
        options={{
          title: 'Merch',
        }}
      />
      
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;