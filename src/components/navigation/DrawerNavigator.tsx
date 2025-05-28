import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { colors, spacing, typography } from '../../styles/theme';
import Icon from 'react-native-vector-icons/Feather';

const Drawer = createDrawerNavigator();

interface DrawerNavigatorProps {
  children: React.ReactNode;
}

const DrawerNavigator: React.FC<DrawerNavigatorProps> = ({ children }) => {
  const getDrawerStyle = () => ({
    drawerWidth: dimensions.navigation.drawerWidth,
    drawerPosition: 'left',
    drawerType: 'front',
    drawerStyle: {
      backgroundColor: colors.background,
    },
  });

  const getDrawerItemStyle = () => ({
    activeTintColor: colors.primary,
    inactiveTintColor: colors.textSecondary,
    labelStyle: {
      ...typography.styles.body1,
    },
    iconContainerStyle: {
      marginRight: spacing.component.paddingXS,
    },
  });

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: getDrawerStyle(),
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.textOnPrimary,
        headerTitleStyle: {
          ...typography.styles.navTitle,
        },
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.textSecondary,
        drawerLabelStyle: {
          ...typography.styles.body1,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="home"
              size={20}
              color={focused ? colors.primary : colors.textSecondary}
            />
          ),
          drawerLabel: 'Home',
        }}
      />
      <Drawer.Screen
        name="DaySheet"
        component={DaySheetScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="calendar"
              size={20}
              color={focused ? colors.primary : colors.textSecondary}
            />
          ),
          drawerLabel: 'Day Sheet',
        }}
      />
      <Drawer.Screen
        name="Financial"
        component={FinancialScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="dollar-sign"
              size={20}
              color={focused ? colors.primary : colors.textSecondary}
            />
          ),
          drawerLabel: 'Financials',
        }}
      />
      <Drawer.Screen
        name="Merchandise"
        component={MerchandiseScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="shopping-bag"
              size={20}
              color={focused ? colors.primary : colors.textSecondary}
            />
          ),
          drawerLabel: 'Merchandise',
        }}
      />
      <Drawer.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="calendar"
              size={20}
              color={focused ? colors.primary : colors.textSecondary}
            />
          ),
          drawerLabel: 'Schedule',
        }}
      />
      <Drawer.Screen
        name="Team"
        component={TeamScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="users"
              size={20}
              color={focused ? colors.primary : colors.textSecondary}
            />
          ),
          drawerLabel: 'Team',
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              name="settings"
              size={20}
              color={focused ? colors.primary : colors.textSecondary}
            />
          ),
          drawerLabel: 'Settings',
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
