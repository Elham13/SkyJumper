import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

type PropTypes = {
  iconUrl: any;
  text: string;
};

const VerticalIconNameCard = ({iconUrl, text}: PropTypes) => {
  return (
    <View style={styles.container}>
      <Image source={iconUrl} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </View>
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
    objectFit: 'contain'
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black'
  },
});
