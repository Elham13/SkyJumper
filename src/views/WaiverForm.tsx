import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  StyleButton,
  StyleCheckBox,
  StyleInput,
  StyleRadio,
  StyleScrollView,
  StyleSelect,
  StyleText,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';
import PageHeader from '../components/PageHeader';
import {IndexPath, RadioGroup, SelectItem} from '@ui-kitten/components';
import {formatLog} from '../utils/helpers';
import {ageOptions, genderOptions} from '../utils/data';
import {WaverFormChildValues, WaverFromValues} from '../types/stateTypes';
import Collapsible from '../components/Cards/Collapsable';
import ChildDetailForm from '../components/WaverForm/ChildDetailForm';
import ParticipantAgreement from '../components/WaverForm/ParticipantAgreement';

const WaiverForm = () => {
  const [values, setValues] = useState<WaverFromValues>({
    email: '',
    waverIsFor: 'Me an my kids',
    showMore: false,
    saleId: '',
    receiveOffers: false,
    adultFirstName: '',
    adultLastName: '',
    createPassword: '',
    adultGender: new IndexPath(0),
    phoneNumber: '',
    city: '',
    country: '',
    age: new IndexPath(0),
    consent: {
      certifyIamAdult: false,
      certifyIAmParent: false,
      myFullName: '',
    },
  });

  const [children, setChildren] = useState<WaverFormChildValues[]>([]);

  const addMoreChildren = () => {
    const tempChild: WaverFormChildValues = {
      firstName: '',
      lastName: '',
      gender: new IndexPath(0),
      dateOfBirth: new Date(),
    };
    setChildren(prev => [...prev, tempChild]);
  };

  useEffect(() => {
    console.log('values: ', formatLog(values));
  }, [values]);
  return (
    <StyleScrollView className="flex-1">
      <PageHeader title="Waiver From" />
      <StyleView className="p-4">
        <StyleView className="mb-4">
          <StyleText category="label" className="text-base">
            Please enter your email address to start waiver:
          </StyleText>
          <StyleInput
            value={values.email}
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
            <StyleView className="mb-4">
              <StyleText category="label" className="text-base">
                Sale Id(In Case Of Party)
              </StyleText>
              <StyleInput
                placeholder="Sale ID"
                value={values.saleId}
                onChangeText={val =>
                  setValues(prev => ({...prev, saleId: val}))
                }
              />
            </StyleView>
            <StyleView className="mb-4">
              <StyleCheckBox
                onChange={checked =>
                  setValues(prev => ({...prev, receiveOffers: checked}))
                }
                checked={values.receiveOffers}>
                I wish to receive special offers and discounts
              </StyleCheckBox>
            </StyleView>
            <StyleView className="mb-4">
              <StyleText category="label" className="text-base">
                Adult First Name
              </StyleText>
              <StyleInput
                value={values.adultFirstName}
                placeholder="Adult First Name"
                onChangeText={val =>
                  setValues(prev => ({...prev, adultFirstName: val}))
                }
              />
            </StyleView>
            <StyleView className="mb-4">
              <StyleText category="label" className="text-base">
                Adult Last Name
              </StyleText>
              <StyleInput
                value={values.adultLastName}
                placeholder="Adult Last Name"
                onChangeText={val =>
                  setValues(prev => ({...prev, adultLastName: val}))
                }
              />
            </StyleView>
            <StyleView className="mb-4">
              <StyleText category="label" className="text-base">
                Create Password
              </StyleText>
              <StyleInput
                value={values.createPassword}
                placeholder="Create Password"
                onChangeText={val =>
                  setValues(prev => ({...prev, createPassword: val}))
                }
              />
            </StyleView>
            <StyleView className="mb-4">
              <StyleText category="label" className="text-base">
                Adult Gender
              </StyleText>
              <StyleSelect
                value={
                  genderOptions.find(el => el.id === values.adultGender?.row)
                    ?.label
                }
                onSelect={index =>
                  setValues(prev => ({...prev, adultGender: index}))
                }>
                {genderOptions.map(gender => (
                  <SelectItem key={gender.id} title={gender.label} />
                ))}
              </StyleSelect>
            </StyleView>
            <StyleView className="mb-4">
              <StyleText category="label" className="text-base">
                Phone Number
              </StyleText>
              <StyleInput
                value={values.phoneNumber}
                placeholder="Phone Number"
                onChangeText={val =>
                  setValues(prev => ({...prev, phoneNumber: val}))
                }
              />
            </StyleView>
            <StyleView className="mb-4">
              <StyleText category="label" className="text-base">
                City
              </StyleText>
              <StyleInput
                value={values.city}
                placeholder="City"
                onChangeText={val => setValues(prev => ({...prev, city: val}))}
              />
            </StyleView>
            <StyleView className="mb-4">
              <StyleText category="label" className="text-base">
                Country
              </StyleText>
              <StyleInput
                value={values.country}
                placeholder="Country"
                onChangeText={val =>
                  setValues(prev => ({...prev, country: val}))
                }
              />
            </StyleView>
            <StyleView className="mb-4">
              <StyleText category="label" className="text-base">
                Age
              </StyleText>
              <StyleSelect
                value={ageOptions.find(el => el.id === values.age?.row)?.label}
                onSelect={index => setValues(prev => ({...prev, age: index}))}>
                {ageOptions.map(age => (
                  <SelectItem key={age.id} title={age.label} />
                ))}
              </StyleSelect>
            </StyleView>
            <StyleButton onPress={addMoreChildren}>
              Add More Children
            </StyleButton>
            {children?.map((child, ind) => (
              <Collapsible
                key={ind}
                title={`Details of Child ${ind + 1}`}
                content={<ChildDetailForm defaultValues={child} />}
                defaultOpen={false}
              />
            ))}
            <ParticipantAgreement />

            <StyleCheckBox
              className="text-lg mt-4"
              checked={values.consent.certifyIAmParent}
              onChange={checked =>
                setValues(prev => ({
                  ...prev,
                  consent: {...prev.consent, certifyIAmParent: checked},
                }))
              }>
              <StyleText>
                I certify that I am the parent or legal guardian of the above
                minors and confirm that the information I entered are accurate
                and true
              </StyleText>
            </StyleCheckBox>
            <StyleCheckBox
              className="text-lg mt-4"
              checked={values.consent.certifyIamAdult}
              onChange={checked =>
                setValues(prev => ({
                  ...prev,
                  consent: {...prev.consent, certifyIamAdult: checked},
                }))
              }>
              <StyleText>
                I am at least 18 years old and I have read and agree to the
                terms of the above agreement
              </StyleText>
            </StyleCheckBox>
            <StyleText className="my-4">
              By typing your name bellow you are electronically certifying this
              waver document just as if you would physically sign it if it was
              on paper
            </StyleText>
            <StyleView className="mb-4">
              <StyleText category="label" className="text-base">
                Type your Full Name
              </StyleText>
              <StyleInput
                value={values.consent.myFullName}
                placeholder="Your Full Name"
                onChangeText={val =>
                  setValues(prev => ({
                    ...prev,
                    consent: {...prev.consent, myFullName: val},
                  }))
                }
              />
            </StyleView>
            {values.consent.certifyIAmParent &&
              values.consent.certifyIamAdult &&
              values.consent.myFullName !== '' && (
                <StyleButton>
                  <StyleText>Submit</StyleText>
                </StyleButton>
              )}
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
    </StyleScrollView>
  );
};

export default WaiverForm;

const styles = StyleSheet.create({});
