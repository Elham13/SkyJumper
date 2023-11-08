import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useMemo, useRef} from 'react';
import PageHeader from '../components/PageHeader';
import Collapsible from '../components/Cards/Collapsable';
import ActivityDetailsCollapseContents from '../components/Activity/ActivityDetailsCollapseContents';
import {
  StyleButton,
  StyleText,
  StyleView,
} from '../utils/TailwindAndUIkiteCombination';
import {Icon} from '@ui-kitten/components';
import {useAppInfo} from '../contexts/AppInfoProvider';
import {useTheme} from '../contexts/ThemProvider';

export type ActionType = 'set' | 'increase' | 'decrease';

const ActivityDetails = ({navigation}: {navigation: any}) => {
  const {backgroundColor, color} = useTheme();
  const totalPrice = useRef<number>(0);
  const {appInfo} = useAppInfo();

  useMemo(() => {
    const total = appInfo.activities.reduce((total, item) => {
      let addOnPrice = item.addOns?.reduce((addonTotal, addOn) => {
        return addonTotal + addOn.quantity * addOn.price;
      }, 0);
      addOnPrice = addOnPrice || 0;
      return total + item.price + addOnPrice;
    }, 0);
    totalPrice.current = total;
  }, [appInfo.activities]);

  return (
    <StyleView className="w-full h-full" level="1">
      <PageHeader title="Activity Details" />
      <ScrollView>
        <View style={styles.container}>
          {appInfo.activities?.length > 0
            ? appInfo.activities.map((elem, index: number) => {
                return (
                  <Collapsible
                    key={index}
                    title={elem.title}
                    content={
                      <ActivityDetailsCollapseContents
                        activity={elem}
                        index={index}
                      />
                    }
                    defaultOpen={index === 0 ? true : false}
                  />
                );
              })
            : ''}
        </View>
      </ScrollView>
      <StyleView
        className="w-full h-20 flex flex-row items-center space-x-2 px-4"
        style={{backgroundColor}}>
        <StyleButton
          className="flex-1"
          accessoryRight={<Icon fill={color} name="arrow-ios-upward-outline" />}
          status="control"
          appearance="outline">
          <StyleText category="label" style={{color}}>
            View (Rs {totalPrice.current}
            /-)
          </StyleText>
        </StyleButton>
        <StyleButton
          accessoryRight={<Icon fill={color} name="shopping-cart-outline" />}
          className="flex-1"
          status="control"
          appearance="outline"
          onPress={() => navigation?.navigate('OrderDetail')}>
          <StyleText category="label" style={{color}}>
            Checkout
          </StyleText>
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
});
