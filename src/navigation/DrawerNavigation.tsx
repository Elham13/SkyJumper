import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ActivitiesScreen from '../views/ActivitiesScreen';
import Tabs from './tabs';
import HomeScreen from '../views/HomeScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    // const navigation = useNavigation();
  return (
    <Drawer.Navigator initialRouteName="HomePage">
      <Drawer.Screen name="Screen3" component={HomeScreen} />
      <Drawer.Screen name="Activities" component={ActivitiesScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
