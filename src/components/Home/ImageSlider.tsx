import React from 'react';
import {
  StyleImage,
  StyleText,
  StyleView,
} from '../../utils/TailwindAndUIkiteCombination';
import {FlatList} from 'react-native-gesture-handler';
import {Dimensions, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('screen');

type PropTypes = {
  data: {
    id: string;
    title: string;
    img: any;
  }[];
};

const ImageSlider = ({data}: PropTypes) => {
  return (
    <StyleView className="bg-transparent my-8">
      <FlatList
        data={data}
        horizontal
        ItemSeparatorComponent={() => (
          <StyleView className="w-4 bg-transparent" />
        )}
        renderItem={info => {
          return (
            <StyleView
              className="bg-transparent rounded-3xl relative overflow-hidden"
              style={{
                width: width / 1.5,
                height: height / 1.8,
                elevation: 10,
                shadowColor: 'black',
                shadowOffset: {height: 20, width: 20},
                shadowRadius: 200,
              }}>
              <StyleImage
                className="rounded-3xl"
                source={info.item.img}
                style={{resizeMode: 'cover', width: '100%', height: '100%'}}
              />
              <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                useAngle={true}
                angle={45}
                angleCenter={{x: 0.5, y: 0.5}}
                style={styles.linearGradient}>
                <StyleText className="w-[70px] font-bold text-xl text-slate-100 text-end">
                  Main Court
                </StyleText>
              </LinearGradient>
            </StyleView>
          );
        }}
      />
    </StyleView>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  linearGradient: {
    position: 'absolute',
    bottom: -128,
    right: -80,
    height: 256,
    width: 256,
    borderRadius: 100,
    paddingTop: 32,
    paddingLeft: 56,
  },
});
