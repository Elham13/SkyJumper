import React from 'react';
import {
  Divider,
  Drawer,
  DrawerItem,
  Icon,
  IconElement,
  IconProps,
  IndexPath,
} from '@ui-kitten/components';
import {StyleSheet, ViewProps, ImageBackground} from 'react-native';
import {
  StyleText,
  StyleTouchableOpacity,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';

interface DrawerContentProp {
  navigation: any;
  state: any;
}

const WalletIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="gift-outline" />
);
const HomeIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="home-outline" />
);
const PersonIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="person-outline" />
);

const ForwardIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="arrow-ios-forward" />
);

const AcctiveIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="globe-outline" />
);
const BookingIcon = (props: IconProps): IconElement => (
  <Icon {...props} name="shopping-cart-outline" />
);

const DrawerContent = ({navigation, state}: DrawerContentProp) => {
  const closeDrawer = () => {
    // Use navigation or a reference to the drawer to close it
    // Assuming you're using React Navigation's navigation prop
    navigation.closeDrawer();
  };

  const Header = () => (
    <>
      {/* <ImageBackground
        style={[props.style, styles.header]}
        source={require('../assets/happyMonkey.png')}
        > */}

      <StyleView className="w-full h-32 p-2 bg-orange-100  flex flex-row justify-between items-center">
        <StyleView className="bg-transparent flex justify-center items-start">
          <StyleText category="h6">Muzamil Shah Quraishi</StyleText>
          <StyleText category="c2">Bogal, Delhi, india</StyleText>
        </StyleView>
        <StyleTouchableOpacity
          onPress={closeDrawer}
          className="w-10 h-10 p-1  bg-transparent">
          <Icon name="menu-arrow-outline" />
        </StyleTouchableOpacity>
      </StyleView>
      {/* </ImageBackground> */}
      <Divider />
    </>
  );

  return (
    <Drawer
      header={Header}
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem
        title="Home"
        accessoryLeft={HomeIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="My Profile"
        accessoryLeft={PersonIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Activities"
        accessoryLeft={AcctiveIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="My Wallet"
        accessoryLeft={WalletIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="My Bookings"
        accessoryLeft={BookingIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="My Waiver Form"
        accessoryLeft={<Icon name="calendar-outline" />}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Contact Us"
        accessoryLeft={<Icon name="phone-call-outline" />}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="SkyJumper Safety Video"
        accessoryLeft={<Icon name="video-outline" />}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Refer a Friend"
        accessoryLeft={<Icon name="shield-outline" />}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Feedback And Complaints"
        accessoryLeft={<Icon name="award-outline" />}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title="Terms And Conditions"
        accessoryLeft={<Icon name="briefcase-outline" />}
        accessoryRight={ForwardIcon}
      />
    </Drawer>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  header: {
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    objectFit: 'cover',
  },
});
