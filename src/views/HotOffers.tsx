import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import React, { useEffect, useState } from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';
import { StyleFlatList, StyleView } from '../utils/TailwindAndUIkiteCombination';
import PageHeader from '../components/PageHeader';
import OffersItem from '../components/Offers/OffersItem';

export interface OffersProps {
  id: string
  title: string,
  details: string,
  tc: string
}

const HotOffers = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [offersData,setOffersData] = useState<OffersProps[]>([])
    const renderItem = ({item} : {item: OffersProps}) => <OffersItem id={item.id} details={item.details} title={item.title} tc={item.tc} />
    useEffect(() => {
        console.log('me');
        setOffersData([]);
        for (let i = 1; i <= 10; i++) {
          setOffersData((item) => [
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
      <StyleView className='w-full h-full' level='1'>
        <PageHeader title='Hot Offers' />
        <StyleView className='w-full h-[91%]' level='3'>
          <StyleFlatList className='p-2' data={offersData} renderItem={renderItem} keyExtractor={(item) => item.id} />
        </StyleView>
      </StyleView>
    </SafeAreaView>
  );
};

export default HotOffers;
