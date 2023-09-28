import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import InitialScreen from '../views/InitialScreen';
import LoginScreen from '../views/LoginScreen';
import RegisterScreen from '../views/RegisterScreen';
import DrawerNavigation from './DrawerNavigation';
import MainScreen from '../views/MainScreen';
import MyProfileScreen from '../views/MyProfileScreen';
import MembershipDetails from '../views/MembershipDetails';
import ActivityDetails from '../views/ActivityDetails';
import MyWalletScreen from '../views/MyWalletScreen';
import NotificationsScreen from '../views/NotificationsScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="InitialScreen">
      <Stack.Screen
        name="InitialScreen"
        component={InitialScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MembershipDetails"
        component={MembershipDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile1"
        component={MyProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Wallet" component={MyWalletScreen} />
      
      
    </Stack.Navigator>
  );
};

export {MainStack};
