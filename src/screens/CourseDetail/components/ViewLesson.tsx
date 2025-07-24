import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ViewLesson = ({ data }: any) => {
  return (
    <View style={styles.moduleContent}>
      <Text style={styles.lessonText}>{data?.title}</Text>
    </View>
  );
};

export default ViewLesson;

const styles = StyleSheet.create({
  moduleContent: {
    backgroundColor: '#e5e7e9',
    margin: 5,
    padding: 15,
    borderRadius: 10,
  },
  lessonText: {
    fontWeight: '500',
    fontSize: 13,
  },
});
