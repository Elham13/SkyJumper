import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <View style={styles.contents}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.headerTxt}>
              By signing up you are agreeing our{' '}
              <Text style={styles.headerTxt2}>Terms and privacy policy</Text>
            </Text>

            <View style={styles.inputsWrapper}>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Your name" />
                <Icon name="user" size={24} style={styles.icon} />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Phone number" />
                <Icon name="phone" size={24} style={styles.icon} />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Email" />
                <Icon name="at" size={24} style={styles.icon} />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="DOB" />
                <Icon name="calendar" size={24} style={styles.icon} />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="City" />
                <Icon name="map-pin" size={24} style={styles.icon} />
              </View>
              <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Pin Code" />
                <Icon name="lock" size={24} style={styles.icon} />
              </View>
            </View>

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

            <TouchableOpacity style={styles.alreadyBtn}>
              <Text style={styles.alreadyBtnTxt}>Already have an account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerBtn}>
              <Text style={styles.registerBtnTxt}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
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
  logo: {
    width: 100,
    objectFit: 'contain',
  },
  welcome: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginBottom: 4,
  },
  inputsWrapper: {
    marginTop: 50,
    gap: 12,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    width: 280,
    padding: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  icon: {
    color: 'orange',
  },
  input: {
    padding: 4,
    fontSize: 16,
    flex: 1,
  },
  alreadyBtn: {
    width: 280,
    marginTop: 26,
  },
  alreadyBtnTxt: {
    textAlign: 'right',
    color: '#2E90C0',
  },
  registerBtn: {
    width: 280,
    backgroundColor: 'orange',
    borderRadius: 8,
    padding: 10,
  },
  registerBtnTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  iconBtn: {width: width / 10, height: width / 10},
  autBtnWrapper: {flexDirection: 'row', marginTop: 32, gap: 8},
});
