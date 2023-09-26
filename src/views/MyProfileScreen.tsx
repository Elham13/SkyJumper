import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import { Avatar } from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { StyleButton, StyleText, StyleView } from '../utils/TailwindAndUIkiteCombination';
const MyProfileScreen = ({}) => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <StyleView className="w-full h-full" level="1">
        <StyleView className='w-full h-60 bg-orange-100 flex justify-center items-center'>
          <StyleButton onPress={() => navigation.navigate('Tabs')} appearance='ghost' className=' absolute top-2 left-2 self-start'><Icon name='arrow-left' /></StyleButton>
          <Avatar size='large' source={require('../assets/logo.png')} shape='rounded' />
          <StyleText category='s1' appearance='hint'>+919999999999</StyleText>
        </StyleView>
      </StyleView>
    </SafeAreaView>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({});
