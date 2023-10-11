import {PermissionsAndroid} from 'react-native';
import React, {useEffect} from 'react';
import {
  StyleButton,
  StyleImage,
  StyleText,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';
import Geolocation from '@react-native-community/geolocation';
import {useAppInfo} from '../contexts/AppInfoProvider';

type PropTypes = {
  navigation: any;
};
const SelectionScreen = ({navigation}: PropTypes) => {
  const {setAppInfo} = useAppInfo();

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Skyjumper',
          message:
            'Skyjumper needs to access your location for automatic locating the nearest park for you',
          buttonPositive: 'Allow',
          buttonNegative: 'Deny',
          buttonNeutral: 'Ignore',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          position =>
            setAppInfo(prev => ({
              ...prev,
              location: {
                latitude: position?.coords?.latitude,
                longitude: position?.coords?.longitude,
                altitude: position?.coords?.altitude || undefined,
              },
            })),
          error => console.log('Geolocation error: ', error.message),
        );
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleNavigate = (selectedScreen: 'Trampoline' | 'Go Banana') => {
    setAppInfo(prev => ({...prev, selectedScreen}));
    navigation?.navigate('Home');
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <StyleView className="bg-white flex-1">
      <StyleView className="flex-1 items-center p-4 justify-between">
        <StyleImage source={require('../assets/logo.png')} />
        <StyleText className="text-center text-lg text-gray-600">
          A cutting edge Family Entertainment center to have unparalleled
          experience of Amusement park, fitness and sports together.
        </StyleText>
        <StyleButton
          className="w-full"
          onPress={() => handleNavigate('Trampoline')}>
          <StyleText>Skyjumper Trampoline Park</StyleText>
        </StyleButton>
      </StyleView>
      <StyleView className="flex-1 items-center p-4 justify-between">
        <StyleImage source={require('../assets/go-banana.png')} />
        <StyleText className="text-center text-lg text-gray-600">
          Skyjumper Go Bananas is the ultimate heaven of excitement and joy,
          perfectly tailored for kids aged 1 to 13
        </StyleText>
        <StyleButton
          className="w-full"
          onPress={() => handleNavigate('Go Banana')}>
          <StyleText>Skyjumper Go Bananas</StyleText>
        </StyleButton>
      </StyleView>
    </StyleView>
  );
};

export default SelectionScreen;
