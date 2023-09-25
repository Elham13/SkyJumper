import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';

type Props = {
  data: string;
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

const ActivityDetailsCollapseContents = ({data}: Props) => {
  const [dateVisible, setDateVisible] = useState<boolean>(false);
  const [dateToAttend, setDateToAttend] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const [datesArr, setDatesArr] = useState<string[]>([]);

  const onDateChange = (date: any) => {
    setDateToAttend(moment(date).format('YYYY-MM-DD'));
  };

  useEffect(() => {
    const selectedDate = moment(dateToAttend); // Get the current date
    const datesArray = [];
    for (let i = 0; i <= 3; i++) {
      datesArray.push(moment(selectedDate).format('YYYY-MM-DD'));
      selectedDate.add(1, 'day'); // Move to the next day
    }
    setDatesArr(datesArray);
  }, [dateToAttend]);

  return (
    <View style={styles.container}>
      <Text style={styles.time}>60 MIN</Text>
      <Text style={styles.text}>
        1 Hour access to the whole park. Some restrictions apply for ages. Grip
        socks are mandatory. Buy Sky Jumper Grip Socks for Rs 84/-
      </Text>

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
          {dateToAttend && (
            <TouchableOpacity
              style={styles.confirmBtn}
              onPress={() => setDateVisible(false)}>
              <Text style={styles.confirmBtnTxt}>
                Confirm {moment(dateToAttend).format('DD-MMM-YYYY')}
              </Text>
            </TouchableOpacity>
          )}
        </Modal>
      </View>
      <Text style={styles.selectedDate}>
        {moment(dateToAttend).format('MMM YYYY')}
      </Text>
      <View style={styles.weekDaysWrapper}>
        {datesArr?.map((date, id) => {
          const isToday = moment(today).isSame(moment(date));
          return (
            <TouchableOpacity
              key={id}
              style={[
                styles.weekDay,
                {
                  backgroundColor: id === 0 ? '#F99417' : '#FEC868',
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
        {moment(dateToAttend).format('MMM YYYY')}
      </Text>
      <View style={styles.weekDaysWrapper}>
        {timesArray?.map((time, id) => {
          return (
            <TouchableOpacity
              key={id}
              style={styles.weekDay}
              activeOpacity={0.8}>
              <Text style={styles.timeText}>{time}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ActivityDetailsCollapseContents;

const styles = StyleSheet.create({
  container: {
    padding: 12,
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
    backgroundColor: '#FEC868',
  },
  timeText: {
    fontWeight: '700',
    color: 'black',
    fontSize: 12,
  },
});
