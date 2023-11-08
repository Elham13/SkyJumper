import React from 'react';
import {View, Text} from 'react-native';
import {Activity} from '../../types/stateTypes';
import {StyleText, StyleView} from '../../utils/TailwindAndUIkiteCombination';
import moment from 'moment';
import {useTheme} from '../../contexts/ThemProvider';

type PropType = {
  activity: Activity;
};

const SelectedActivityDetail = ({activity}: PropType) => {
  const {bgLight} = useTheme();
  const getAddOnsTotal = () => {
    let addOnsTotal = 0;
    if (activity.addOns && activity.addOns?.length > 0)
      addOnsTotal = activity.addOns.reduce(
        (total, addOn) => total + addOn.price,
        0,
      );
    return addOnsTotal;
  };

  return (
    <StyleView className="bg-transparent p-4">
      <StyleView className="bg-transparent flex-row justify-between">
        <StyleText category="label" className="text-base">
          {activity.title} Price:
        </StyleText>
        <StyleText category="label" className="text-base">
          Rs {activity.price}
        </StyleText>
      </StyleView>

      <StyleText category="label" className="text-lg mt-8 mb-2">
        AddOns:
      </StyleText>

      <StyleView className="bg-transparent">
        <StyleView className="flex-row bg-transparent mb-2">
          <StyleText className="flex-1 font-bold">Name</StyleText>
          <StyleText className="flex-1 font-bold">Quantity</StyleText>
          <StyleText className="flex-1 font-bold">Price</StyleText>
          <StyleText className="flex-1 font-bold">Total</StyleText>
        </StyleView>
        {activity.addOns?.map((addOn, index) => {
          return addOn.quantity > 0 ? (
            <StyleView
              key={index}
              className="flex-row mb-2 py-2 px-1 items-center"
              style={{backgroundColor: bgLight}}>
              <StyleText className="flex-1">{addOn.type}</StyleText>
              <StyleText className="flex-1 ml-2">{addOn.quantity}</StyleText>
              <StyleText className="flex-1">{addOn.price}</StyleText>
              <StyleText className="flex-1">
                {addOn.quantity * addOn.price}
              </StyleText>
            </StyleView>
          ) : null;
        })}
      </StyleView>

      <StyleView className="bg-transparent flex-row justify-between">
        <StyleText category="label" className="text-base">
          Date to Attend
        </StyleText>
        <StyleText category="label" className="text-base">
          {moment(activity.dateToAttend).format('DD-MM-YYYY')}
        </StyleText>
      </StyleView>
      <StyleView className="bg-transparent flex-row justify-between">
        <StyleText category="label" className="text-base">
          Time to Attend
        </StyleText>
        <StyleText category="label" className="text-base">
          {activity.timeToAttend}
        </StyleText>
      </StyleView>
      <StyleView className="bg-transparent flex-row justify-between mt-4">
        <StyleText category="label" className="text-base">
          AddOns Total
        </StyleText>
        <StyleText category="label" className="text-base">
          {getAddOnsTotal()}
        </StyleText>
      </StyleView>
      <StyleView className="bg-transparent flex-row justify-between">
        <StyleText category="label" className="text-base">
          Total
        </StyleText>
        <StyleText category="label" className="text-base">
          {activity.price + getAddOnsTotal()}
        </StyleText>
      </StyleView>
    </StyleView>
  );
};

export default SelectedActivityDetail;
