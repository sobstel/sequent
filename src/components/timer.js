
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Timer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  text: {
    textAlign: 'center',
  }
});
