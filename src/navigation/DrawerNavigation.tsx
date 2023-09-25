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
import {MainStack} from './StackNavigation';
import DrawerContent from './DrawerContent';
import MyProfileScreen from '../views/MyProfileScreen';

const {Navigator,Screen} = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} drawerContent={props => <DrawerContent navigation={props.navigation} state={props.state} />}>
      <Screen name="Profile" component={MyProfileScreen} />
      <Screen name="Activities" component={ActivitiesScreen} />
      <Screen name="Wallet" component={MyWalletScreen} />
      <Screen name="Bookings" component={MyBookingsScreen} />
      <Screen name="WaiverForm" component={WaiverForm} />
      <Screen name="ContactUs" component={ContactUs} />
      <Screen name="SafetyVideo" component={SafetyVideo} />
      <Screen name="ReferFriend" component={ReferAFriend} />
      <Screen
        name="FeedbackAndComplaint"
        component={FeedbackAndComplaints}
      />
      <Screen name="TermsAndConditions" component={TermsAndConditions} />
    </Navigator>
  );
};

export default DrawerNavigation;
