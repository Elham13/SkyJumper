import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { Layout, Text, ViewPager } from '@ui-kitten/components';
import { StyleText, StyleView } from '../utils/TailwindAndUIkiteCombination';

export const ViewPagerLazyLoadingShowcase = ({images}): React.ReactElement => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index): boolean => index === selectedIndex;
  useEffect(() => {
    // Function to increment the selected index
    const incrementIndex = () => {
      setSelectedIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
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
      onSelect={setSelectedIndex}
    >
      {images.map((image, index) => (
        <StyleView key={index} level='2' className='rounded-xl my-2 shadow-xl' style={styles.tab}>
          <ImageBackground source={image.img} style={styles.image} />
          <StyleView className='absolute bottom-0 w-full h-20 space-y-1 flex justify-center items-center bg-orange-500' level='1'>
              <StyleText category='c1' appearance='hint' className='text-black'>Call us +918882288001</StyleText>
              <StyleText category='c1' appearance='hint' className='text-black'>Email: enquirey@skyjumpertp.com</StyleText>
              <StyleText category='label' appearance='hint' className='bg-black p-2 rounded-xl'>{image.title}</StyleText>
          </StyleView>
        </StyleView>
      ))}
            {/* <Layout
            level='2'
            style={styles.tab}
            >
        <Image source={require('../assets/images/elham.jpg')} style={styles.image} />
      </Layout>
      <Layout
        level='2'
        style={styles.tab}
      >
        <Text category='h5'>
Tab 2
        </Text>
      </Layout>
      <Layout
            level='2'
            style={styles.tab}
            >
        <Image source={require('../assets/images/elham.jpg')} style={styles.image} />
      </Layout> */}
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
});