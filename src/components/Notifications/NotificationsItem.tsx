import { View, Text } from 'react-native'
import React from 'react'
import { StyleText, StyleView } from '../../utils/TailwindAndUIkiteCombination'
import { NotificationsProps } from '../../views/NotificationsScreen'

const NotificationsItem = ({id,title,details}: NotificationsProps) => {
  return (
    <StyleView className="w-full h-auto bg-orange-400 px-4 py-8 rounded-xl mb-2">
    <StyleText category='h6' status='control'>
      Sky Jumper Elevate birthday fun -
    </StyleText>
    <StyleText category='s1' status='control'>The best kids birthday party It
      is an adventure-packed wonderland where dreams take flight!
    </StyleText>
  </StyleView>
  )
}

export default NotificationsItem