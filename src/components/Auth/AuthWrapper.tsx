import {StyleSheet, View, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '../../contexts/ThemProvider';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';

type PropType = {
  children: React.ReactNode;
};
const {height} = Dimensions.get('window');

const AuthWrapper = ({children}: PropType) => {
  const translateY = useSharedValue(-5);
  const scale = useSharedValue(1);
  const {backgroundColor} = useTheme();

  const animationConfig = {
    duration: 1000,
    easing: Easing.inOut(Easing.ease),
  };

  const startAnimation = () => {
    translateY.value = withRepeat(withTiming(80, animationConfig), -1, true);
  };

  const startPulseAnimation = () => {
    scale.value = withRepeat(
      withTiming(1.2, animationConfig),
      -1,
      true, // Infinite loop
    );
  };

  useEffect(() => {
    startAnimation();
    startPulseAnimation();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const pulseAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  return (
    <View style={[styles.wrapper, {height, backgroundColor}]}>
      <View style={[styles.container, {height: height / 1.2}]}>
        <Animated.Image
          style={[styles.monkey, animatedStyle]}
          source={require('../../assets/monkey.png')}
        />
        <Animated.Image
          style={[styles.logo, pulseAnimatedStyle]}
          source={require('../../assets/logo.png')}
        />
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
