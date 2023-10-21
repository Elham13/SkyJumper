import React, {useEffect, useState} from 'react';
import {WaverFormChildValues} from '../../types/stateTypes';
import {
  StyleInput,
  StyleScrollView,
  StyleSelect,
  StyleText,
  StyleView,
} from '../../utils/TailwindAndUIkiteCombination';
import {genderOptions} from '../../utils/data';
import {SelectItem} from '@ui-kitten/components';
import {formatLog} from '../../utils/helpers';
import DatePicker from 'react-native-date-picker';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

type PropTypes = {
  defaultValues: WaverFormChildValues;
};

const ChildDetailForm = ({defaultValues}: PropTypes) => {
  const [values, setValues] = useState<WaverFormChildValues>(defaultValues);

  useEffect(() => {
    console.log(formatLog(values));
  }, [values]);
  return (
    <StyleScrollView className="bg-transparent p-4">
      <StyleView className="mb-4 bg-transparent">
        <StyleText category="label" className="text-base">
          First Name
        </StyleText>
        <StyleInput
          value={values.firstName}
          placeholder="First Name"
          onChangeText={val => setValues(prev => ({...prev, firstName: val}))}
        />
      </StyleView>
      <StyleView className="mb-4 bg-transparent">
        <StyleText category="label" className="text-base">
          Last Name
        </StyleText>
        <StyleInput
          value={values.lastName}
          placeholder="Last Name"
          onChangeText={val => setValues(prev => ({...prev, lastName: val}))}
        />
      </StyleView>
      <StyleView className="mb-4 bg-transparent">
        <StyleText category="label" className="text-base">
          Gender
        </StyleText>
        <StyleSelect
          value={genderOptions.find(el => el.id === values.gender?.row)?.label}
          onSelect={index => setValues(prev => ({...prev, gender: index}))}>
          {genderOptions.map(gender => (
            <SelectItem key={gender.id} title={gender.label} />
          ))}
        </StyleSelect>
      </StyleView>
      <StyleView className="mb-4 bg-transparent">
        <StyleText category="label" className="text-base">
          Date of birth
        </StyleText>
        <DatePicker
          date={values.dateOfBirth}
          mode="date"
          maximumDate={new Date()}
          textColor="#000"
          style={{width}}
          onDateChange={nextDate =>
            setValues(prev => ({...prev, dateOfBirth: nextDate}))
          }
        />
      </StyleView>
    </StyleScrollView>
  );
};

export default ChildDetailForm;
