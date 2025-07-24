import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const NotFoundScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.notFoundTextHeading}>Oops!</Text>
      <Text style={styles.notFoundTextDetail}>Data Not Found</Text>
    </View>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundTextHeading: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
  },
  notFoundTextDetail: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
