
import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Level extends Component {
  static propTypes = {
    level: PropTypes.number.isRequired,
  }

  render() {
    const { level, onPress } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.level} onPress={onPress}>
          {this.getLabelText()} ({level})
        </Text>
      </View>
    )
  }

  getLabelText() {
    const { level } = this.props;

    switch (level) {
      case 4: return 'beginner';
      case 8: return 'normal';
      case 12: return 'hard';
      case 16: return 'impossible';
    }

    return 'unknown';
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
