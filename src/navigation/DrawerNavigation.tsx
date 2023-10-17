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
import LoginScreen from '../views/LoginScreen';
import RegisterScreen from '../views/RegisterScreen';
import SelectionScreen from '../views/SelectionScreen';
import {useAuth} from '../contexts/AuthProvider';
import OrderDetailScreen from '../views/OrderDetailScreen';

const {Navigator, Screen} = createDrawerNavigator();

const DrawerNavigation = () => {
  const {isLoggedIn} = useAuth();
  return (
    <Navigator
      initialRouteName={isLoggedIn ? 'Home' : 'InitialScreen'}
      screenOptions={{headerShown: false}}
      drawerContent={props => (
        <DrawerContent navigation={props.navigation} state={props.state} />
      )}>
      <Screen name="InitialScreen" component={MainStack} />
      {/* <Screen name='Home' component={MainScreen} /> */}
      <Screen name="My Profile" component={MyProfileScreen} />
      <Screen name="Activities" component={ActivitiesScreen} />
      <Screen name="My Wallet" component={MyWalletScreen} />
      <Screen name="My Bookings" component={MyBookingsScreen} />
      <Screen name="My Waiver Form" component={WaiverForm} />
      <Screen name="Contact Us" component={ContactUs} />
      <Screen name="SkyJumper Safety Video" component={SafetyVideo} />
      <Screen name="Refer a Friend" component={ReferAFriend} />
      <Screen
        name="Feedback And Complaints"
        component={FeedbackAndComplaints}
      />
      <Screen name="Terms And Conditions" component={TermsAndConditions} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Register" component={RegisterScreen} />
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
      <Screen name="SelectionScreen" component={SelectionScreen} />
      <Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{headerShown: false}}
      />
      {/* <Screen name='Tabs' component={MainScreen} /> */}
    </Navigator>
  );
};

export default DrawerNavigation;
