import {Modal, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions,SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import PageHeader from '../components/PageHeader';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native';
import MyDropdown from '../components/Home/DropDown';
import AdvertisementCard from '../components/Cards/AdvertisementCard';
import Collapsible from '../components/Cards/Collapsable';

const MembershipDetails = () => {
const width=Dimensions.get("screen").width

  return (
    <View style={{flex: 1}}>
      <PageHeader title="Membership Details" />
      <ScrollView>
      <SafeAreaView style={styles.container}>
      <Collapsible />
    </SafeAreaView>
        {/* <View style={styles.container}> */}
        {/* <AdvertisementCard title={'title'} imgUrl={require('../assets/TrampolinPark.jpg')} /> */}
        {/* <View style={styles.containerRight}>
          <Image
            source={require('../assets/TrampolinPark.jpg')}
            style={styles.bgImg}
          />
          <View style={styles.layer}>
            <Image
              source={require('../assets/logo.png')}
              style={styles.monkey}
            />
          </View>
          <View style={styles.bottom}>
            <View style={styles.titleWrapper}>
              <Text
                style={{...styles.txt, color: 'black', textAlign: 'center'}}>
                Monthly Membership
              </Text>
            </View>
          </View>
        </View> */}
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

export default MembershipDetails;

const styles = StyleSheet.create({
  // container: {
  //   alignSelf: 'center',
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRight: {
    marginTop:10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    alignSelf: 'center',
    marginRight: 10,
  },
  layer: {
    height: 70,
    width: 150,
    top: 0,
    left: 0,
    backgroundColor: '#0009',
    alignItems: 'center',
    position: 'absolute',
  },
  bgImg: {
    height: 70,
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
