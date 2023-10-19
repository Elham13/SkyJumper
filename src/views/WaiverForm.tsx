import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  StyleButton,
  StyleInput,
  StyleRadio,
  StyleText,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';
import PageHeader from '../components/PageHeader';
import {RadioGroup} from '@ui-kitten/components';
import {formatLog} from '../utils/helpers';

interface Values {
  email: string;
  waverIsFor: 'Me' | 'Me an my kids' | null;
  showMore: boolean;
}

const WaiverForm = () => {
  const [values, setValues] = useState<Values>({
    email: '',
    waverIsFor: null,
    showMore: false,
  });

  useEffect(() => {
    console.log('values: ', formatLog(values));
  }, [values]);
  return (
    <StyleView className="flex-1">
      <PageHeader title="Waiver From" />
      <StyleView className="p-4">
        <StyleView className="mb-4">
          <StyleText category="label" className="text-base">
            Please enter your email address to start waiver:
          </StyleText>
          <StyleInput
            placeholder="Email"
            onChangeText={val => setValues(prev => ({...prev, email: val}))}
          />
        </StyleView>

        <StyleView className="mb-4">
          <StyleText category="label" className="text-base">
            Waiver is for?
          </StyleText>
          <RadioGroup
            selectedIndex={values.waverIsFor === 'Me' ? 1 : 0}
            onChange={index =>
              setValues(prev => ({
                ...prev,
                waverIsFor: index === 0 ? 'Me an my kids' : 'Me',
              }))
            }>
            <StyleRadio>Me and my kids</StyleRadio>
            <StyleRadio>Just me</StyleRadio>
          </RadioGroup>
        </StyleView>

        {values.showMore ? (
          <StyleView className="mb-4">
            <StyleText category="p2">
              Please enter your Sale Id here to help make your check in as quick
              as possible. If you have received a confirmation email for an
              existing reservation, then your Sale Id can be found in that
              email.
            </StyleText>
          </StyleView>
        ) : (
          <StyleView className="mb-4">
            <StyleButton
              disabled={values.email === '' || values.waverIsFor === null}
              onPress={() => setValues(prev => ({...prev, showMore: true}))}>
              <StyleText>Continue</StyleText>
            </StyleButton>
          </StyleView>
        )}
      </StyleView>
    </StyleView>
  );
};

export default WaiverForm;

const styles = StyleSheet.create({});
