
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LevelPicker extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.level}>Impossible (16)</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  level: {
    color: 'saddlebrown',
    fontSize: 14,
    fontWeight: '500',
  },
});
