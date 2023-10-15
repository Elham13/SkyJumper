import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import {
  StyleImage,
  StyleText,
  StyleView,
} from '../../utils/TailwindAndUIkiteCombination';
import {Activity, AddOn} from '../../types/stateTypes';
import {useAppInfo} from '../../contexts/AppInfoProvider';
import QuantitySelect from './QuantitySelect';
import {ActionType} from '../../views/ActivityDetails';

const peopleAddOns: AddOn[] = [{type: 'Age 5+', price: 415, quantity: 0}];

type Props = {
  data: Activity;
  setAddons: (addOn: AddOn, title: string, action: ActionType) => void;
};

export interface SelectionProps {
  type: string;
  price: number;
  count: number;
}

export interface PersonSelectionProps {
  Age5: SelectionProps;
  OneAdult: SelectionProps;
  TwoAdult: SelectionProps;
}
export interface ProductSelectionProps {
  XXS: SelectionProps;
  XS: SelectionProps;
  Small: SelectionProps;
  Medium: SelectionProps;
  Large: SelectionProps;
  XLarge: SelectionProps;
}

const timesArray = [
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
];

const today = moment().format('YYYY-MM-DD');

const ActivityDetailsCollapseContents = ({data, setAddons}: Props) => {
  const {appInfo, setAppInfo} = useAppInfo();
  const [dateVisible, setDateVisible] = useState<boolean>(false);
  const [datesArr, setDatesArr] = useState<string[]>([]);

  const [personSelectionData, setPersonSelectionData] =
    useState<PersonSelectionProps>({
      Age5: {
        type: 'Age 5+',
        price: 415,
        count: 0,
      },
      OneAdult: {
        type: 'Age 5+ with 1 adult',
        price: 700,
        count: 0,
      },
      TwoAdult: {
        type: "Age 5+ additional 2-4 year old's with 2 adult",
        price: 1000,
        count: 0,
      },
    });

  const [productSelectionData, setProductSelectionData] =
    useState<ProductSelectionProps>({
      XXS: {
        type: 'XXS Socks',
        price: 100,
        count: 0,
      },
      XS: {
        type: 'XS Socks(UK 9-10)',
        price: 100,
        count: 0,
      },
      Small: {
        type: 'Small Socks(UK 11-1)',
        price: 100,
        count: 0,
      },
      Medium: {
        type: 'Medium Socks(UK 2-5)',
        price: 100,
        count: 0,
      },
      Large: {
        type: 'Large Socks(UK 6-9)(Adult)',
        price: 100,
        count: 0,
      },
      XLarge: {
        type: 'X Large Socks(UK 9-12)(Adult)',
        price: 100,
        count: 0,
      },
    });

  const handleChange = (action: 'increase' | 'decrease', addOn: AddOn) => {
    data;
    if (data.addOns && data.addOns?.length > 0) {
      if (action === 'increase') addOn['quantity'] += 1;
      if (action === 'decrease') addOn['quantity'] -= 1;
      setAddons(addOn, data.title, action);
    } else {
      addOn['quantity'] += 1;
      setAddons(addOn, data.title, 'set');
    }
  };

  const getQuantity = (type: string) => {
    if (data.addOns && data.addOns?.length > 0) {
      return data.addOns.find(el => el.type === type)?.quantity || 0;
    }
    return 0;
  };

  const onDateChange = (date: any) => {
    setAppInfo(prev => ({...prev, dateToAttend: new Date(date)}));
  };

  useEffect(() => {
    const selectedDate = moment(appInfo.dateToAttend); // Get the current date
    const datesArray = [];
    for (let i = 0; i <= 3; i++) {
      datesArray.push(moment(selectedDate).format('YYYY-MM-DD'));
      selectedDate.add(1, 'day'); // Move to the next day
    }
    setDatesArr(datesArray);
  }, [appInfo.dateToAttend]);

  // useEffect(() => {
  //   console.log('data: ', appInfo.activities);
  // }, [appInfo.activities]);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>60 MIN</Text>
      <Text style={styles.text}>{data.discountText}</Text>

      <View style={styles.whenAttend}>
        <Text style={styles.whenAttendTxt}>Select Date</Text>
        <TouchableOpacity
          onPress={() => setDateVisible(true)}
          activeOpacity={0.8}>
          <Icon name="calendar" size={40} style={{color: 'black'}} />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          visible={dateVisible}
          onRequestClose={() => setDateVisible(false)}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeading}>Select date to attend</Text>
            <TouchableOpacity onPress={() => setDateVisible(false)}>
              <Icon name="close" size={20} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
          <CalendarPicker onDateChange={onDateChange} />
          {appInfo.dateToAttend && (
            <TouchableOpacity
              style={styles.confirmBtn}
              onPress={() => setDateVisible(false)}>
              <Text style={styles.confirmBtnTxt}>
                Confirm {moment(appInfo.dateToAttend).format('DD-MMM-YYYY')}
              </Text>
            </TouchableOpacity>
          )}
        </Modal>
      </View>
      <Text style={styles.selectedDate}>
        {moment(appInfo.dateToAttend).format('MMM YYYY')}
      </Text>
      <View style={styles.weekDaysWrapper}>
        {datesArr?.map((date, id) => {
          const isToday = moment(today).isSame(moment(date));
          return (
            <TouchableOpacity
              key={id}
              onPress={() => onDateChange(date)}
              style={[
                styles.weekDay,
                {
                  backgroundColor: id === 0 ? '#F97316' : '#FEC868',
                },
              ]}
              activeOpacity={0.8}>
              <Text
                style={{
                  fontWeight: '700',
                  color: 'black',
                  fontSize: isToday ? 18 : 12,
                }}>
                {isToday ? 'Today' : moment(date).format('ddd')}
              </Text>
              {!isToday && (
                <Text style={{fontWeight: '700', fontSize: 20, color: 'black'}}>
                  {moment(date).format('D')}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={[styles.whenAttend, {marginTop: 30}]}>
        <Text style={styles.whenAttendTxt}>Select Time</Text>
      </View>
      <Text style={styles.selectedDate}>
        {moment(appInfo.dateToAttend).format('MMM YYYY')}
      </Text>
      <View style={styles.weekDaysWrapper}>
        {timesArray?.map((time, id) => {
          return (
            <TouchableOpacity
              key={id}
              onPress={() =>
                setAppInfo(prev => ({...prev, timeToAttend: time}))
              }
              style={[
                styles.weekDay,
                {
                  backgroundColor:
                    appInfo.timeToAttend === time ? '#F97316' : '#FEC868',
                },
              ]}
              activeOpacity={0.8}>
              <Text style={styles.timeText}>{time}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <StyleView className="py-8 bg-transparent">
        {peopleAddOns?.map((item, index) => (
          <QuantitySelect
            key={index}
            title={item.type}
            price={item.price}
            quantity={getQuantity(item.type)}
            onChange={action => handleChange(action, item)}
          />
        ))}
      </StyleView>
      <StyleView className="flex-row items-center justify-between bg-transparent">
        <StyleView className="bg-transparent w-7/12">
          <StyleText className="font-bold">Socks</StyleText>
          <StyleText className="text-sm">
            All people must wear jumps adventure trampoline socks when using the
            activity
          </StyleText>
        </StyleView>
        <StyleView className="w-4/12 h-20 bg-transparent flex flex-row justify-center p-1 items-center">
          <StyleImage
            className="w-full h-16 object-contain"
            source={require('../../assets/happyMonkey.png')}
          />
        </StyleView>
      </StyleView>
    </View>
  );
};

export default ActivityDetailsCollapseContents;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingBottom: 40,
  },
  time: {
    backgroundColor: 'orange',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 8,
    borderRadius: 6,
    fontSize: 18,
  },
  text: {marginVertical: 20, fontSize: 16},
  whenAttend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  whenAttendTxt: {
    color: 'orange',
    fontWeight: '700',
    fontSize: 20,
  },
  modalHeader: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalHeading: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
  },
  closeIcon: {
    color: 'red',
  },
  confirmBtn: {
    backgroundColor: 'darkorange',
    alignSelf: 'center',
    marginTop: 22,
    padding: 12,
    borderRadius: 8,
  },
  confirmBtnTxt: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  selectedDate: {
    fontWeight: '800',
    fontSize: 18,
    marginTop: 12,
    marginBottom: 6,
  },
  weekDaysWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  weekDay: {
    width: 80,
    height: 80,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  timeText: {
    fontWeight: '700',
    color: 'black',
    fontSize: 12,
  },
});
