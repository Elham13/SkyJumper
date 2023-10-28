import {StyleSheet, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {useTheme} from '../../contexts/ThemProvider';

type PropType = {
  children: React.ReactNode;
};
const {height} = Dimensions.get('window');

const AuthWrapper = ({children}: PropType) => {
  const {backgroundColor} = useTheme();

  return (
    <View style={[styles.wrapper, {height, backgroundColor}]}>
      <View style={[styles.container, {height: height / 1.2}]}>
        <Image
          style={styles.monkey}
          source={require('../../assets/monkey.png')}
        />
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        {children}
      </View>
    </View>
  );
};

export default AuthWrapper;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
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
