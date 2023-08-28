import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';

const Screen3 = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity>
        <Text>screen3</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen3;
