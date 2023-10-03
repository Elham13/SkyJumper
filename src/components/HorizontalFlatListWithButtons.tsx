import React, {useRef} from 'react';
import {FlatList, Dimensions} from 'react-native';
import {
  StyleImageBackground,
  StyleText,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';

const {height} = Dimensions.get('screen');

export interface Item {
  id: string;
  text: string;
  img: any;
}

type PropType = {
  data: Item[];
};

const HorizontalFlatListWithButtons = ({data}: PropType) => {
  const flatListRef = useRef<FlatList<Item> | null>(null);

  const renderItem = ({item}: {item: Item}) => (
    <StyleView level="1" className="relative w-96  justify-center items-center">
      <StyleImageBackground
        source={item.img}
        className="w-full h-full object-contain flex justify-center items-center">
        <StyleView
          className="p-2 w-10/12 h-5/6 bg-orange-600 opacity-50 rounded-lg flex justify-center items-center"
          level="1">
          <StyleView
            className="p-2 absolute w-full h-full bg-white rounded-lg flex justify-center items-center"
            level="1">
            <StyleText category="c1">{item.text}</StyleText>
          </StyleView>
        </StyleView>
      </StyleImageBackground>
    </StyleView>
  );

  return (
    <StyleView
      style={{height: height / 4}}
      className="w-full flex flex-row justify-between items-center rounded-xl overflow-hidden">
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        initialScrollIndex={0}
      />
    </StyleView>
  );
};

export default HorizontalFlatListWithButtons;
