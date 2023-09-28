import { View, Text } from 'react-native'
import React from 'react'
import { StyleImage, StyleText, StyleView } from '../../utils/TailwindAndUIkiteCombination'
import PersonSelection from './PersonSelection'
import { ProductSelectionProps } from './ActivityDetailsCollapseContents'

type Props = {
    product: any
    data: ProductSelectionProps,
    handleChange: any
}

const ProductsList = ({product,data,handleChange}:Props) => {
  return (
    <StyleView className='w-full bg-transparent p-2 items-start' >
        <StyleView className='w-full bg-transparent space-x-2 flex flex-row items-center justify-between'>
            <StyleView className='w-7/12 h-20 justify-center items-start bg-transparent'>
                <StyleText category='label'>{product?.name}</StyleText>
                <StyleText category='c1'>{product?.details}</StyleText>
            </StyleView>
            <StyleView className='w-4/12 h-20 bg-transparent flex flex-row justify-center p-1 items-center'>
                <StyleImage className='w-full h-16 object-contain' source={require('../../assets/happyMonkey.png')} />
            </StyleView>
        </StyleView>
        <PersonSelection data={data} handleChange={handleChange} />
    </StyleView>
  )
}

export default ProductsList