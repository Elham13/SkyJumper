import {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {Badge} from '@rneui/themed';
import {Picker} from '@react-native-picker/picker';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StyleSelect} from '../../utils/TailwindAndUIkiteCombination';
import {IndexPath, SelectItem} from '@ui-kitten/components';

const Header = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = React.useState<
    IndexPath | IndexPath[]
  >(new IndexPath(0));

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={openDrawer}>
        <Image
          style={styles.menuIcon}
          source={require('../../assets/icons/menu.png')}
        />
      </TouchableOpacity>
      {/* <View style={styles.menuWraper}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View> */}
      <StyleSelect
        className="w-40 border-non"
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title="Option 1" />
        <SelectItem title="Option 2" />
        <SelectItem title="Option 3" />
      </StyleSelect>
      <TouchableOpacity
        onPress={() => navigation.navigate('Notifications')}
        style={styles.notificationBtn}>
        <Icon name="bells" style={styles.notiIcon} />
        <Badge
          status="warning"
          containerStyle={{
            position: 'absolute',
            width: 50,
            height: 50,
            top: 4,
            right: -10,
          }}
          value="20"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    height: 50,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  menuIcon: {},
  menuWraper: {minWidth: 120},
  menu: {
    borderWidth: 0,
  },
  notiIcon: {
    color: 'orange',
    fontSize: 26,
  },
  notificationBtn: {
    height: '100%',
    justifyContent: 'center',
    width: 36,
  },
});
