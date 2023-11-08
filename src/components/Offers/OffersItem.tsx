import React from 'react';
import {StyleText, StyleView} from '../../utils/TailwindAndUIkiteCombination';
import {OffersProps} from '../../views/HotOffers';
import {useTheme} from '../../contexts/ThemProvider';

const OffersItem = ({id, title, details, tc}: OffersProps) => {
  const {bgLight} = useTheme();

  return (
    <StyleView
      className="relative w-full h-28 overflow-hidden rounded-lg shadow-lg p-2 mb-3 flex justify-center items-start"
      level="1"
      style={{backgroundColor: bgLight}}>
      <StyleView className="absolute -right-10 -top-20 w-60 h-60 opacity-25 bg-orange-600 rounded-full"></StyleView>
      <StyleText category="h6">{title}</StyleText>
      <StyleText category="s1">{details}</StyleText>
      <StyleText category="s1">T&C :{tc}</StyleText>
    </StyleView>
  );
};

export default OffersItem;
