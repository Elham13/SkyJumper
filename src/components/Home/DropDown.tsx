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
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

  },
  dropdownButton: {
    paddingRight:10,
    flexDirection: 'row',
    backgroundColor: 'red',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  dropdown: {
    width: '80%',
    position: 'absolute',
    backgroundColor: 'orange',
    top: 52,
  },
  option: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default MyDropdown;
