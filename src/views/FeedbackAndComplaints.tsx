import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import PageHeader from '../components/PageHeader';
import {
  StyleButton,
  StyleImage,
  StyleInput,
  StyleText,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';

const FeedbackAndComplaints = () => {
  const [values, setValues] = useState({
    name: '',
    age: '',
    contactNo: '',
    feedback: '',
  });

  return (
    <StyleView className="flex-1">
      <PageHeader title="Feedback and Complaint" />
      <StyleView className="w-full h-[92%] bg-orange-100 justify-center items-center space-y-9 p-2">
        <StyleView className="w-full h-40 bg-orange-500 rounded-3xl p-2 justify-center items-center">
          <StyleText category="h5" status="control">
            We are here for support
          </StyleText>
          <StyleText category="s1" status="control">
            email : skyjumping@gmail.com
          </StyleText>
          <StyleText category="s1" status="control">
            Phone : +91 9512222222 | 9511111111
          </StyleText>
        </StyleView>
        <StyleView
          className="relative w-11/12 space-y-4 overflow-hidden rounded-xl p-2 flex justify-end items-center px-6"
          level="1">
          <StyleInput
            className="z-10 mt-20"
            onChangeText={nextValue =>
              setValues(pre => ({...pre, name: nextValue}))
            }
            value={values.name}
            label={'Name'}
            placeholder="Enter your Name"
          />
          <StyleInput
            className="z-10"
            onChangeText={nextValue =>
              setValues(pre => ({...pre, age: nextValue}))
            }
            value={values.age}
            label={'Age'}
            placeholder="Enter your age"
          />
          <StyleInput
            className="z-10"
            onChangeText={nextValue =>
              setValues(pre => ({...pre, contactNo: nextValue}))
            }
            value={values.contactNo}
            label={'Contact number'}
            placeholder="Enter your contact number"
          />
          <StyleInput
            className="z-10"
            onChangeText={nextValue =>
              setValues(pre => ({...pre, feedback: nextValue}))
            }
            value={values.feedback}
            label={'Feedback'}
            placeholder="Enter your Feedback"
          />
          <StyleButton className="z-10">Submit</StyleButton>
          <StyleView className="w-40 h-40 rounded-full justify-end items-center overflow-hidden  absolute -top-24 translate-x-1 bg-orange-100 z-0">
            <StyleImage
              className="w-20 h-20 "
              source={require('./../assets/monkey.png')}
            />
          </StyleView>
        </StyleView>
      </StyleView>
    </StyleView>
  );
};

export default FeedbackAndComplaints;

const styles = StyleSheet.create({});
