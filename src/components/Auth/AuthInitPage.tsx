import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

type PropType = {
  onClick: (screen: any) => void;
};

const AuthInitPage = ({onClick}: PropType) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.registerBtn}>
        <Text style={styles.btnTxt}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...styles.registerBtn, backgroundColor: 'orange'}}
        onPress={() => onClick('Login')}>
        <Text style={{...styles.btnTxt, color: '#fff'}}>Login</Text>
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
    borderColor: 'orange',
    width: '100%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
