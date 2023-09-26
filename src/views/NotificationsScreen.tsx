import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { StyleView } from '../utils/TailwindAndUIkiteCombination'
import PageHeader from '../components/PageHeader'

const NotificationsScreen = () => {
  return (
    <SafeAreaView>
        <StyleView className='w-full h-full' level='1'>
            <PageHeader title='Notifications' />
        </StyleView>
        <StyleView className='w-full h-[92%] bg-orange-400' level='2'></StyleView>
    </SafeAreaView>
  )
}

export default NotificationsScreen