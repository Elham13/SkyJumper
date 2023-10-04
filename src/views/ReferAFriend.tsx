import {Share, StyleSheet, Dimensions, View} from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';
import {StyleButton, StyleView} from '../utils/TailwindAndUIkiteCombination';
import {generateCouponCode} from '../utils/helpers';
import LottieView from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

const ReferAFriend = () => {
  const shareCoupon = () => {
    Share.share({
      message: generateCouponCode(10),
      url: '',
      title: 'Refer a friend',
    });
  };
  return (
    <View>
      <PageHeader title="Refer a friend" />
      <StyleView className="p-8 h-full items-center">
        <LottieView
          style={{width, height: height / 4}}
          source={require('../assets/json/sendingMessage.json')}
          autoPlay
          loop
        />
        <StyleButton onPress={shareCoupon} className="my-8 w-full">
          Share your coupon
        </StyleButton>
        <LottieView
          style={{width, height: height / 4}}
          source={require('../assets/json/share.json')}
          autoPlay
          loop
        />
      </StyleView>
    </View>
  );
};

export default ReferAFriend;

const styles = StyleSheet.create({});
