import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import {IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import Providers from './src/contexts/Providers';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <Providers>
          <DrawerNavigation />
        </Providers>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
