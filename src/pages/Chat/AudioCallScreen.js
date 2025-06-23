import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { moderateScale } from 'react-native-size-matters';
import ViewWrapper from '../../Components/ViewWrapper.js';

const AudioCallScreen = ({ route }) => {
  const { title } = route.params;

  return (
    <ViewWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>Calling {title}...</Text>
        <Text style={styles.status}>Connecting...</Text>
      </View>
    </ViewWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(22),
    fontWeight: '600',
  },
  status: {
    marginTop: 10,
    fontSize: moderateScale(14),
    color: 'gray',
  },
});

export default AudioCallScreen;
