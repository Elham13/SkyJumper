import {StyleSheet, View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';
import Collapsible from '../components/Cards/Collapsable';
import ActivityDetailsCollapseContents from '../components/Activity/ActivityDetailsCollapseContents';
import {camelCaseToProperCase} from '../utils/helpers';

type Props = {
  route: any;
};

const ActivityDetails = ({route}: Props) => {
  return (
    <View style={{flex: 1}}>
      <PageHeader title="Activity Details" />
      <ScrollView>
        <View style={styles.container}>
          {route?.params?.data?.length > 0
            ? route.params?.data.map((elem: string, index: number) => (
                <Collapsible
                  key={index}
                  title={camelCaseToProperCase(elem)}
                  content={<ActivityDetailsCollapseContents data={elem} />}
                />
              ))
            : ''}
        </View>
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
