import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '../../contexts/ThemProvider';

type PropType = {
  onClick: (screen: any) => void;
};

const AuthInitPage = ({onClick}: PropType) => {
  const {backgroundColor, color} = useTheme();

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={[styles.registerBtn, {borderColor: backgroundColor}]}
        onPress={() => onClick('Register')}>
        <Text style={styles.btnTxt}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.registerBtn,
          {backgroundColor, borderColor: backgroundColor},
        ]}
        onPress={() => onClick('Login')}>
        <Text style={[styles.btnTxt, {color}]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthInitPage;

const styles = StyleSheet.create({
  wrapper: {
    width: 300,
  },
  registerBtn: {
    borderWidth: 1,
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
