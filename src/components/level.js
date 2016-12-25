
import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Level extends Component {
  static propTypes = {
    level: PropTypes.number.isRequired,
  }

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

export default Level;
