import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {useTheme} from '../../contexts/ThemProvider';

const width = Dimensions.get('window').width;

const MembershipDetailsCollapsContent = () => {
  const {backgroundColor, color} = useTheme();

  return (
    <View>
      <Text style={{marginLeft: 10, marginTop: 10}}>
        <Text style={styles.subtitle1}>Monthly </Text>
        <Text style={styles.subtitle2}>Membership</Text>
      </Text>
      <Text style={{marginLeft: 10, marginTop: 10}}>
        <Text style={styles.priceHeading}>Price </Text> 100
      </Text>
      <View style={styles.containerRight}>
        <Image
          source={require('../../assets/TrampolinPark.jpg')}
          style={[styles.bgImg, {width: width - 80}]}
        />
        <View style={[styles.layer, {width: width - 80}]}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.monkey}
          />
        </View>
        <View style={[styles.bottom, {backgroundColor}]}>
          <View style={styles.titleWrapper}>
            <Text style={[styles.txt, {color, textAlign: 'center'}]}>
              Membership
            </Text>
          </View>
        </View>
        <Text style={styles.discountText}>Discount Text</Text>
      </View>
    </View>
  );
};

export default MembershipDetailsCollapsContent;

const styles = StyleSheet.create({
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
  containerRight: {
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    alignSelf: 'center',
    marginRight: 10,
  },
  bgImg: {
    height: 150,
    objectFit: 'cover',
  },
  layer: {
    height: 150,
    top: 0,
    backgroundColor: '#0009',
    alignItems: 'center',
    position: 'absolute',
  },
  monkey: {height: 80, objectFit: 'contain', marginTop: 30},
  bottom: {
    display: 'flex',
    flexDirection: 'row',
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
  txt: {fontSize: 15, fontWeight: '600'},
  discountText: {
    marginLeft: 10,
    marginTop: 10,
    width: 130,
  },
});
