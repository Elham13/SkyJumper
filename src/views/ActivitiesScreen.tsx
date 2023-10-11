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

const today = moment().format('YYYY-MM-DD');

type Props = {
  navigation: any;
  route: any;
};

const ActivitiesScreen = ({route, navigation}: Props) => {
  const {params} = route;
  const [dateVisible, setDateVisible] = useState<boolean>(false);
  const [dateToAttend, setDateToAttend] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const [datesArr, setDatesArr] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const onDateChange = (date: any) => {
    setDateToAttend(moment(date).format('YYYY-MM-DD'));
  };

  const handleProceed = () => {
    navigation.navigate('ActivityDetails', {data: selected});
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

  // useEffect(() => {
  //   console.log('selected: ', selected);
  // }, [selected]);

  return (
    <SafeAreaView style={{flex: 1}}>
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
                onPress={() => setDateToAttend(date)}
                key={id}
                style={[
                  styles.weekDay,
                  {
                    backgroundColor: id === 0 ? '#F97316' : '#FEC868',
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

        <View style={styles.membershipView}>
          <MembershipCard
            title="Trampoline Jump"
            subtitle={['Open', 'Jump']}
            price="Rs 700/Hr"
            discountText="1 Child for ₹700 add-on additional children ₹500 per child"
            imageTitle="Open Jump"
            onClick={() =>
              setSelected([...insertOrRemoveFromArray(selected, 'trampoline')])
            }
            style={{
              backgroundColor: selected.includes('trampoline')
                ? '#FFABC9'
                : '#FDE9D6',
            }}
          />
          <MembershipCard
            title="Sky Laser Tag"
            subtitle={['Laser Tag', 'Gaming']}
            price="Rs 1000.00/Hr"
            discountText="1 Children for ₹1000 - add on additional children ₹500 per child"
            imageTitle="Laser Tag Gaming"
            onClick={() =>
              setSelected([...insertOrRemoveFromArray(selected, 'laser tag')])
            }
            style={{
              backgroundColor: selected.includes('laser tag')
                ? '#FFABC9'
                : '#FDE9D6',
            }}
          />
        </View>
        {selected?.length > 0 && (
          <TouchableOpacity
            style={styles.proceedBtn}
            activeOpacity={0.6}
            onPress={handleProceed}>
            <Text style={styles.proceedBtnText}>Proceed</Text>
            <Icon name="shoppingcart" size={24} style={styles.proceedBtnIcon} />
          </TouchableOpacity>
        )}
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
    marginBottom: 20,
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
