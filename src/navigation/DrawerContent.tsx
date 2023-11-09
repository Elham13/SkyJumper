import React from 'react';
import {
  Divider,
  Drawer,
  DrawerItem,
  DrawerItemProps,
  Icon,
  IconElement,
  IconProps,
  IndexPath,
} from '@ui-kitten/components';
import {
  StyleText,
  StyleTouchableOpacity,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';
import {useTheme} from '../contexts/ThemProvider';
import {TouchableOpacity} from 'react-native';

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
  const {bgLight} = useTheme();
  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  const Header = () => (
    <>
      <StyleView
        className="w-full h-32 p-2 flex flex-row justify-between items-center"
        style={{backgroundColor: bgLight}}>
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
