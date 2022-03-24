/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

// Layout
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.orangeBox} />
      <View style={styles.whiteBox} />
      <View style={styles.greenBox} />
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#454545',
  },
  orangeBox: {
    width: 80,
    height: 80,
    backgroundColor: 'orange',
  },
  whiteBox: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
  },
  greenBox: {
    width: 80,
    height: 80,
    backgroundColor: 'blue',
  },
});

export default App;
