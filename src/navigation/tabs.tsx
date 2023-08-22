import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../routes';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import HomeScreen from '../views/HomeScreen';
import Screen1 from '../views/Screen1';
import Screen2 from '../views/Screen2';
import Screen3 from '../views/Screen3';
import Icon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const monkey = require('../assets/hanging-monkey.png');

type PropType = NativeStackScreenProps<RootStackParamList, 'Home'>;


const homeIcon = () => {
  return <Icon name="home" />;
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#F69131',
          height:50,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({focused, color,}) => (
            <Text style={{color: focused ? '#ffffff' : '#2D2C2C',fontSize:14,fontWeight:'700'}}>Home</Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={25}
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
              }}
            />
          ),
          // tabBarButton: (props) => (
          //     <TabBarCustomButton
          //         {...props}
          // color: focused ? '#ffffff' : '#2D2C2C'
          //     />
          // )
        }}
      />

      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarShowLabel: false,
          tabBarLabel: ({focused, color,}) => (
            <Text style={{color: focused ? '#ffffff' : '#2D2C2C',fontSize:14,fontWeight:'700'}}>Home</Text>
          ),
          tabBarIcon: ({focused}) => (
            <IonIcon
              name="stats-chart"
              size={25}
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
              }}
            />
          ),
          // tabBarButton: (props) => (
          //     <TabBarCustomButton
          //         {...props}
          //     />
          // )
        }}
      />

      <Tab.Screen
        name="Order"
        component={Screen2}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="wallet-membership"
              size={28}
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
              }}
            />
          ),
          // tabBarButton: (props) => (
          //     <TabBarCustomButton
          //         {...props}
          //     />
          // )
        }}
      />

      <Tab.Screen
        name="Store"
        component={Screen3}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcon
              name="brightness-percent"
              size={28}
              style={{
                color: focused ? '#ffffff' : '#2D2C2C',
              }}
            />
          ),
          
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
