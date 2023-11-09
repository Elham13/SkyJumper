import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTheme} from '../contexts/ThemProvider';
import {StyleText, StyleView} from '../utils/TailwindAndUIkiteCombination';

const {height} = Dimensions.get('screen');

type PropTypes = {onPress: () => void; badge?: number};

const FloatingButton = ({onPress, badge}: PropTypes) => {
  const {backgroundColor, color} = useTheme();
  return (
    <TouchableOpacity
      style={[styles.floatingButton, {backgroundColor}]}
      onPress={onPress}>
      <StyleView className="rounded-full w-full h-full bg-transparent items-center justify-center relative">
        {/* <StyleText
          style={{color}}
          className="absolute top-[-4px] bg-black text-xs h-[16px] w-[16px] rounded-full text-center right-0">
          {badge}
        </StyleText> */}
        <Icon
          name="shoppingcart"
          size={24}
          style={[styles.proceedBtnIcon, {color}]}
        />
      </StyleView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    zIndex: 100,
    width: 50,
    height: 50,
    borderRadius: 25, // Half of the width/height to make it a circle
    top: height - 200, // Adjust as needed
    right: 20, // Adjust as needed
    elevation: 5, // Shadow on Android
    shadowColor: 'black', // Shadow on iOS
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
  },
  proceedBtnIcon: {
    fontWeight: '800',
  },
});

export default FloatingButton;
