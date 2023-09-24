import React from 'react';
import {Drawer, DrawerItem, IndexPath} from '@ui-kitten/components';

interface DrawerContentProp {
  navigation: any;
  state: any;
}

const DrawerContent = ({navigation, state}: DrawerContentProp) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title="Profile" />
    <DrawerItem title="Activities" />
    <DrawerItem title="Wallet" />
    <DrawerItem title="Bookings" />
    <DrawerItem title="WaiverForm" />
    <DrawerItem title="ContactUs" />
    <DrawerItem title="SafetyVideo" />
    <DrawerItem title="ReferFriend" />
    <DrawerItem title="FeedbackAndComplaint" />
    <DrawerItem title="TermsAndConditions" />
  </Drawer>
);

export default DrawerContent;
