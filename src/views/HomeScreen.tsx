import {View, Text} from 'react-native';
import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes';
import {TouchableOpacity} from 'react-native-gesture-handler';

type PropType = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = (props: PropType) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
       <Text> Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
