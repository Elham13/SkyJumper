import React, {useEffect} from 'react';
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ViewPager} from '@ui-kitten/components';
import {StyleText, StyleView} from '../utils/TailwindAndUIkiteCombination';
import {useTheme} from '../contexts/ThemProvider';

type PropType = {
  images: {id: string; title: string; img: ImageSourcePropType}[];
};

const {height} = Dimensions.get('window');

export const ViewPagerLazyLoadingShowcase = ({images}: PropType) => {
  const {backgroundColor, color} = useTheme();
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const shouldLoadComponent = (index: number): boolean =>
    index === selectedIndex;

  useEffect(() => {
    // Function to increment the selected index
    const incrementIndex = () => {
      setSelectedIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    };

    // Start the auto-slide interval (adjust the delay as needed)
    const autoSlideInterval = setInterval(incrementIndex, 3000); // Change image every 3 seconds

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [images]);
  return (
    <ViewPager
      selectedIndex={selectedIndex}
      shouldLoadComponent={shouldLoadComponent}
      onSelect={setSelectedIndex}>
      {images.map((image, index) => (
        <StyleView
          key={index}
          level="2"
          className="rounded-xl my-2 shadow-xl"
          style={styles.tab}>
          <ImageBackground source={image.img} style={styles.image} />
          <StyleView
            className="absolute bottom-0 w-full h-20 space-y-1 flex justify-center items-center opacity-50"
            style={{backgroundColor}}
            level="1">
            <StyleText category="c1" appearance="hint" style={{color}}>
              Call us +918882288001
            </StyleText>
            <StyleText category="c1" appearance="hint" style={{color}}>
              Email: enquirey@skyjumpertp.com
            </StyleText>
            <StyleText
              category="label"
              appearance="hint"
              className="bg-black p-2 rounded-xl">
              {image.title}
            </StyleText>
          </StyleView>
        </StyleView>
      ))}
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: height / 4,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});
