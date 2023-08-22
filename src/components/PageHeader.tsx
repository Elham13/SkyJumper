import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type PropType = {
  title: string;
};

const PageHeader = ({title}: PropType) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/icons/go-back-icon.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{flex: 1}}></View>
      <Image source={require('../assets/monkey.png')} style={styles.monkey} />
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 18,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    // shadowColor: 'gray',
    // shadowOffset: {width: 10, height: 10},
  },
  iconWrapper: {
    flex: 1,
    paddingLeft: 8,
  },
  icon: {
    width: 30,
    height: 30,
    objectFit: 'contain',
  },
  title: {
    fontWeight: '700',
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
  },
  monkey: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: 70,
    width: 70,
    objectFit: 'contain',
  },
});
