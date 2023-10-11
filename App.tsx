import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/DrawerNavigation';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {myTheme} from './custom-theme';
import AuthProvider from './src/contexts/AuthProvider';
import AppInfoProvider from './src/contexts/AppInfoProvider';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{...eva.light, ...myTheme}}>
          <AuthProvider>
            <AppInfoProvider>
              <NavigationContainer>
                <DrawerNavigation />
              </NavigationContainer>
            </AppInfoProvider>
          </AuthProvider>
        </ApplicationProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
