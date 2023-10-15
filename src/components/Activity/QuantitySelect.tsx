import React from 'react';
import {
  StyleIcon,
  StyleText,
  StyleTouchableOpacity,
  StyleView,
} from '../../utils/TailwindAndUIkiteCombination';

type PropType = {
  title: string;
  price: number;
  quantity: number;
  onChange: (action: 'increase' | 'decrease') => void;
};

const QuantitySelect = ({title, price, quantity, onChange}: PropType) => {
  return (
    <StyleView className="bg-transparent flex-row items-center justify-between">
      <StyleView className="bg-transparent">
        <StyleText className="font-bold">{title}</StyleText>
        <StyleText className="text-sm">Rs {price} /-</StyleText>
      </StyleView>
      <StyleView className="flex-row bg-transparent">
        <StyleTouchableOpacity
          onPress={() => onChange('decrease')}
          className="w-10 h-10 p-2 rounded-l-lg bg-gray-100"
          disabled={quantity < 1}>
          <StyleIcon name="minus-outline" className="w-6 h-6 text-gray-100" />
        </StyleTouchableOpacity>
        <StyleView className="w-16 h-10 justify-center items-center" level="1">
          <StyleText category="label">{quantity}</StyleText>
        </StyleView>
        <StyleTouchableOpacity
          onPress={() => onChange('increase')}
          className="w-10 h-10 p-2 rounded-r-lg bg-gray-100">
          <StyleIcon name="plus-outline" className="w-6 h-6 text-gray-100" />
        </StyleTouchableOpacity>
      </StyleView>
    </StyleView>
  );
};

export default QuantitySelect;
