import {View, Text, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import {StyleFlatList, StyleText, StyleView} from '../utils/TailwindAndUIkiteCombination';
import PageHeader from '../components/PageHeader';
import NotificationsItem from '../components/Notifications/NotificationsItem';

export interface NotificationsProps {
    id: string,
    title: string
    details: string
}

const NotificationsScreen = () => {
    const [notificationData,setNotificationsData] = useState<NotificationsProps[] | null>(null)
    const renderItem = ({item} : {item: NotificationsProps}) => <NotificationsItem id={item.id} title={item.title} details={item.details} />

    useEffect(() => {
        console.log('me');
        setNotificationsData([]);
        for (let i = 1; i <= 10; i++) {
          setNotificationsData((item) => [
            ...item,
            {
              id: i.toString(),
              title: 'If you dare we are here',
              details: 'FLAT 30% off for people above 40 years of age',
              tc: 'Child has to be below 5 years'
            },
          ]);
        }
      }, []);
  return (
    <SafeAreaView>
      <StyleView className="w-full h-full" level="1">
        <PageHeader title="Notifications" />
        <StyleView className="w-full h-[92%] p-2 space-y-2 " level="2">
            <StyleFlatList className='px-2' data={notificationData} renderItem={renderItem} keyExtractor={(item) => item.id}/>
          
        </StyleView>
      </StyleView>
    </SafeAreaView>
  );
};

export default NotificationsScreen;
