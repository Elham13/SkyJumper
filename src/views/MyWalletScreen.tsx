import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  StyleButton,
  StyleFlatList,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';
import PageHeader from '../components/PageHeader';
import WalletItem from '../components/Wallet/WalletItem';

export interface WalletProps {
  id: string;
  png: any;
  title: string;
  details: string;
}

const MyWalletScreen = () => {
  const [walletData, setWalletData] = useState<WalletProps[] | null>(null);

  const renderItem = ({item}: {item: WalletProps}) => (
    <WalletItem
      id={item.id}
      title={item.title}
      png={item.png}
      details={item.details}
    />
  );

  useEffect(() => {
    setWalletData([]);
    for (let i = 1; i <= 10; i++) {
      setWalletData(item => [
        ...item,
        {
          id: i.toString(),
          title: 'Total Rewards Won',
          details: 'Credits: 1000.00/-',
          img: null,
        },
      ]);
    }
  }, []);
  return (
    <SafeAreaView>
      <PageHeader title="My Wallet" />
      <StyleView className="w-full h-full p-2" level="1">
        <StyleView className="w-full h-[92%] " level="3">
          <StyleView className="w-full max-h-96">
            <StyleFlatList
              data={walletData}
              renderItem={renderItem}
              key={item => item.id}
            />
          </StyleView>
          <StyleButton className="mt-4">Refer and Earn</StyleButton>
        </StyleView>
      </StyleView>
    </SafeAreaView>
  );
};

export default MyWalletScreen;

const styles = StyleSheet.create({});
