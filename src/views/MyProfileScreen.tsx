import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {StyleText, StyleView} from '../utils/tailwindandUIkiteCombination';
import { Avatar } from '@ui-kitten/components';
const MyProfileScreen = () => {
  return (
    <SafeAreaView>
      <StyleView className="w-full h-full" level="1">
        <StyleView className='w-full h-60 bg-orange-100 flex justify-center items-center'>
          <Avatar size='large' source={require('../assets/icons/logo.png')} shape='rounded' />
          <StyleText category='h2' status='' appearance='hint'>+919999999999</StyleText>
        </StyleView>
      </StyleView>
    </SafeAreaView>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({});
