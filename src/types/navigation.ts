import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { DrawerNavigationProp } from '@react-navigation/drawer';

// Main Stack Navigator Types
export type RootStackParamList = {
  Auth: undefined;
  TourSetup: undefined;
  Home: undefined;
  DaySheet: undefined;
  Financial: undefined;
  Merchandise: undefined;
  Schedule: undefined;
  Team: undefined;
  Settings: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Tab Navigator Types
export type TabParamList = {
  Home: undefined;
  DaySheet: undefined;
  Financial: undefined;
  Merchandise: undefined;
  Team: undefined;
};

export type TabNavigationProp = BottomTabNavigationProp<TabParamList>;

// Drawer Navigator Types
export type DrawerParamList = {
  Home: undefined;
  DaySheet: undefined;
  Financial: undefined;
  Merchandise: undefined;
  Schedule: undefined;
  Team: undefined;
  Settings: undefined;
};

export type DrawerNavigationProp = DrawerNavigationProp<DrawerParamList>;

// Navigation Guards
export type AuthGuardProps = {
  isAuthenticated: boolean;
  tourSetupComplete: boolean;
};

// Navigation Options
export interface NavigationOptions {
  headerShown?: boolean;
  headerTitle?: string;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  headerStyle?: any;
  headerTintColor?: string;
  tabBarIcon?: (focused: boolean) => React.ReactNode;
  tabBarLabel?: string;
  drawerIcon?: (focused: boolean) => React.ReactNode;
  drawerLabel?: string;
}

// Route Types
export type RouteNames = keyof RootStackParamList;

export interface NavigationState {
  index: number;
  routes: Array<{
    key: string;
    name: RouteNames;
    params?: any;
  }>;
}

// Screen Props
export interface ScreenProps {
  navigation: RootStackNavigationProp;
  route: any;
}

// Navigation Guards
export interface AuthGuardProps {
  isAuthenticated: boolean;
  tourSetupComplete: boolean;
}

// Navigation Constants
export const ROUTES = {
  AUTH: 'Auth',
  TOUR_SETUP: 'TourSetup',
  HOME: 'Home',
  DAY_SHEET: 'DaySheet',
  FINANCIAL: 'Financial',
  MERCHANDISE: 'Merchandise',
  SCHEDULE: 'Schedule',
  TEAM: 'Team',
  SETTINGS: 'Settings',
} as const;

export type RouteNames = typeof ROUTES[keyof typeof ROUTES];
