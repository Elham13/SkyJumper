import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const MyDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <View style={styles.container}>
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      dropDownContainerStyle={styles.dropdown}
      
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    paddingLeft:25,
    paddingRight:25,
    paddingTop:15,
  },
  dropdownButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  dropdown: {
    width: '100%',
    position: 'absolute',
    backgroundColor: 'orange',
    top: 50,
  },
  option: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default MyDropdown;
