import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import ActivitiesScreen from './ActivitiesScreen';
import MembershipScreen from './MembershipScreen';
import HotOffers from './HotOffers';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: 'orange'},
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home1') {
            return (
              <Icon
                name="home"
                size={25}
                style={{
                  color: focused ? '#ffffff' : '#2D2C2C',
                  marginTop: 6,
                }}
              />
            );
          } else if (route.name === 'Activities') {
            return (
              <IonIcon
                name="stats-chart"
                size={25}
                style={{
                  color: focused ? '#ffffff' : '#2D2C2C',
                  marginTop: 6,
                }}
              />
            );
          } else if (route.name === 'Membership') {
            return (
              <MaterialIcon
                name="wallet-membership"
                size={28}
                style={{
                  color: focused ? '#ffffff' : '#2D2C2C',
                  marginTop: 6,
                }}
              />
            );
          } else if (route.name === 'HotOffers') {
            return (
              <MaterialIcon
                name="brightness-percent"
                size={28}
                style={{
                  color: focused ? '#ffffff' : '#2D2C2C',
                  marginTop: 6,
                }}
              />
            );
          }
        },
      })}>
      <Tab.Screen name="Home1" component={HomeScreen} />
      <Tab.Screen name="Activities" component={ActivitiesScreen} />
      <Tab.Screen name="Membership" component={MembershipScreen} />
      <Tab.Screen name="HotOffers" component={HotOffers} />
    </Tab.Navigator>
  );
};

export default MainScreen;
