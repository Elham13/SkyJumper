import React from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import {StyleSheet} from 'react-native';
import {StyleView} from '../utils/TailwindAndUIkiteCombination';
import PageHeader from '../components/PageHeader';

const SafetyVideo = () => {
  return (
    <StyleView className="flex-1">
      <PageHeader title="Safety Videos" />
      <YoutubePlayer height={300} videoId={'jVM_C97uRMM'} />
    </StyleView>
  );
};

export default SafetyVideo;

const styles = StyleSheet.create({});
