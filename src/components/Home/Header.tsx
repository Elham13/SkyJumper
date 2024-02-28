import {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {Badge} from '@rneui/themed';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {StyleSelect} from '../../utils/TailwindAndUIkiteCombination';
import {IndexPath, SelectItem} from '@ui-kitten/components';
import {useTheme} from '../../contexts/ThemProvider';
import Dropdown from 'react-native-input-select';

const Header = () => {
  const navigation = useNavigation();
  const {backgroundColor} = useTheme();
  const [value, setValue] = useState('Delhi');
  const [items, setItems] = useState([
    {label: 'Delhi', value: 'delhi'},
    {label: 'Chennai', value: 'Chennai'},
    {label: 'Bangalore', value: 'Bangalore'},
  ]);

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
      <Dropdown
        placeholder="Select a city"
        options={items}
        placeholderStyle={{fontSize: 14, color: '#aaa'}}
        dropdownIconStyle={{padding: 0}}
        onValueChange={(value: string) => setValue(value)}
        primaryColor={'green'}
        selectedValue={value}
        dropdownStyle={{backgroundColor: 'transparent', borderWidth: 0}}
        dropdownContainerStyle={{
          flex: 1,
          marginTop: 22,
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Notifications' as never)}
        style={styles.notificationBtn}>
        <Icon
          name="bells"
          style={[styles.notiIcon, {color: backgroundColor}]}
        />
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
  // menuWraper: {minWidth: 120},
  menu: {
    borderWidth: 0,
  },
  notiIcon: {
    fontSize: 26,
  },
  notificationBtn: {
    height: '100%',
    justifyContent: 'center',
    width: 36,
  },
});
