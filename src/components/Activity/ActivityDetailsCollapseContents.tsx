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
import {formatLog} from '../../utils/helpers';
import {useTheme} from '../../contexts/ThemProvider';

const peopleAddOns: AddOn[] = [
  {type: 'Age 5+', price: 415, quantity: 1},
  {type: 'Age 5+ with 1 adult', price: 700, quantity: 1},
  {
    type: "Age 5+ additional 2-4 year old's with 2 adult",
    price: 1000,
    quantity: 1,
  },
];

const productAddOns: AddOn[] = [
  {type: 'XXS Socks', price: 100, quantity: 1},
  {type: 'XS Socks(UK 9-10)', price: 100, quantity: 1},
  {type: 'Small Socks(UK 11-1)', price: 100, quantity: 1},
  {type: 'Medium Socks(UK 2-5)', price: 100, quantity: 1},
  {type: 'Large Socks(UK 6-9)(Adult)', price: 100, quantity: 1},
  {type: 'X Large Socks(UK 9-12)(Adult)', price: 100, quantity: 1},
];

type Props = {
  activity: Activity;
  index: number;
};

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

const ActivityDetailsCollapseContents = ({activity, index}: Props) => {
  const {backgroundColor, color, bgLight} = useTheme();
  const {setAppInfo} = useAppInfo();
  const [dateVisible, setDateVisible] = useState<boolean>(false);
  const [datesArr, setDatesArr] = useState<string[]>([]);

  const handleChange = (action: 'increase' | 'decrease', addOn: AddOn) => {
    setAppInfo(prev => ({
      ...prev,
      activities: prev.activities.map((obj, ind) => {
        if (ind === index) {
          if (obj.addOns && obj.addOns.length > 0) {
            if (obj.addOns?.find(el => el.type === addOn.type)) {
              return {
                ...obj,
                addOns: obj.addOns.map(el => {
                  if (el.type === addOn.type) {
                    return {
                      ...el,
                      quantity:
                        action === 'increase'
                          ? el.quantity + 1
                          : el.quantity - 1,
                    };
                  }
                  return el;
                }),
              };
            } else {
              return {
                ...obj,
                addOns: [...obj.addOns, addOn],
              };
            }
          } else {
            return {...obj, addOns: [addOn]};
          }
        }
        return obj;
      }),
    }));
  };

  const getQuantity = (type: string) => {
    if (activity.addOns && activity.addOns?.length > 0) {
      return activity.addOns.find(el => el.type === type)?.quantity || 0;
    }
    return 0;
  };

  const onDateChange = (date: any) => {
    setAppInfo(prev => ({
      ...prev,
      activities: prev.activities.map((obj, ind) => {
        if (ind === index) {
          return {...obj, dateToAttend: date};
        }
        return obj;
      }),
    }));
  };

  const handleTimeChange = (time: string) => {
    setAppInfo(prev => ({
      ...prev,
      activities: prev.activities.map((obj, ind) => {
        if (ind === index) {
          return {...obj, timeToAttend: time};
        }
        return obj;
      }),
    }));
  };

  useEffect(() => {
    const selectedDate = moment(activity.dateToAttend); // Get the current date
    const datesArray = [];
    for (let i = 0; i <= 3; i++) {
      datesArray.push(moment(selectedDate).format('YYYY-MM-DD'));
      selectedDate.add(1, 'day'); // Move to the next day
    }
    setDatesArr(datesArray);
  }, [activity.dateToAttend]);

  return (
    <View style={styles.container}>
      <Text style={[styles.time, {backgroundColor, color}]}>60 MIN</Text>
      <Text style={styles.text}>{activity.discountText}</Text>

      <View style={styles.whenAttend}>
        <Text style={[styles.whenAttendTxt, {color: backgroundColor}]}>
          Select Date
        </Text>
        <TouchableOpacity
          onPress={() => setDateVisible(true)}
          activeOpacity={0.8}>
          <Icon name="calendar" size={40} style={{color: backgroundColor}} />
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
          {activity.dateToAttend && (
            <TouchableOpacity
              style={[styles.confirmBtn, {backgroundColor}]}
              onPress={() => setDateVisible(false)}>
              <Text style={[styles.confirmBtnTxt, {color}]}>
                Confirm {moment(activity.dateToAttend).format('DD-MMM-YYYY')}
              </Text>
            </TouchableOpacity>
          )}
        </Modal>
      </View>
      <Text style={styles.selectedDate}>
        {moment(activity.dateToAttend).format('MMM YYYY')}
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
                  backgroundColor: id === 0 ? backgroundColor : bgLight,
                },
              ]}
              activeOpacity={0.8}>
              <Text
                style={{
                  fontWeight: '700',
                  color: isToday ? color : 'black',
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
        <Text style={[styles.whenAttendTxt, {color: backgroundColor}]}>
          Select Time
        </Text>
      </View>
      <Text style={styles.selectedDate}>
        {moment(activity.dateToAttend).format('MMM YYYY')}
      </Text>
      <View style={styles.weekDaysWrapper}>
        {timesArray?.map((time, id) => {
          return (
            <TouchableOpacity
              key={id}
              onPress={() => handleTimeChange(time)}
              style={[
                styles.weekDay,
                {
                  backgroundColor:
                    activity.timeToAttend === time ? backgroundColor : bgLight,
                },
              ]}
              activeOpacity={0.8}>
              <Text
                style={[
                  styles.timeText,
                  {color: activity.timeToAttend === time ? color : 'black'},
                ]}>
                {time}
              </Text>
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
      <StyleView className="py-8 bg-transparent">
        {productAddOns?.map((item, index) => (
          <QuantitySelect
            key={index}
            title={item.type}
            price={item.price}
            quantity={getQuantity(item.type)}
            onChange={action => handleChange(action, item)}
          />
        ))}
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
    alignSelf: 'center',
    marginTop: 22,
    padding: 12,
    borderRadius: 8,
  },
  confirmBtnTxt: {
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
    fontSize: 12,
  },
});
