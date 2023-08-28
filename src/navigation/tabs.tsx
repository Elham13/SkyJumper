import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../views/HomeScreen';
import ActivitiesScreen from '../views/ActivitiesScreen';

import MembershipScreen from '../views/MembershipScreen';
import MembershipDetails from '../views/MembershipDetails';

import Screen3 from '../views/Screen3';
import Icon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#F69131',
          height: 50,
        },
      }}>
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
                fontSize: 14,
                fontWeight: '700',
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={25}
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
                marginTop: 6,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
                fontSize: 14,
                fontWeight: '700',
              }}>
              Activities
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <IonIcon
              name="stats-chart"
              size={25}
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
                marginTop: 6,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Membership"
        component={MembershipDetails}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
                fontSize: 14,
                fontWeight: '700',
              }}>
              Memberships
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="wallet-membership"
              size={28}
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
                marginTop: 6,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Store"
        component={Screen3}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({focused, color}) => (
            <Text
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
                fontSize: 14,
                fontWeight: '700',
              }}>
              Hot Offers
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="brightness-percent"
              size={28}
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
                marginTop: 6,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
