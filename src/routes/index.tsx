import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tabs from '../navigation/tabs';

import InitialScreen from '../views/InitialScreen';
import LoginScreen from '../views/LoginScreen';
import HomeScreen from '../views/HomeScreen';
import RegisterScreen from '../views/RegisterScreen';
import Screen1 from '../views/Screen1';
import Screen2 from '../views/Screen2';
import Screen3 from '../views/Screen3';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  InitialScreen: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialScreen">
        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        /> */}
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
          name="Screen1"
          component={Screen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{headerShown: false}}
        />
      <Stack.Screen name='Home' component={Tabs} options={{headerShown: false}} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default AppNavigator;
