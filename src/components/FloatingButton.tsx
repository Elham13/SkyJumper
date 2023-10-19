import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const {height} = Dimensions.get('screen');

const FloatingButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <Icon name="shoppingcart" size={24} style={styles.proceedBtnIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    zIndex: 100,
    width: 50,
    height: 50,
    backgroundColor: 'orange', // Button background color
    borderRadius: 25, // Half of the width/height to make it a circle
    alignItems: 'center',
    justifyContent: 'center',
    top: height - 200, // Adjust as needed
    right: 20, // Adjust as needed
    elevation: 5, // Shadow on Android
    shadowColor: 'black', // Shadow on iOS
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
  },
  proceedBtnIcon: {
    fontWeight: '800',
    color: '#000',
  },
});

export default FloatingButton;
