import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {Text} from 'react-native';
import {MainStack} from './src/navigation/StackNavigation';


function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
        {/* <Text>Hellllllo</Text> */}
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
