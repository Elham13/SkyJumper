import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';
import Collapsible from '../components/Cards/Collapsable';
import MembershipDetailsCollapsContent from '../components/Membership/MembershipDetailsCollapsContent';

const MembershipDetails = () => {
  return (
    <View style={{flex: 1}}>
      <PageHeader title="Membership Details" />
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <Collapsible
            title="Monthly Membership"
            defaultOpen={true}
            content={<MembershipDetailsCollapsContent />}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default MembershipDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
