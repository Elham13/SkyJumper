import {StyleSheet, Text, View, Modal} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import PageHeader from '../components/PageHeader';
import {ScrollView} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';

const today = moment().format('YYYY-MM-DD');

const ActivitiesScreen = () => {
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

  useEffect(() => {}, [datesArr, dateToAttend]);

  return (
    <View>
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
                ]}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: 'black',
                    fontSize: isToday ? 18 : 12,
                  }}>
                  {isToday ? 'Today' : moment(date).format('ddd')}
                </Text>
                {!isToday && (
                  <Text
                    style={{fontWeight: '700', fontSize: 20, color: 'black'}}>
                    {moment(date).format('D')}
                  </Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ActivitiesScreen;

const styles = StyleSheet.create({
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
    backgroundColor: '#fff',
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
});
