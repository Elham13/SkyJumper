import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import PageHeader from '../components/PageHeader';
import Collapsible from '../components/Cards/Collapsable';
import ActivityDetailsCollapseContents from '../components/Activity/ActivityDetailsCollapseContents';
import {camelCaseToProperCase} from '../utils/helpers';
import {
  StyleButton,
  StyleText,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';

import {Icon} from '@ui-kitten/components';
import {useAppInfo} from '../contexts/AppInfoProvider';

const ActivityDetails = () => {
  const {appInfo} = useAppInfo();

  return (
    <StyleView className="w-full h-full" level="1">
      <PageHeader title="Activity Details" />
      <ScrollView>
        <View style={styles.container}>
          {appInfo.activities?.length > 0
            ? appInfo.activities.map((elem, index: number) => (
                <Collapsible
                  key={index}
                  title={camelCaseToProperCase(elem.title)}
                  content={<ActivityDetailsCollapseContents data={elem} />}
                  defaultOpen={index === 0 ? true : false}
                />
              ))
            : ''}
        </View>
      </ScrollView>
      <StyleView className="w-full h-20 flex flex-row justify-center items-center space-x-2 bg-orange-500">
        <StyleButton
          className="w-5/12"
          accessoryRight={
            <Icon fill="#ffffff" name="arrow-ios-upward-outline" />
          }
          status="control"
          appearance="outline">
          <StyleText category="label">View (RS 00.00/-)</StyleText>
        </StyleButton>
        <StyleButton
          accessoryRight={<Icon fill="#ffffff" name="shopping-cart-outline" />}
          className="w-5/12 "
          status="control"
          appearance="outline">
          <StyleText category="label">Checkout</StyleText>
        </StyleButton>
      </StyleView>
    </StyleView>
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
