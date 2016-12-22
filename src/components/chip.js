
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Chip extends Component {
  render() {
    return (
      <View style={styles.chip}>
        <Text style={styles.text}>{this.props.number}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  chip: {
    margin: 10,
    padding: 5,
    backgroundColor: '#333',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  }
});
