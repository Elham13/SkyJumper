import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ActivitiesScreen from '../views/ActivitiesScreen';
import MyWalletScreen from '../views/MyWalletScreen';
import MyBookingsScreen from '../views/MyBookingsScreen';
import WaiverForm from '../views/WaiverForm';
import ContactUs from '../views/ContactUs';
import SafetyVideo from '../views/SafetyVideo';
import ReferAFriend from '../views/ReferAFriend';
import FeedbackAndComplaints from '../views/FeedbackAndComplaints';
import TermsAndConditions from '../views/TermsAndConditions';
import DrawerContent from './DrawerContent';
import MyProfileScreen from '../views/MyProfileScreen';
import HomeScreen from '../views/HomeScreen';
import MainScreen from '../views/MainScreen';
import {MainStack} from './StackNavigation';
import NotificationsScreen from '../views/NotificationsScreen';
import ActivityDetails from '../views/ActivityDetails';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Navigator
      initialRouteName="Tabs"
      screenOptions={{headerShown: false}}
      drawerContent={props => (
        <DrawerContent navigation={props.navigation} state={props.state} />
      )}>
      <Screen name="Home" component={MainScreen} />
      <Screen name="Profile" component={MyProfileScreen} />
      <Screen name="Activities" component={ActivitiesScreen} />
      <Screen name="Wallet" component={MyWalletScreen} />
      <Screen name="Bookings" component={MyBookingsScreen} />
      <Screen name="WaiverForm" component={WaiverForm} />
      <Screen name="ContactUs" component={ContactUs} />
      <Screen name="SafetyVideo" component={SafetyVideo} />
      <Screen name="ReferFriend" component={ReferAFriend} />
      <Screen name="FeedbackAndComplaint" component={FeedbackAndComplaints} />
      <Screen name="TermsAndConditions" component={TermsAndConditions} />
      <Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{headerShown: false}}
      />
      <Screen
        name="ActivityDetails"
        component={ActivityDetails}
        options={{headerShown: false}}
      />
      <Screen name="Tabs" component={MainScreen} />
    </Navigator>
  );
};

export default DrawerNavigation;
