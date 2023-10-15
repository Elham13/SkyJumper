import React from 'react';
import {
  StyleImage,
  StyleText,
  StyleView,
} from '../../utils/TailwindAndUIkiteCombination';

type Props = {
  product: any;
};

const ProductsList = ({product}: Props) => {
  return (
    <StyleView className="w-full bg-transparent p-2 items-start">
      <StyleView className="w-full bg-transparent space-x-2 flex flex-row items-center justify-between">
        <StyleView className="w-7/12 h-20 justify-center items-start bg-transparent">
          <StyleText category="label">{product?.name}</StyleText>
          <StyleText category="c1">{product?.details}</StyleText>
        </StyleView>
        <StyleView className="w-4/12 h-20 bg-transparent flex flex-row justify-center p-1 items-center">
          <StyleImage
            className="w-full h-16 object-contain"
            source={require('../../assets/happyMonkey.png')}
          />
        </StyleView>
      </StyleView>
    </StyleView>
  );
};

export default ProductsList;
