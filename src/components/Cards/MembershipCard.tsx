import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {useTheme} from '../../contexts/ThemProvider';

type MembershipCardProps = {
  title: string;
  subtitle?: string[];
  price?: number;
  discountText?: string;
  imageTitle?: string;
  onClick: () => void;
  style?: StyleProp<ViewStyle>;
};

const MembershipCard = ({
  title,
  subtitle,
  price,
  discountText,
  imageTitle,
  onClick,
  style,
}: MembershipCardProps) => {
  const {backgroundColor, color, bgLighter} = useTheme();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onClick}>
      <View style={[styles.container, style, {backgroundColor: bgLighter}]}>
        <View style={styles.details}>
          <Text style={styles.title}>{title}</Text>
          <Text>
            <Text style={styles.subtitle1}>{subtitle?.[0]} </Text>
            <Text style={styles.subtitle2}>{subtitle?.[1]}</Text>
          </Text>
          <Text>
            <Text style={styles.priceHeading}>Price </Text> RS {price}/Hr
          </Text>
          <Text style={styles.discountText}>{discountText}</Text>
        </View>
        <View style={styles.containerRight}>
          <Image
            source={require('../../assets/TrampolinPark.jpg')}
            style={styles.bgImg}
          />
          <View style={styles.layer}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.monkey}
            />
          </View>
          <View style={[styles.bottom, {backgroundColor}]}>
            <View style={styles.titleWrapper}>
              <Text style={{...styles.txt, color, textAlign: 'center'}}>
                {imageTitle}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MembershipCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  details: {
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  title: {
    marginTop: 5,
    height: 25,
    width: 190,
    fontWeight: '700',
    color: 'black',
    fontSize: 16,
  },
  subtitle1: {
    fontWeight: '700',
    color: '#01A2E5',
  },
  subtitle2: {
    fontWeight: '700',
    color: '#F69131',
  },
  priceHeading: {
    fontWeight: '700',
    color: 'black',
  },
  discountText: {
    width: 130,
  },
  containerRight: {
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    alignSelf: 'center',
    marginRight: 10,
  },
  layer: {
    height: 70,
    width: 150,
    top: 0,
    left: 0,
    backgroundColor: '#0009',
    alignItems: 'center',
    position: 'absolute',
  },
  bgImg: {
    height: 70,
    width: 150,
    objectFit: 'cover',
  },
  monkey: {height: 40, objectFit: 'contain', marginTop: 8},
  bottom: {
    justifyContent: 'center',
    padding: 10,
    position: 'relative',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleWrapper: {
    width: 130,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  txt: {fontSize: 10, fontWeight: '600'},
});
