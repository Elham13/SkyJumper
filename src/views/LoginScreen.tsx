import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RootStackParamList} from '../routes';

type PropType = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen = ({navigation}: PropType) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          style={styles.monkey}
          source={require('../assets/happyMonkey.png')}
        />
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <View style={styles.contents}>
          <Text style={styles.headerTxt}>
            By signing in you are agreeing our{' '}
            <Text style={styles.headerTxt2}>Terms and privacy policy</Text>
          </Text>

          <View style={styles.switchContainer}>
            <TouchableOpacity style={styles.switchBtn}>
              <Text
                style={{
                  ...styles.switchBtnTxt,
                  borderBottomWidth: 1,
                  color: '#2E90C0',
                }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.switchBtn}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.switchBtnTxt}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputsWrapper}>
            <View style={styles.inputWrapper}>
              <Icon name="phone" size={24} style={styles.icon} />
              <TextInput style={styles.input} placeholder="Phone number" />
            </View>
            <View style={styles.inputWrapper}>
              <Icon name="lock" size={24} style={styles.icon} />
              <TextInput style={styles.input} placeholder="OTP" />
              <TouchableOpacity style={styles.send}>
                <Text>Send</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.login}>
            <Text style={styles.loginTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

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
    position: 'relative',
  },
  contents: {
    maxWidth: 250,
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 16,
    textAlign: 'center',
  },
  headerTxt2: {
    color: '#2E90C0',
  },
  monkey: {
    width: 200,
    objectFit: 'contain',
    position: 'absolute',
    bottom: -30,
  },
  logo: {
    width: 100,
    objectFit: 'contain',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 18,
  },
  switchBtn: {
    borderColor: '#2E90C0',
  },
  switchBtnTxt: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
  },
  inputsWrapper: {
    marginTop: 80,
    gap: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: 280,
  },
  icon: {
    color: 'orange',
  },
  input: {
    padding: 4,
    paddingHorizontal: 10,
    fontSize: 16,
    flex: 1,
  },
  send: {
    backgroundColor: '#F7CD7',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  login: {
    backgroundColor: 'orange',
    width: 280,
    borderRadius: 6,
    marginTop: 30,
    padding: 12,
  },
  loginTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
