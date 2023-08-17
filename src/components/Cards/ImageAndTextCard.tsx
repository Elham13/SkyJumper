import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

type PropType = {
  text: string;
  imgUrl: any;
  onClick: () => void;
};

const ImageAndTextCard = ({text, imgUrl, onClick}: PropType) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Image source={imgUrl} style={styles.img} />
      <View style={styles.content}>
        <Text style={styles.txt}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageAndTextCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#0009',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 380,
    objectFit: 'cover',
  },
  txt: {
    backgroundColor: 'orange',
    width: 300,
    maxHeight: 140,
    padding: 8,
    fontSize: 16,
  },
});
