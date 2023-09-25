import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {StyleButton, StyleText, StyleView} from '../utils/tailwindandUIkiteCombination';
import { Avatar } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';
const MyProfileScreen = () => {
  return (
    <SafeAreaView>
      <StyleView className="w-full h-full" level="1">
        <StyleView className='w-full h-60 bg-orange-100 flex justify-center items-center'>
          <StyleButton appearance='ghost' className='self-start00000000000000000000000000000000000000000000-111111111111111111111111111111111111111p3eeeeeeeeeeeeeeeee`````````````gffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'><Icon name='arrow-left' /></StyleButton>
          <Avatar size='large' source={require('../assets/logo.png')} shape='rounded' />
          <StyleText category='s1' appearance='hint'>+919999999999</StyleText>
        </StyleView>
      </StyleView>
    </SafeAreaView>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({});
