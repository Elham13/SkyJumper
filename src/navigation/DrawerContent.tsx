import React from 'react';
import {Divider, Drawer, DrawerItem, Icon, IconElement, IconProps, IndexPath} from '@ui-kitten/components';
import { StyleSheet, ViewProps, ImageBackground } from 'react-native';
import { StyleText, StyleView } from '../utils/TailwindAndUIkiteCombination';

interface DrawerContentProp {
  navigation: any;
  state: any;
}

const WalletIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='shopping-bag-outline'
  />
);
const HomeIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='home-outline'
  />
);
const PersonIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='person-outline'
  />
);

const BellIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='bell-outline'
  />
);

const ForwardIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='arrow-ios-forward'
  />
);

const AcctiveIcon = (props: IconProps): IconElement => (
  <Icon
    {...props}
    name='globe-outline'
  />
);

const Header = (props: ViewProps): React.ReactElement => (
  <>
    <ImageBackground
      style={[props.style, styles.header]}
      source={require('../assets/happyMonkey.png')}
      >

    <StyleView className='bg-white  flex justify-center items-center bg-transparent'>
      <StyleText category='h6'>Muzamil Shah Quraishi</StyleText>
      <StyleText category='c2' >+919515312908</StyleText>
    </StyleView>
      </ImageBackground>
    <Divider />
  </>
);

const DrawerContent = ({navigation, state}: DrawerContentProp) => (
  <Drawer
    header={Header}
    selectedIndex={new IndexPath(state.index)}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title="Home" accessoryLeft={HomeIcon} accessoryRight={ForwardIcon} />
    <DrawerItem title="Profile" accessoryLeft={PersonIcon} accessoryRight={ForwardIcon} />
    <DrawerItem title="Activities" accessoryLeft={AcctiveIcon} accessoryRight={ForwardIcon} />
    <DrawerItem title="Wallet" accessoryLeft={WalletIcon} accessoryRight={ForwardIcon} />
    <DrawerItem title="Bookings" accessoryRight={ForwardIcon} />
    <DrawerItem title="WaiverForm" accessoryRight={ForwardIcon} />
    <DrawerItem title="ContactUs" accessoryRight={ForwardIcon} />
    <DrawerItem title="SafetyVideo" accessoryRight={ForwardIcon} />
    <DrawerItem title="ReferFriend" accessoryRight={ForwardIcon} />
    <DrawerItem title="FeedbackAndComplaint" accessoryRight={ForwardIcon} />
    <DrawerItem title="TermsAndConditions" accessoryRight={ForwardIcon} />
  </Drawer>
);

export default DrawerContent;

const styles = StyleSheet.create({
  header: {
    height: 150,
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    objectFit: 'cover',
    marginVertical: 3
    
  },
});