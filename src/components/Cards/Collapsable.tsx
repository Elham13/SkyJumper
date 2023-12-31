import React, {useState} from 'react';
import {Text, StyleSheet, Dimensions, SafeAreaView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '../../contexts/ThemProvider';
const width = Dimensions.get('window').width;

type CollapsibleProps = {
  title: string;
  content: JSX.Element;
  defaultOpen: boolean;
};

const Collapsible = ({title, content, defaultOpen}: CollapsibleProps) => {
  const {backgroundColor, bgLighter, color} = useTheme();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const height = useSharedValue(defaultOpen ? 500 : 0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      height: height.value,
    };
  });

  const toggleView = () => {
    if (isOpen) {
      height.value = 0;
    } else {
      height.value = 500;
    }
    setIsOpen(!isOpen);
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={[styles.collapseBtn, {backgroundColor}]}
        onPress={toggleView}
        activeOpacity={0.8}>
        <Text style={[styles.collapseTitle, {color}]}>{title}</Text>
        {isOpen ? (
          <IonIcon
            name="caret-up-outline"
            style={{paddingRight: 10, color}}
            size={22}
          />
        ) : (
          <IonIcon
            name="caret-down-outline"
            style={{paddingRight: 10, color}}
            size={22}
          />
        )}
      </TouchableOpacity>

      <SafeAreaView style={{flex: 1}}>
        <Animated.ScrollView
          style={[
            styles.content,
            animatedStyles,
            {backgroundColor: bgLighter},
          ]}>
          {content}
        </Animated.ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Collapsible;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collapseBtn: {
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: width - 32,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
  },
  collapseTitle: {paddingLeft: 10, fontWeight: '700'},
  content: {
    width: width - 32,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});
