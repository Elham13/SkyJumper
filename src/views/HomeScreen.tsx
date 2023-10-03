import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Home/Header';
import VerticalIconNameCard from '../components/Cards/VerticalIconNameCard';
import {useNavigation} from '@react-navigation/native';
import {ViewPagerLazyLoadingShowcase} from '../components/ImageCarousel';
import HorizontalFlatListWithButtons from '../components/HorizontalFlatListWithButtons';

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

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('Activities' as never);
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

        <ViewPagerLazyLoadingShowcase images={DATA} />
        <HorizontalFlatListWithButtons data={data2} />
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
