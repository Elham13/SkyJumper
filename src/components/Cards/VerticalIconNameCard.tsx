import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

type PropTypes = {
  iconUrl: any;
  text: string;
  onClick: () => void;
};

const VerticalIconNameCard = ({iconUrl, text, onClick}: PropTypes) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image source={iconUrl} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default VerticalIconNameCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    width: 90,
  },
  icon: {
    width: 34,
    objectFit: 'contain',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },
});
