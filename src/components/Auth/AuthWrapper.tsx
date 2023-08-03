import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import React from 'react';

type PropType = {
  children: React.ReactNode;
};

const AuthWrapper = ({children}: PropType) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image style={styles.monkey} source={require('../../assets/monkey.png')} />
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        {children}
      </View>
    </View>
  );
};

export default AuthWrapper;

const styles = StyleSheet.create({
  wrapper: {
    height: Platform.OS === 'ios' ? '90%' : '100%',
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '90%',
    width: 1000,
    borderBottomEndRadius: 100000,
    borderBottomStartRadius: 100000,
  },
  monkey: {
    width: 140,
    objectFit: 'contain',
    marginTop: -30,
  },
  logo: {
    width: 140,
    objectFit: 'contain',
  },
});
