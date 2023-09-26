import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { Divider, IndexPath, Text, Input,  Select, SelectItem, Datepicker } from '@ui-kitten/components'
import { ProfileFormDataProps } from '../../views/MyProfileScreen'
import { StyleInput, StyleSelect, StyleView } from '../../utils/TailwindAndUIkiteCombination'

export interface ProfileFormProps {
    formData: ProfileFormDataProps,
    setFormData: any
    edit: Boolean
}

export default function ProfileForm({formData,setFormData,edit}:ProfileFormProps) {
    const [selectedIndex, setSelectedIndex] = React.useState<IndexPath | IndexPath[]>(new IndexPath(0));
    const renderCaption = (): React.ReactElement => {
        return (
          <View style={styles.captionContainer}>
            {/* {AlertIcon(styles.captionIcon)} */}
            <Text style={styles.captionText}>
    Should contain at least 8 symbols
            </Text>
          </View>
        );
      };

  return (
    <StyleView level='1' className='w-full h-5/6 flex justify-between items-start'>
        <Input
      label='Full name'
      placeholder='enter your full name'
      disabled={edit ? false : true}
      value={formData['fullname']}
      onChangeText={nextValue => setFormData((item:ProfileFormDataProps) => ({...item,fullname: nextValue}))}
    />
        <StyleInput
        className='border-none'
      label='Phone'
      placeholder='enter your phone number'
      
      disabled={edit ? false : true}
      value={formData.phone}
      onChangeText={nextValue => setFormData((item:ProfileFormDataProps) => ({...item,phone: nextValue}))}
    />
    <Datepicker
label='Date Of Brith'
        date={formData.dateOfBrith}
        disabled={edit ? false : true}
        onSelect={nextDate => setFormData((item:ProfileFormDataProps) => ({...item,dateOfBrith: nextDate}))}
      />
        <Input
      label='Email'
      placeholder='enter your full name'
      disabled={edit ? false : true}
      value={formData['email']}
      onChangeText={nextValue => setFormData((item:ProfileFormDataProps) => ({...item,email: nextValue}))}
    />

    <Divider />
    <StyleView className='w-full flex justify-start items-start'>
        <StyleInput disabled={edit ? false : true} label='Address' value={formData.address} onChange={nextValue => setFormData((item:ProfileFormDataProps) => ({...item,address: nextValue})) } />
    </StyleView>
    </StyleView>
  )
}

const styles = StyleSheet.create({
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
});