import {View, Text} from 'react-native';
import React from 'react';
import {
  StyleIcon,
  StyleImageBackground,
  StyleText,
  StyleView,
} from '../../utils/TailwindAndUIkiteCombination';
import {WalletProps} from '../../views/MyWalletScreen';
import { Icon } from '@ui-kitten/components';

const WalletItem = ({id, title, details, png}: WalletProps) => {
  return (
    <StyleView
      level="1"
      className="w-full h-32 flex flex-row justify-between items-center bg-orange-100 rounded-lg shadow-md mb-2 p-2">
      <StyleView
        className=" bg-transparent flex justify-start items-start">
        <StyleText category="h6">{title}</StyleText>
        <StyleView className="bg-transparent h-8 flex-row justify-between items-center space-x-2">
          <Icon  name="gift-outline" className='w-10 h-10 text-black'/>
          <StyleText category="s2" appearance="hint">
            {details}
          </StyleText>
        </StyleView>
      </StyleView>
        <StyleView className=' w-40 h-24 bg-transparent' >
            <StyleImageBackground className='w-full h-full' source={require('../../assets/happyMonkey.png')} />
        </StyleView>
    </StyleView>
  );
};

export default WalletItem;
