import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useMyContext } from '../components/MyContext';

const {height, width} = Dimensions.get('window');

const LoginScreen = () => {
  const {data,setData} = useMyContext()
  const navigation = useNavigation();
  const handleLogin = () => {
    setData(true)
    navigation.navigate('Home' as never);
  };

  return (
    <View style={[styles.wrapper, {height}]}>
      <View style={[styles.container, {height: height / 1.2}]}>
        <Image
          style={[styles.monkey, {width: width / 2.5, bottom: -40}]}
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
              onPress={() => navigation.navigate('Register' as never)}>
              <Text style={styles.switchBtnTxt}>Register</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputsWrapper}>
            <View style={styles.inputWrapper}>
              <Icon name="phone" size={24} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Phone number"
                placeholderTextColor="#aaa"
              />
            </View>
            <View style={styles.inputWrapper}>
              <Icon name="lock" size={24} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="OTP"
                placeholderTextColor="#aaa"
              />
              <TouchableOpacity style={styles.send}>
                <Text>Send</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.login} onPress={handleLogin}>
            <Text style={styles.loginTxt}>Login</Text>
          </TouchableOpacity>

          <View style={styles.autBtnWrapper}>
            <TouchableOpacity>
              <Image
                source={require('../assets/facebook.png')}
                width={20}
                height={20}
                style={styles.iconBtn}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/google.png')}
                width={20}
                height={20}
                style={styles.iconBtn}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'orange',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
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
    color: 'black',
  },
  headerTxt2: {
    color: '#2E90C0',
  },
  monkey: {
    objectFit: 'contain',
    position: 'absolute',
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
    color: 'black',
  },
  send: {
    backgroundColor: 'orange',
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
  iconBtn: {width: width / 10, height: width / 10},
  autBtnWrapper: {flexDirection: 'row', marginTop: 32, gap: 8},
});
