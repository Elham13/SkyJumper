import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../components/Home/Header';
import VerticalIconNameCard from '../components/Cards/VerticalIconNameCard';
import AdvertisementCard from '../components/Cards/AdvertisementCard';
import ImageAndTextCard from '../components/Cards/ImageAndTextCard';

type PropType = NativeStackScreenProps<RootStackParamList, 'Home'>;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Skyjumper Trampoline Park A happy place to visit',
    img: require('../assets/TrampolinPark.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    img: require('../assets/TrampolinPark.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img: require('../assets/TrampolinPark.jpg'),
  },
  {
    id: '2',
    title: 'Third Item',
    img: require('../assets/TrampolinPark.jpg'),
  },
  {
    id: '3',
    title: 'Third Item',
    img: require('../assets/TrampolinPark.jpg'),
  },
  {
    id: '4',
    title: 'Third Item',
    img: require('../assets/TrampolinPark.jpg'),
  },
];

const data2 = [
  {
    id: '1',
    text: 'Teamwork reaches new levels in our dodgeball courts. Creativity blossoms in the foam pit and healthy competition is practiced in the slam dunk zone.',
    img: require('../assets/kids-play.jpg'),
  },
  {
    id: '2',
    text: 'Teamwork reaches new levels in our dodgeball courts. Creativity blossoms in the foam pit and healthy competition is practiced in the slam dunk zone.',
    img: require('../assets/kids-play.jpg'),
  },
  {
    id: '3',
    text: 'Teamwork reaches new levels in our dodgeball courts. Creativity blossoms in the foam pit and healthy competition is practiced in the slam dunk zone.',
    img: require('../assets/kids-play.jpg'),
  },
  {
    id: '4',
    text: 'Teamwork reaches new levels in our dodgeball courts. Creativity blossoms in the foam pit and healthy competition is practiced in the slam dunk zone.',
    img: require('../assets/kids-play.jpg'),
  },
];

const Item = ({title}: {title: string}) => (
  <View
    style={{
      backgroundColor: 'orange',
      gap: 8,
      padding: 50,
      width: '100%',
    }}>
    <Text>{title}</Text>
  </View>
);

const HomeScreen = (props: PropType) => {
  const handleClick = () => {
    props.navigation.navigate('Activities');
  };

  return (
    <View>
      <Header />
      <ScrollView style={styles.homeContentsWraper}>
        <View style={styles.cardsWrapper}>
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/jumping-rope.png')}
            text="Trampoline Jump"
            onClick={handleClick}
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/jump-across.png')}
            text="Sky Jumper Carnival"
            onClick={handleClick}
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/crossed-pistols.png')}
            text="Sky Laser Tag"
            onClick={handleClick}
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/disc-icon.png')}
            text="GenZ The Teen Disco"
            onClick={handleClick}
          />
        </View>

        <View style={{...styles.cardsWrapper, marginTop: 12}}>
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/cake.png')}
            text="Birthday Party"
            onClick={handleClick}
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/party-popper.png')}
            text="Corporate Event"
            onClick={handleClick}
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/bus-school.png')}
            text="School Trips"
            onClick={handleClick}
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/celebrate-emoji.png')}
            text="Active Kitty Party"
            onClick={handleClick}
          />
        </View>

        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          style={styles.firstList}
          renderItem={({item}) => (
            <AdvertisementCard title={item.title} imgUrl={item.img} />
          )}
          ItemSeparatorComponent={() => <View style={{marginHorizontal: 10}} />}
        />

        <FlatList
          data={data2}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          style={{marginBottom: 60}}
          renderItem={({item}) => (
            <ImageAndTextCard
              text={item.text}
              imgUrl={item.img}
              onClick={() => console.log('Clicked')}
            />
          )}
          ItemSeparatorComponent={() => <View style={{marginHorizontal: 10}} />}
        />

        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text>Go to Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContentsWraper: {
    padding: 12,
  },
  cardsWrapper: {
    backgroundColor: '#F691311F',
    flexDirection: 'row',
    gap: 4,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  firstList: {
    marginVertical: 10,
  },
});
