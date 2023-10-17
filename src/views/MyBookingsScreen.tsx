import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StyleFlatList, StyleView} from '../utils/TailwindAndUIkiteCombination';
import PageHeader from '../components/PageHeader';
import BookingItem from '../components/Bookings/BookingItem';

export interface BookingProps {
  id: string;
  name: string;
  time: Date;
  status: string;
  price: Number;
}

const MyBookingsScreen = () => {
  const [bookingData, setBookingData] = useState<BookingProps[] | null>(null);
  const renderItem = ({item}: {item: BookingProps}) => (
    <BookingItem
      id={item.id}
      status={item.status}
      name={item.name}
      price={item.price}
      time={item.time}
    />
  );

  useEffect(() => {
    setBookingData([]);
    for (let i = 1; i <= 10; i++) {
      setBookingData(item => [
        ...item,
        {
          id: i.toString(),
          name: 'Monthly Membership',
          price: 2000,
          status: i % 2 === 0 ? 'Book' : 'Completed',
          time: new Date(),
        },
      ]);
    }
  }, []);

  return (
    <SafeAreaView>
      <PageHeader title="My Bookings" />
      <StyleView className="ww-full h-full p-2" level="1">
        <StyleView className="w-full h-[92%] p-2" level="2">
          <StyleFlatList
            data={bookingData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </StyleView>
      </StyleView>
    </SafeAreaView>
  );
};

export default MyBookingsScreen;

const styles = StyleSheet.create({});
