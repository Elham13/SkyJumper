import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Home/Header';
import VerticalIconNameCard from '../components/Cards/VerticalIconNameCard';
import {ViewPagerLazyLoadingShowcase} from '../components/ImageCarousel';
import HorizontalFlatListWithButtons from '../components/HorizontalFlatListWithButtons';
import {useAppInfo} from '../contexts/AppInfoProvider';
import {activityList} from './ActivitiesScreen';
import {useTheme} from '../contexts/ThemProvider';

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

export const trampolineMenus1 = [
  {
    title: 'Trampoline Jump',
    image: require('../assets/icons/jumping-rope.png'),
  },
  {
    title: 'Sky Jumper Carnival',
    image: require('../assets/icons/jump-across.png'),
  },
  {
    title: 'Sky Laser Tag',
    image: require('../assets/icons/crossed-pistols.png'),
  },
  {
    title: 'GenZ The Teen Disco',
    image: require('../assets/icons/disc-icon.png'),
  },
];

export const trampolineMenus2 = [
  {
    title: 'Birthday Party',
    image: require('../assets/icons/cake.png'),
  },
  {
    title: 'Corporate Event',
    image: require('../assets/icons/party-popper.png'),
  },
  {
    title: 'School Trips',
    image: require('../assets/icons/bus-school.png'),
  },
  {
    title: 'Active Kitty Party',
    image: require('../assets/icons/celebrate-emoji.png'),
  },
];

export const goBananaMenus = [
  {
    title: 'Trampoline Jump',
    image: require('../assets/icons/jumping-rope.png'),
  },
  {
    title: 'Birthday Party',
    image: require('../assets/icons/cake.png'),
  },
  {
    title: 'School Trips',
    image: require('../assets/icons/bus-school.png'),
  },
];

type PropTypes = {navigation: any};

const HomeScreen = ({navigation}: PropTypes) => {
  const {bgLight} = useTheme();
  const {appInfo, setAppInfo} = useAppInfo();

  const handleClick = (selectedActivity: string) => {
    const foundActivity = activityList.find(
      el => el.title === selectedActivity,
    );
    if (foundActivity)
      setAppInfo(prev => ({...prev, activities: [foundActivity]}));
    navigation.navigate('Activities');
  };

  return (
    <View>
      <Header />
      <ScrollView style={styles.homeContentsWraper}>
        {appInfo.selectedScreen === 'Trampoline' ? (
          <>
            <View style={[styles.cardsWrapper, {backgroundColor: bgLight}]}>
              {trampolineMenus1?.map((menu, index) => (
                <VerticalIconNameCard
                  key={index}
                  iconUrl={menu.image}
                  text={menu.title}
                  onClick={() => handleClick(menu.title)}
                />
              ))}
            </View>

            <View
              style={{
                ...styles.cardsWrapper,
                marginTop: 12,
                backgroundColor: bgLight,
              }}>
              {trampolineMenus2?.map((menu, index) => (
                <VerticalIconNameCard
                  key={index}
                  iconUrl={menu.image}
                  text={menu.title}
                  onClick={() => handleClick(menu.title)}
                />
              ))}
            </View>
          </>
        ) : (
          <View style={[styles.cardsWrapper, {backgroundColor: bgLight}]}>
            {goBananaMenus?.map((menu, index) => (
              <VerticalIconNameCard
                key={index}
                iconUrl={menu.image}
                text={menu.title}
                onClick={() => handleClick(menu.title)}
              />
            ))}
          </View>
        )}

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
    flexDirection: 'row',
    gap: 4,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  firstList: {
    marginVertical: 10,
  },
});
