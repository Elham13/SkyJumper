import React, {useState, useEffect} from 'react';
import { Dimensions } from 'react-native';
import {View, Button, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import IonIcon from 'react-native-vector-icons/Ionicons';
const width=Dimensions.get("screen").width
type PropTypes = {
    price: string;
    discountText: string;
  };

const Collapsible = ({price,discountText}:PropTypes) => {
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
      height.value = 330; // Assuming expanded height is 100
    }
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  //   useEffect(() => {
  //     height.value = !
  //     isOpen ? 0 : 100; // Assuming collapsed height is 0 and expanded height is 100
  //     height.value = height.value; // Add spring animation
  //   }, [isOpen]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          display: 'flex',
          marginTop:20,
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
        <Text style={{paddingLeft: 10, fontWeight:'700',}}>Monthly Membership</Text>
        <IonIcon
          name="caret-down-outline"
          style={{paddingRight: 10}}
          size={22}
        />
      </TouchableOpacity>
      <Animated.View
        style={[{width: width - 40,  backgroundColor: '#FDE9D6', borderBottomLeftRadius:5,borderBottomRightRadius:5}, animatedStyles]}>
        <Text style={{marginLeft:10, marginTop:10}}>
          <Text style={styles.subtitle1}>Monthly </Text>
          <Text style={styles.subtitle2}>Membership</Text>
        </Text>
        <Text style={{marginLeft:10, marginTop:10}}>
          <Text style={styles.priceHeading}>Price </Text> {price}
        </Text >
        <View style={styles.containerRight}>
          <Image
            source={require('../../assets/TrampolinPark.jpg')}
            style={[styles.bgImg,{width: width - 80}]}
          />
          <View style={[styles.layer, {width: width - 80}]}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.monkey}
            />
          </View>
          <View style={styles.bottom}>
            <View style={styles.titleWrapper}>
              <Text
                style={{...styles.txt, color: 'black', textAlign: 'center'}}>
                Membership
              </Text>
            </View>
          </View>
          <Text style={styles.discountText}>{discountText}</Text>
        </View>
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
  subtitle1: {
    fontWeight: '700',
    color: '#01A2E5',
  },
  subtitle2: {
    fontWeight: '700',
    color: '#F69131',
  },
  containerRight: {
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    alignSelf: 'center',
    marginRight: 10,
  },
  layer: {
    height: 150,
    top: 0,
    backgroundColor: '#0009',
    alignItems: 'center',
    position: 'absolute',
  },
  bgImg: {
    height: 150,
    objectFit: 'cover',
  },
  monkey: {height: 80, objectFit: 'contain', marginTop: 30},
  bottom: {
    display:'flex',
    flexDirection:'row',
    backgroundColor: 'orange',
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  priceHeading: {
    fontWeight: '700',
    color: 'black',
  },
  discountText: {
    marginLeft:10,
    marginTop:10,
    width: 130,
  },
  titleWrapper: {
    width: 130,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  txt: {fontSize: 15, fontWeight: '600'},
});
