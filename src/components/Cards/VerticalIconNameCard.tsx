import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

type VerticalIconNameCardProps = {
  iconUrl: any;
  text: string;
  onClick: () => void;
};

const {width} = Dimensions.get('screen');

const VerticalIconNameCard = ({
  iconUrl,
  text,
  onClick,
}: VerticalIconNameCardProps) => {
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
    width: width / 5 + 8,
  },
  icon: {
    width: width / 6,
    objectFit: 'contain',
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },
});
