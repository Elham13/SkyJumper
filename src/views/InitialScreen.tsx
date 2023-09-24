import React from 'react';
import AuthWrapper from '../components/Auth/AuthWrapper';
import AuthInitPage from '../components/Auth/AuthInitPage';
import {useNavigation} from '@react-navigation/native';

const InitialScreen = () => {
  const navigation = useNavigation();
  return (
    <AuthWrapper>
      <AuthInitPage onClick={screen => navigation.navigate(screen as never)} />
    </AuthWrapper>
  );
};

export default InitialScreen;
