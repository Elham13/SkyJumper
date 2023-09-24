import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import IonIcon from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('screen').width;
type PropTypes = {
  title: string;
  content: JSX.Element;
};

const Collapsible = ({title, content}: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const height = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const toggleView = () => {
    if (isOpen) {
      height.value = 0;
    } else {
      height.value = 330;
    }
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          display: 'flex',
          marginTop: 20,
          justifyContent: 'space-between',
          backgroundColor: '#F69131',
          width: width - 40,
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
          height: 40,
          alignItems: 'center',
          flexDirection: 'row',
        }}
        onPress={toggleView}>
        <Text style={{paddingLeft: 10, fontWeight: '700'}}>{title}</Text>
        <IonIcon
          name="caret-down-outline"
          style={{paddingRight: 10}}
          size={22}
        />
      </TouchableOpacity>
      <Animated.View
        style={[
          {
            width: width - 40,
            backgroundColor: '#FDE9D6',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          },
          animatedStyles,
        ]}>
        {content}
      </Animated.View>
    </View>
  );
};

export default Collapsible;

const styles = StyleSheet.create({
  // container: {
  //   alignSelf: 'center',
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
