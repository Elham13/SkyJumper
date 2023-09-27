import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';
import Collapsible from '../components/Cards/Collapsable';
import ActivityDetailsCollapseContents from '../components/Activity/ActivityDetailsCollapseContents';
import {camelCaseToProperCase} from '../utils/helpers';
import {
  StyleButton,
  StyleText,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';

import {Icon, IconElement} from '@ui-kitten/components';

type Props = {
  route: any;
};

const ActivityDetails = ({route}: Props) => {
  return (
    <View style={{flex: 1}}>
      <PageHeader title="Activity Details" />
      <ScrollView>
        <View style={styles.container}>
          {route?.params?.data?.length > 0
            ? route.params?.data.map((elem: string, index: number) => (
                <Collapsible
                  key={index}
                  title={camelCaseToProperCase(elem)}
                  content={<ActivityDetailsCollapseContents data={elem} />}
                />
              ))
            : ''}
        </View>
      </ScrollView>
      <StyleView className="bg-orange-500 p-2 flex-row gap-2">
        <TouchableOpacity activeOpacity={0.7} style={styles.bottomBtn}>
          <StyleText className="text-slate-100 text-center py-2">
            View (RS 00.00/-)
          </StyleText>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.bottomBtn}>
          <StyleText className="text-slate-100 text-center p-2">
            Checkout
          </StyleText>
          <Icon fill="#8F9BB3" name="star" />
        </TouchableOpacity>
      </StyleView>
    </View>
  );
};

export default ActivityDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBtn: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    flex: 1,
  },
});
