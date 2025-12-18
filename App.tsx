import 'react-native-gesture-handler';
import React, { type ComponentProps } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { RootTabParamList } from './src/navigation/types';
import { AppTheme } from './src/theme';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={AppTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarActiveTintColor: '#ffffff',
            tabBarInactiveTintColor: 'rgba(255,255,255,0.85)',
            tabBarStyle: { backgroundColor: '#16a34a', borderTopColor: '#0f766e' },
            tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
            tabBarIcon: ({ color, size, focused }) => {
              let iconName: ComponentProps<typeof Ionicons>['name'];

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              } else {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },

          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>

        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
