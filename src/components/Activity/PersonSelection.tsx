import React, {useEffect} from 'react';
import {
  StyleIcon,
  StyleText,
  StyleTouchableOpacity,
  StyleView,
} from '../../utils/TailwindAndUIkiteCombination';
import {PersonSelectionProps} from './ActivityDetailsCollapseContents';
import {useAppInfo} from '../../contexts/AppInfoProvider';

type Props = {
  data: PersonSelectionProps;
  title: string;
  setData: React.Dispatch<React.SetStateAction<PersonSelectionProps>>;
};

type ItemType = keyof PersonSelectionProps;

const PersonSelection = ({data, title, setData}: Props) => {
  const {appInfo, setAppInfo} = useAppInfo();

  const handleDecrement = (elem: string) => {
    setData(prev => ({
      ...prev,
      [elem]: {
        ...prev[elem as ItemType],
        count: (prev[elem as ItemType].count -= 1),
      },
    }));
  };

  const handleIncrement = (elem: string) => {
    setData(prev => ({
      ...prev,
      [elem]: {
        ...prev[elem as ItemType],
        count: (prev[elem as ItemType].count += 1),
      },
    }));
  };

  useEffect(() => {
    console.log('data: ', data);
  }, [data]);

  return (
    <StyleView className="w-full bg-transparent space-y-2 items-start p-2">
      {Object.keys(data).map((el, i) => {
        const item = data[el as ItemType];
        return (
          <StyleView
            key={i}
            className="w-full bg-transparent flex flex-row justify-between items-center">
            <StyleView className="w-6/12 h-10 bg-transparent justify-center items-start space-y-1">
              <StyleText category="label">{item.type}</StyleText>
              <StyleText category="c1">RS {item.price} /-</StyleText>
            </StyleView>
            <StyleView className="w-5/12 h-10 flex flex-row justify-center items-center bg-transparent">
              <StyleTouchableOpacity
                onPress={() => handleDecrement(el)}
                className="w-10 h-10 p-2 rounded-l-lg bg-gray-100"
                disabled={item.count < 1}>
                <StyleIcon
                  name="minus-outline"
                  className="w-6 h-6 text-gray-100"
                />
              </StyleTouchableOpacity>
              <StyleView
                className="w-16 h-10 justify-center items-center"
                level="1">
                <StyleText category="label">{item.count}</StyleText>
              </StyleView>
              <StyleTouchableOpacity
                onPress={() => handleIncrement(el)}
                className="w-10 h-10 p-2 rounded-r-lg bg-gray-100">
                <StyleIcon
                  name="plus-outline"
                  className="w-6 h-6 text-gray-100"
                />
              </StyleTouchableOpacity>
            </StyleView>
          </StyleView>
        );
      })}
    </StyleView>
  );
};

export default PersonSelection;
