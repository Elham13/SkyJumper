import {SafeAreaView, StyleSheet, TouchableOpacity,ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {Text} from '@ui-kitten/components';
import {
  StyleAvatar,
  StyleButton,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';
import ProfileForm from '../components/profile/ProfileForm';
import {useNavigation} from '@react-navigation/native';
import PageHeader from '../components/PageHeader';

export interface ProfileFormDataProps {
  fullname: string;
  dateOfBrith: Date;
  phone: string;
  email: string;
  address: string;
}
const MyProfileScreen = ({}) => {
  const navigation = useNavigation();
  const [editable, setEditable] = useState<Boolean>(false);
  const [formData, setFormData] = useState<ProfileFormDataProps>({
    fullname: 'Muzamil shah Quraishi',
    phone: '9515312908',
    dateOfBrith: new Date(),
    email: 'muzamil.shah@gmail.com',
    address:
      'j2/42, krishnakeval nagar, kondhwa, pune, 110043, mahrashtra, india',
  });
  return (
    <SafeAreaView>
      <StyleView className="w-full h-full" level="3">
        <PageHeader title='Profile' />
        <StyleView
          className="w-full h-32 flex justify-center items-center p-3"
          level="3">
          <StyleView className="w-full h-full shadow-sm rounded-3xl bg-orange-600 overflow-hidden">
            {/* blob div start */}
            <StyleView className="absolute -top-20 -left-10 w-40 h-40  rounded-full bg-white opacity-10"></StyleView>
            <StyleView className="absolute -bottom-20 -right-10 w-40 h-40  rounded-full bg-white opacity-25">
            <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/happyMonkey.png')}
    />
            </StyleView>
            {/* blob div end */}
            <StyleView className="w-full h-full z-50 flex flex-row justify-start items-center p-3 bg-transparent">
              <StyleView className="w-16 h-16 flex justify-center items-center rounded-full bg-yellow-100">
                <StyleAvatar source={require('../assets/logo.png')} />
              </StyleView>
              <StyleView className="flex justify-center items-start bg-transparent px-2">
                <Text category="h6" status="control">
                  Muzamil Shah Quraishi
                </Text>
                <Text category="c2" status="control">
                  0784608994
                </Text>
              </StyleView>
            </StyleView>
            {/* show arrow */}
            {/* <StyleView className="absolute z-50 bottom-2 right-2 flex justify-center items-center w-6 h-6 border border-gray-50  rounded-full bg-transparent">
              <Icon
                name="arrow-forward-outline"
                fill="#fafafa"
                className='w-5 h-5'
              />
            </StyleView> */}
          </StyleView>
        </StyleView>
        <StyleView
          className="w-full h-96  flex justify-center items-center p-3"
          level="3">
          <StyleView
            className="w-full h-full shadow-sm rounded-2xl p-3 flex justify-start items-center"
            level="1">
            <StyleView
              level="1"
              className="w-full h-10 flex flex-row justify-between items-center">
              <Text category="label" status="basic" appearance="hint">
                PERSONAL DETAILS
              </Text>
              <StyleButton
                onPress={() => setEditable(p => !p)}
                appearance="ghost"
                className="p-0 m-0"
                size="tiny">
                {editable ? 'save' : 'edit'}
              </StyleButton>
            </StyleView>
            <ProfileForm
              formData={formData}
              edit={editable}
              setFormData={setFormData}
            />
          </StyleView>
        </StyleView>
        <StyleView
          className="w-full h-40 flex justify-center items-center p-3"
          level="3">
          <StyleView
            className="w-full h-full rounded-2xl p-2 flex flex-row justify-between items-center"
            level="3">
            <StyleView
              className="w-full h-10 flex justify-center items-center self-end"
              level="3">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Home')
                }
                style={styles.logout}>
                <Text category="label" appearance="hint">
                  SIGN OUT
                </Text>
                <Text category="c1" appearance="hint">
                  Version 1.0.0
                </Text>
              </TouchableOpacity>
            </StyleView>
          </StyleView>
        </StyleView>
      </StyleView>
    </SafeAreaView>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  logout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    objectFit: 'cover',
    marginVertical: 3
    
  },
});
