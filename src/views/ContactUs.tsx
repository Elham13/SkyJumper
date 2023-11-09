import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  StyleButton,
  StyleImage,
  StyleInput,
  StyleText,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';
import PageHeader from '../components/PageHeader';
import {useTheme} from '../contexts/ThemProvider';

interface ContactUsDataProps {
  name: string;
  email: string;
  message: string;
}
const ContactUs = () => {
  const {bgLighter, backgroundColor, color, bgLight} = useTheme();
  const [contactFormData, setContactFormData] = useState<ContactUsDataProps>({
    name: '',
    email: '',
    message: '',
  });
  return (
    <SafeAreaView>
      <PageHeader title="Contact us" />
      <StyleView
        className="justify-center items-center space-y-9 p-2"
        style={{backgroundColor: bgLighter}}>
        <StyleView
          className="w-full h-40 rounded-3xl p-2 justify-center items-center"
          style={{backgroundColor}}>
          <StyleText category="h5" style={{color}}>
            We are here for support
          </StyleText>
          <StyleText category="s1" style={{color}}>
            email : skyjumping@gmail.com
          </StyleText>
          <StyleText category="s1" style={{color}}>
            Phone : +91 9512222222 | 9511111111
          </StyleText>
        </StyleView>
        <StyleView
          className="relative w-11/12 h-96 space-y-4 overflow-hidden rounded-xl p-2 flex justify-end items-center px-6"
          level="1">
          <StyleInput
            className="z-10"
            onChangeText={nextValue =>
              setContactFormData(pre => ({...pre, name: nextValue}))
            }
            value={contactFormData.name}
            label={'Name'}
            placeholder="Enter your Name"
          />
          <StyleInput
            className="z-10"
            onChangeText={nextValue =>
              setContactFormData(pre => ({...pre, email: nextValue}))
            }
            value={contactFormData.email}
            label={'email'}
            placeholder="Enter your Name"
          />
          <StyleInput
            className="z-10"
            onChangeText={nextValue =>
              setContactFormData(pre => ({...pre, message: nextValue}))
            }
            value={contactFormData.message}
            label={'Message'}
            placeholder="Write your message here..."
          />
          <StyleButton className="z-10">Submit</StyleButton>
          <StyleView
            className="w-40 h-40 rounded-full justify-end items-center overflow-hidden  absolute -top-24 translate-x-1 z-0"
            style={{backgroundColor: bgLight}}>
            <StyleImage
              className="w-20 h-20 "
              source={require('./../assets/monkey.png')}
            />
          </StyleView>
        </StyleView>
      </StyleView>
    </SafeAreaView>
  );
};

export default ContactUs;

const styles = StyleSheet.create({});
