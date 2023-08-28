import React from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import AdvertisementCard from './AdvertisementCard';

type PropTypes = {
  imgUrl: any;
  title: string;
  subTitle: string;
  price: string;
  discountText: string;
  onClick: (screen: any) => void;
};
const handleClick = () => {};

const MembershipCard = ({
  imgUrl,
  title,
  subTitle,
  price,
  discountText,
  onClick
}: PropTypes) => {
  return (
    <TouchableOpacity onPress={() => onClick('Register')}>
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text style={styles.subtitle}>{subTitle}</Text> */}
        <Text>
          <Text style={styles.subtitle1}>Monthly </Text>
          <Text style={styles.subtitle2}>Membership</Text>
        </Text>
        <Text>
          <Text style={styles.priceHeading}>Price </Text> {price}
        </Text>
        <Text style={styles.discountText}>{discountText}</Text>
      </View>
      <View style={styles.containerRight}>
        <Image
          source={require('../../assets/TrampolinPark.jpg')}
          style={styles.bgImg}
        />
        <View style={styles.layer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.monkey}
          />
        </View>
        <View style={styles.bottom}>
          <View style={styles.titleWrapper}>
            <Text style={{...styles.txt, color: 'black', textAlign: 'center'}}>
              {title}
            </Text>
          </View>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

export default MembershipCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    backgroundColor: '#FDE9D6',
    borderRadius: 5,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 150,
  },
  details: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  title: {
    marginTop: 5,
    height: 25,
    width: 190,
    fontWeight: '700',
    color: 'black',
    fontSize: 16,
  },
  subtitle1: {
    fontWeight: '700',
    color: '#01A2E5',
  },
  subtitle2: {
    fontWeight: '700',
    color: '#F69131',
  },
  priceHeading: {
    fontWeight: '700',
    color: 'black',
  },
  discountText: {
    width: 130,
  },
  containerRight: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    alignSelf: 'center',
    marginRight: 10,
  },
  layer: {
    height: 60,
    width: 150,
    top: 0,
    left: 0,
    backgroundColor: '#0009',
    alignItems: 'center',
    position: 'absolute',
  },
  bgImg: {
    height: 60,
    width: 150,
    objectFit: 'cover',
  },
  monkey: {height: 40, objectFit: 'contain', marginTop: 8},
  bottom: {
    backgroundColor: 'orange',
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleWrapper: {
    width: 130,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  txt: {fontSize: 10, fontWeight: '600'},
});
