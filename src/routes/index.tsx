import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from '../navigation/tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import InitialScreen from '../views/InitialScreen';
import LoginScreen from '../views/LoginScreen';
import RegisterScreen from '../views/RegisterScreen';
import ActivitiesScreen from '../views/ActivitiesScreen';
import MembershipScreen from '../views/MembershipScreen';
import MembershipDetails from '../views/MembershipDetails';
import Screen3 from '../views/Screen3';
import DrawerNavigation from '../navigation/DrawerNavigation';

export type RootStackParamList = {
  InitialScreen: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  Activities: undefined;
  Membership: undefined;
  Screen3: undefined;
HomePage2:undefined;

};

const Stack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialScreen" >
        <Stack.Screen
          name="InitialScreen"
          component={InitialScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name='HomePage2' 
        component={DrawerNavigation} 
        options={{ headerShown: false }} 
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
        <Stack.Screen
          name="Membership"
          component={MembershipScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{headerShown: false}}
        />
        
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
