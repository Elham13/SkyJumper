import {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {Badge} from '@rneui/themed';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <Image
          style={styles.menuIcon}
          source={require('../../assets/icons/menu.png')}
        />
      </TouchableOpacity>
      <View style={styles.menuWraper}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.menu}
        />
      </View>
      <TouchableOpacity style={styles.notificationBtn}>
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
  menuWraper: {
    width: 160,
  },
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
