import React from 'react';
import ThemeProvider from './ThemProvider';
import AuthProvider from './AuthProvider';
import AppInfoProvider from './AppInfoProvider';
import {NavigationContainer} from '@react-navigation/native';

type PropType = {children: React.ReactElement};

const Providers = ({children}: PropType) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppInfoProvider>
          <NavigationContainer>{children}</NavigationContainer>
        </AppInfoProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;
