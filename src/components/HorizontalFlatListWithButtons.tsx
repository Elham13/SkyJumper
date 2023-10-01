import {Button, Icon, Text} from '@ui-kitten/components';
import React, {useRef, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {StyleIcon, StyleImageBackground, StyleText, StyleTouchableOpacity, StyleView} from '../utils/TailwindAndUIkiteCombination';

export interface Item {
  id: string;
  text: string;
  img: any;
}

const HorizontalFlatListWithButtons = ({data}: Item[]) => {
  const flatListRef = useRef<FlatList<Item> | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleForward = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current?.scrollToIndex({index: currentIndex + 1});
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current?.scrollToIndex({index: currentIndex - 1});
    }
  };

  const renderItem = ({item}: {item: Item}) => (
    <StyleView
      level="1"
      className="relative w-96  justify-center items-center">
      <StyleImageBackground
        source={item.img}
        className="w-full h-full object-contain flex justify-center items-center"
      >
        
      {/* <StyleView className="w-full h-full absolute  opacity-25 flex justify-center items-center"></StyleView> */}
      <StyleView className="p-2 w-10/12 h-5/6 bg-orange-600 opacity-50 rounded-lg flex justify-center items-center" level="1">
      <StyleView className="p-2 absolute w-full h-full bg-white rounded-lg flex justify-center items-center" level="1">
        <StyleText category='c1'>{item.text}</StyleText>
      </StyleView>
      </StyleView>
      </StyleImageBackground>
    </StyleView>
  );

  return (
    <StyleView className="w-full h-60 flex flex-row justify-between items-center rounded-xl overflow-hidden ">
      {/* <StyleTouchableOpacity
        onPress={handleBack}
        disabled={currentIndex === 0}
        className="w-1/12">
        <StyleIcon
          className="w-8 h-8 text-gray-900"
          name="arrow-ios-back-outline"
        />
      </StyleTouchableOpacity> */}
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        initialScrollIndex={currentIndex}
        getItemStyleView={(_, index) => ({
          length: 200, // Set the width of each item
          offset: 200 * index,
          index,
        })}
      />
      {/* <StyleTouchableOpacity
        className="w-1/12"
        onPress={handleForward}
        disabled={currentIndex === data.length - 1}>
        <StyleIcon
          className="w-8 h-8 text-gray-100"
          name="arrow-ios-forward-outline"
        />
      </StyleTouchableOpacity> */}
    </StyleView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    margin: 5,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
});

export default HorizontalFlatListWithButtons;
