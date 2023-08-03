import React from 'react';
import AuthWrapper from '../components/Auth/AuthWrapper';
import AuthInitPage from '../components/Auth/AuthInitPage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../routes';

type PropType = NativeStackScreenProps<RootStackParamList, 'InitialScreen'>;

const InitialScreen = ({navigation}: PropType) => {
  return (
    <AuthWrapper>
      <AuthInitPage onClick={screen => navigation.navigate(screen)} />
    </AuthWrapper>
  );
};

export default InitialScreen;
