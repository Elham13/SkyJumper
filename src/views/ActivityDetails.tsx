import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';
import Collapsible from '../components/Cards/Collapsable';
import ActivityDetailsCollapseContents from '../components/Activity/ActivityDetailsCollapseContents';

const ActivityDetails = () => {
  return (
    <View style={{flex: 1}}>
      <PageHeader title="Activity Details" />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Collapsible
            title="Trampoline Jump"
            content={<ActivityDetailsCollapseContents />}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default ActivityDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
