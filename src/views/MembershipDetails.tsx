import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import PageHeader from '../components/PageHeader';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native';
import MyDropdown from '../components/Home/DropDown';

const MembershipDetails = () => {
  return (
    <View style={{flex: 1}}>
      <PageHeader title="Membership Details" />
      <MyDropdown/>
      <ScrollView>
      </ScrollView>
    </View>
  );
};

export default MembershipDetails;

const style = StyleSheet.create({


});
