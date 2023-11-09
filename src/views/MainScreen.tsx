import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Octicons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './HomeScreen';
import ActivitiesScreen from './ActivitiesScreen';
import MembershipScreen from './MembershipScreen';
import HotOffers from './HotOffers';
import {useTheme} from '../contexts/ThemProvider';
import {StyleText} from '../utils/TailwindAndUIkiteCombination';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  const {backgroundColor, color: textColor} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor, height: 60, paddingVertical: 10},
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <Icon
                name="home"
                size={25}
                style={{
                  color: focused ? textColor : '#2D2C2C',
                }}
              />
            );
          } else if (route.name === 'Activities') {
            return (
              <IonIcon
                name="stats-chart"
                size={25}
                style={{
                  color: focused ? textColor : '#2D2C2C',
                }}
              />
            );
          } else if (route.name === 'Membership') {
            return (
              <MaterialIcon
                name="wallet-membership"
                size={28}
                style={{
                  color: focused ? textColor : '#2D2C2C',
                }}
              />
            );
          } else if (route.name === 'HotOffers') {
            return (
              <MaterialIcon
                name="brightness-percent"
                size={28}
                style={{
                  color: focused ? textColor : '#2D2C2C',
                }}
              />
            );
          }
        },
        tabBarLabel: ({focused, color}) => {
          return (
            <StyleText
              className="text-xs"
              style={{color: focused ? textColor : '#000'}}>
              {route?.name}
            </StyleText>
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Activities" component={ActivitiesScreen} />
      <Tab.Screen name="Membership" component={MembershipScreen} />
      <Tab.Screen name="HotOffers" component={HotOffers} />
    </Tab.Navigator>
  );
};

export default MainScreen;
