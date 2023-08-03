import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useAppSelector, useAppDispatch} from '../hooks/redux';
import {decrement, increment} from '../redux/slices/counterSlice';
import {RootState} from '../redux/store';

const LoginScreen = () => {
  const count = useAppSelector((state: RootState) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Image source={require("../assets/monkey.png")} />
      <Text>Hello {count}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())}>
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(decrement())}>
        <Text>Decrease</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#FFFFFF',
    padding: 40,
    width: '100%',
    height: Platform.OS === 'ios' ? '90%' : '100%',
  },
});

export default LoginScreen;
