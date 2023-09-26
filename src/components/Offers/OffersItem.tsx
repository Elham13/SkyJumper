import React from 'react'
import { StyleText, StyleView } from '../../utils/TailwindAndUIkiteCombination'
import { OffersProps } from '../../views/HotOffers'

const OffersItem = ({id,title,details,tc}:OffersProps) => {
  return (
    <StyleView className='relative w-full h-28 overflow-hidden rounded-lg shadow-lg p-2 mb-3 bg-orange-200 flex justify-center items-start' level='1'>
        <StyleView className='absolute -right-10 -top-20 w-60 h-60 opacity-25 bg-orange-600 rounded-full'></StyleView>
      <StyleText category='h6'>{title}</StyleText>
      <StyleText category='s1'>{details}</StyleText>
      <StyleText category='s1'>T&C :{tc}</StyleText>
    </StyleView>
  )
}

export default OffersItem