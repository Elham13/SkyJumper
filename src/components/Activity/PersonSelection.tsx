import React from 'react';
import {
  StyleIcon,
  StyleText,
  StyleTouchableOpacity,
  StyleView,
} from '../../utils/TailwindAndUIkiteCombination';
import { PersonSelectionProps } from './ActivityDetailsCollapseContents';

type Props = {
    data: any,
    handleChange: any
}

const PersonSelection = ({data, handleChange}: Props) => {
    
    const handleDecrement = (item:any) => {
        handleChange(pre => ({...pre,item:{
            ...pre[item],count: pre[item].count--
        }}))
    }
    const handleIncrement = (item:any) => {
        if(Object.keys(data).includes(item)){
            handleChange(pre => ({...pre,item:{
                ...pre[item],count: pre[item].count++
            }}))
        }
    }
    
    return (
    <StyleView className="w-full bg-transparent space-y-2 items-start p-2">
      {Object.keys(data).map((item:string, i) => (
        <StyleView
          key={i}
          className="w-full bg-transparent flex flex-row justify-between items-center">
          <StyleView className="w-6/12 h-10 bg-transparent justify-center items-start space-y-1">
            <StyleText category="label">
              {data[item].type}
            </StyleText>
            <StyleText category="c1">
              RS {data[item].price} /-
            </StyleText>
          </StyleView>
          <StyleView className="w-5/12 h-10 flex flex-row justify-center items-center bg-transparent">
            <StyleTouchableOpacity onPress={() => handleDecrement(item)} className="w-10 h-10 p-2 rounded-l-lg bg-gray-100">
              <StyleIcon
                name="minus-outline"
                className="w-6 h-6 text-gray-100"
              />
            </StyleTouchableOpacity>
            <StyleView
              className="w-16 h-10 justify-center items-center"
              level="1">
              <StyleText category="label">
                {data[item].count}
              </StyleText>
            </StyleView>
            <StyleTouchableOpacity onPress={() =>handleIncrement(item)} className="w-10 h-10 p-2 rounded-r-lg bg-gray-100">
              <StyleIcon
                name="plus-outline"
                className="w-6 h-6 text-gray-100"
              />
            </StyleTouchableOpacity>
          </StyleView>
        </StyleView>
      ))}
    </StyleView>
  );
};

export default PersonSelection;
