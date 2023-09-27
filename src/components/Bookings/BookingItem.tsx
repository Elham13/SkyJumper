import { View, Text } from 'react-native'
import React from 'react'
import { StyleText, StyleView } from '../../utils/TailwindAndUIkiteCombination'
import { BookingProps } from '../../views/MyBookingsScreen'
import moment from 'moment'

const BookingItem = ({id,name,price,time,status}: BookingProps) => {
  return (
    <StyleView className='w-full h-28 mb-1 bg-orange-100 rounded-md p-3 flex flex-row justify-between items-center'>
      <StyleView className='justify-center items-start space-y-2 bg-transparent'>
        <StyleText category='s2'>{name}</StyleText>
        <StyleText category='label'>Price: {price.toString()}</StyleText>
      </StyleView>
      <StyleView className='justify-center items-end space-y-2 bg-transparent'>
        <StyleText category='label' status={status === 'Book' ? 'success' : 'danger'}>{status}</StyleText>
        <StyleText category='c1' >{moment(time).fromNow()}</StyleText>
      </StyleView>
    </StyleView>
  )
}

export default BookingItem