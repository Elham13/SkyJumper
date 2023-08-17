import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

type PropType = {
  data: any[];
  activeIndex: number;
};

const PaginationDots = ({data, activeIndex}: PropType) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.paginationDot,
            index === activeIndex && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue', // Color for the active dot
  },
});

export default PaginationDots;
