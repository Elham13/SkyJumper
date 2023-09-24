import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ApplicationProvider {...eva} theme={eva.light}>
          <NavigationContainer>
            <DrawerNavigation />
          </NavigationContainer>
        </ApplicationProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
