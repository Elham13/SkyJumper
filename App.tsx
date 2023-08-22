import React from 'react';
import AppNavigator from './src/routes';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Tabs from './src/navigation/tabs'

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
