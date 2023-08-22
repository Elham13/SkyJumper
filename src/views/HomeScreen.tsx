import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../components/Home/Header';
import VerticalIconNameCard from '../components/Cards/VerticalIconNameCard';
import AdvertisementCard from '../components/Cards/AdvertisementCard';
import ImageAndTextCard from '../components/Cards/ImageAndTextCard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Register from '../components/Auth/Register';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

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
const Tab = createBottomTabNavigator();

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
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Screen1"
      screenOptions={{tabBarActiveTintColor :"#e91e63"}}
      sceneContainerStyle={{
        height: 100,
        paddingBottom: 50,
        paddingTop: 0,
        backgroundColor: 'rgba(34,36,40,1)',
        position: 'absolute',
        borderTopWidth: 0,
            }}
      // tabBarOptions={{
      //   activeTintColor: '#e91e63',
      // }}
    >
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={'rgba(34,36,40,1)'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="man" color={'rgba(34,36,40,1)'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={'rgba(34,36,40,1)'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const HomeScreen = () => {
// const HomeScreen = (props: PropType) => {
  return (
    <View>
      <Header />
      <ScrollView style={styles.homeContentsWraper}>
        <View style={styles.cardsWrapper}>
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/jumping-rope.png')}
            text="Trampoline Jump"
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/jump-across.png')}
            text="Sky Jumper Carnival"
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/crossed-pistols.png')}
            text="Sky Laser Tag"
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/disc-icon.png')}
            text="GenZ The Teen Disco"
          />
        </View>

        <View style={{...styles.cardsWrapper, marginTop: 12}}>
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/cake.png')}
            text="Birthday Party"
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/party-popper.png')}
            text="Corporate Event"
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/bus-school.png')}
            text="School Trips"
          />
          <VerticalIconNameCard
            iconUrl={require('../assets/icons/celebrate-emoji.png')}
            text="Active Kitty Party"
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

        {/* <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
          <Text>Go to Login</Text>
        </TouchableOpacity> */}
{/*       
        <Tab.Navigator 
          screenOptions = {({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;
              if (route.name === 'Screen1') {
                iconName = 'home';
              } else if (route.name === 'Screen2') {
                iconName = 'man';
              } else {
                iconName = 'settings';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              height: 100,
              paddingBottom: 50,
              paddingTop: 0,
              backgroundColor: 'rgba(34,36,40,1)',
              position: 'absolute',
              borderTopWidth: 0,
          },
          })}>
        <Tab.Screen name="Screen1" component={Screen1} />
        <Tab.Screen name="Screen2" component={Screen2} />
        <Tab.Screen name="Screen3" component={Screen3} />
        </Tab.Navigator> */}

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
