import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StyleView} from '../utils/TailwindAndUIkiteCombination';
import PageHeader from '../components/PageHeader';

const SafetyVideo = () => {
  return (
    <StyleView className="flex-1">
      <PageHeader title="Safety Videos" />
      <Text>SafetyVideo</Text>
    </StyleView>
  );
};

export default SafetyVideo;

const styles = StyleSheet.create({});
