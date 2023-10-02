import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

type AdvertisementCardProps = {
  imgUrl: any;
  title: string;
};

const AdvertisementCard = ({imgUrl, title}: AdvertisementCardProps) => {
  return (
    <View style={styles.container}>
      <Image source={imgUrl} style={styles.bgImg} />
      <View style={styles.layer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.monkey}
        />
      </View>
      <View style={styles.bottom}>
        <Image
          source={require('../../assets/hanging-monkey.png')}
          style={styles.hanginMonkey}
        />
        <Text style={styles.txt}>Call us +918882288001</Text>
        <Text style={styles.txt}>Email: enquirey@skyjumpertp.com</Text>
        <View style={styles.titleWrapper}>
          <Text style={{...styles.txt, color: '#f1f1f1', textAlign: 'center'}}>
            {title}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AdvertisementCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  layer: {
    height: 200,
    width: 380,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#0009',
    alignItems: 'center',
  },
  monkey: {height: 90, objectFit: 'contain', marginTop: 8},
  hanginMonkey: {position: 'absolute', right: 4, top: -28},
  bgImg: {
    height: 200,
    width: 380,
    objectFit: 'cover',
  },
  bottom: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
  },
  titleWrapper: {
    backgroundColor: '#000',
    width: 150,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  txt: {fontSize: 10},
});
