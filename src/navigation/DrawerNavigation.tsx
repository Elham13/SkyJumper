import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RegisterScreen from '../views/RegisterScreen';
import LoginScreen from '../views/LoginScreen';
import ActivitiesScreen from '../views/ActivitiesScreen';
import MyProfileScreen from '../views/MyProfileScreen';
import MyWalletScreen from '../views/MyWalletScreen';
import MyBookingsScreen from '../views/MyBookingsScreen';
import WaiverForm from '../views/WaiverForm';
import ContactUs from '../views/ContactUs';
import SafetyVideo from '../views/SafetyVideo';
import ReferAFriend from '../views/ReferAFriend';
import FeedbackAndComplaints from '../views/FeedbackAndComplaints';
import TermsAndConditions from '../views/TermsAndConditions';
import {MainStack} from './StackNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Profile" component={MainStack} />
      <Drawer.Screen name="Activities" component={ActivitiesScreen} />
      <Drawer.Screen name="Wallet" component={MyWalletScreen} />
      <Drawer.Screen name="Bookings" component={MyBookingsScreen} />
      <Drawer.Screen name="WaiverForm" component={WaiverForm} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="SafetyVideo" component={SafetyVideo} />
      <Drawer.Screen name="ReferFriend" component={ReferAFriend} />
      <Drawer.Screen
        name="FeedbackAndComplaint"
        component={FeedbackAndComplaints}
      />
      <Drawer.Screen name="TermsAndConditions" component={TermsAndConditions} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
