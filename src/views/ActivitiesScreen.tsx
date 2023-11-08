import {StyleSheet, Text, View, Modal, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import PageHeader from '../components/PageHeader';
import {ScrollView} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';
import MembershipCard from '../components/Cards/MembershipCard';
import {insertOrRemoveFromArray} from '../utils/helpers';
import {useAppInfo} from '../contexts/AppInfoProvider';
import {goBananaMenus, trampolineMenus1, trampolineMenus2} from './HomeScreen';
import {Activity} from '../types/stateTypes';
import FloatingButton from '../components/FloatingButton';
import {useTheme} from '../contexts/ThemProvider';

const today = moment().format('YYYY-MM-DD');

export const activityList: Activity[] = [
  {
    title: 'Trampoline Jump',
    subTitle: ['Open', 'Jump'],
    price: 700,
    discountText: '1 Child for ₹700 add-on additional children ₹500 per child',
    imageTitle: 'Open Jump',
    dateToAttend: new Date(),
    timeToAttend: '04:00 PM',
  },
  {
    title: 'Sky Jumper Carnival',
    subTitle: ['Open', 'Jump'],
    price: 700,
    discountText: '1 Child for ₹700 add-on additional children ₹500 per child',
    imageTitle: 'Open Jump',
    dateToAttend: new Date(),
    timeToAttend: '04:00 PM',
  },
  {
    title: 'Sky Laser Tag',
    subTitle: ['Laser Tag', 'Gaming'],
    price: 1000.0,
    discountText:
      '1 Children for ₹1000 - add on additional children ₹500 per child',
    imageTitle: 'Laser Tag Gaming',
    dateToAttend: new Date(),
    timeToAttend: '04:00 PM',
  },
  {
    title: 'GenZ The Teen Disco',
    subTitle: ['Open', 'Jump'],
    price: 700,
    discountText: '1 Child for ₹700 add-on additional children ₹500 per child',
    imageTitle: 'Open Jump',
    dateToAttend: new Date(),
    timeToAttend: '04:00 PM',
  },
  {
    title: 'Birthday Party',
    subTitle: ['Open', 'Jump'],
    price: 700,
    discountText: '1 Child for ₹700 add-on additional children ₹500 per child',
    imageTitle: 'Open Jump',
    dateToAttend: new Date(),
    timeToAttend: '04:00 PM',
  },
  {
    title: 'Corporate Event',
    subTitle: ['Open', 'Jump'],
    price: 700,
    discountText: '1 Child for ₹700 add-on additional children ₹500 per child',
    imageTitle: 'Open Jump',
    dateToAttend: new Date(),
    timeToAttend: '04:00 PM',
  },
  {
    title: 'School Trips',
    subTitle: ['Open', 'Jump'],
    price: 700,
    discountText: '1 Child for ₹700 add-on additional children ₹500 per child',
    imageTitle: 'Open Jump',
    dateToAttend: new Date(),
    timeToAttend: '04:00 PM',
  },
  {
    title: 'Active Kitty Party',
    subTitle: ['Open', 'Jump'],
    price: 700,
    discountText: '1 Child for ₹700 add-on additional children ₹500 per child',
    imageTitle: 'Open Jump',
    dateToAttend: new Date(),
    timeToAttend: '04:00 PM',
  },
];

type Props = {
  navigation: any;
};

const ActivitiesScreen = ({navigation}: Props) => {
  const {backgroundColor, color, bgLight, bgLighter} = useTheme();
  const {appInfo, setAppInfo} = useAppInfo();
  const [dateVisible, setDateVisible] = useState<boolean>(false);
  const [datesArr, setDatesArr] = useState<string[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);

  const onDateChange = (date: any) => {
    setAppInfo(prev => ({...prev, dateToAttend: new Date(date)}));
  };

  const handleProceed = () => {
    navigation.navigate('ActivityDetails');
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

  useEffect(() => {
    const tempArr: Activity[] = [];
    if (appInfo?.selectedScreen === 'Go Banana') {
      goBananaMenus.map(el => {
        const found = activityList.find(acl => acl.title === el.title);
        if (found) tempArr.push(found);
      });
    } else if (appInfo?.selectedScreen === 'Trampoline') {
      [...trampolineMenus1, ...trampolineMenus2].map(el => {
        const found = activityList.find(acl => acl.title === el.title);
        if (found) tempArr.push(found);
      });
    }
    setActivities(tempArr);
  }, [appInfo?.selectedScreen]);

  return (
    <SafeAreaView style={{flex: 1, position: 'relative'}}>
      {appInfo.activities?.length > 0 && (
        <FloatingButton onPress={handleProceed} />
      )}
      <PageHeader title="Activities" />
      <ScrollView style={styles.contentsWrapper}>
        <View style={styles.whenAttend}>
          <Text style={styles.whenAttendTxt}>When are you attending?</Text>
          <TouchableOpacity onPress={() => setDateVisible(true)}>
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
                style={[styles.confirmBtn, {backgroundColor}]}
                onPress={() => setDateVisible(false)}>
                <Text style={[styles.confirmBtnTxt, {color}]}>
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
                onPress={() => onDateChange(date)}
                key={id}
                style={[
                  styles.weekDay,
                  {
                    backgroundColor: id === 0 ? backgroundColor : bgLight,
                  },
                ]}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: id === 0 ? color : 'black',
                    fontSize: isToday ? 18 : 12,
                  }}>
                  {isToday ? 'Today' : moment(date).format('ddd')}
                </Text>
                {!isToday && (
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 20,
                      color: id === 0 ? color : 'black',
                    }}>
                    {moment(date).format('D')}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.membershipView}>
          {activities?.length > 0 &&
            activities.map((activity, index) => (
              <MembershipCard
                key={index}
                title={activity?.title}
                subtitle={activity?.subTitle}
                price={activity?.price}
                discountText={activity?.discountText}
                imageTitle={activity?.imageTitle}
                onClick={() =>
                  setAppInfo(prev => ({
                    ...prev,
                    activities: [
                      ...insertOrRemoveFromArray(appInfo?.activities, activity),
                    ],
                  }))
                }
                style={{
                  backgroundColor: appInfo.activities.find(
                    el => el.title === activity.title,
                  )
                    ? bgLight
                    : bgLighter,
                }}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActivitiesScreen;

const styles = StyleSheet.create({
  proceedBtn: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 4,
    marginVertical: 20,
  },
  proceedBtnText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000',
  },
  proceedBtnIcon: {
    fontWeight: '800',
    color: '#000',
  },
  selectedDate: {
    fontWeight: '800',
    fontSize: 18,
    marginTop: 12,
    marginBottom: 6,
  },
  weekDaysWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weekDay: {
    width: 80,
    height: 80,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  contentsWrapper: {
    padding: 12,
  },
  whenAttend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  whenAttendTxt: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
  },
  closeIcon: {
    color: 'red',
  },
  membershipView: {
    paddingBottom: 30,
    position: 'relative',
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
});
