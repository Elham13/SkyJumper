import {Share, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';
import {StyleButton, StyleView} from '../utils/TailwindAndUIkiteCombination';
import {generateCouponCode} from '../utils/helpers';

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
      <StyleView className="p-8 h-full">
        <StyleButton onPress={shareCoupon}>Share your coupon</StyleButton>
      </StyleView>
    </View>
  );
};

export default ReferAFriend;

const styles = StyleSheet.create({});
