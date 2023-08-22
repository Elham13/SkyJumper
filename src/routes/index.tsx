import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InitialScreen from '../views/InitialScreen';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';
import RegisterScreen from '../views/RegisterScreen';
import ActivitiesScreen from '../views/ActivitiesScreen';

export type RootStackParamList = {
  InitialScreen: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Activities: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialScreen">
        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
          name="Activities"
          component={ActivitiesScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
