import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const FloatingButton = () => {
  return (
    <TouchableOpacity style={styles.floatingButton}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    zIndex: 100,
    width: 50,
    height: 50,
    backgroundColor: 'blue', // Button background color
    borderRadius: 25, // Half of the width/height to make it a circle
    alignItems: 'center',
    justifyContent: 'center',
    top: 0, // Adjust as needed
    right: 20, // Adjust as needed
    elevation: 5, // Shadow on Android
    shadowColor: 'black', // Shadow on iOS
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.3,
  },
  buttonText: {
    fontSize: 24,
    color: 'white', // Text color
  },
});

export default FloatingButton;
